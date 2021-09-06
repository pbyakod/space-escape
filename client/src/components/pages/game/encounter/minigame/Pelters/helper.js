import { destroyAsteroid } from "./PelterMovement";
import { LASER_EXPLODE_DUR, FPS, SHIP_SIZE, TEXT_SIZE, TEXT_FADE_TIME } from "./constVariables";
import soundCalls from "../../../../../../utils/sound";

export function dealWithBorder (obj, width, height) {
  if (obj.x < 0 - obj.r) {
    obj.x = width + obj.r;
    obj.y = Math.floor(Math.random() * (height));
  } else if (obj.x > width + obj.r) {
    obj.x = 0 - obj.r;
  }

  if (obj.y < 0 - obj.r) {
    obj.y = height + obj.r;
  } else if (obj.y > height + obj.r) {
    obj.y = 0 - obj.r;
  }
}

export function distBetweenPoints (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function detectExploding(ship, roids, soundOn, level) {
  let score = 0;
  if (!ship.exloding && ship.blinkNum === 0 && !ship.dead) {
    for (let i = 0; i < roids.current.length; i++) {
      if (distBetweenPoints(ship.x, ship.y, roids.current[i].x, roids.current[i].y) < ship.r + roids.current[i].r) {
        ship.explodeShip(soundOn);
        score += destroyAsteroid(i, roids, {}, soundOn, level);
        break;
      }
    }
  }
  return score;
}

export function detectHit(ship, roids, soundOn, level) {
  let score = 0;
  let ax, ay, ar, lx, ly;
  for (let i = roids.current.length - 1; i >= 0; i--) {

    // grab the asteroid properties
    ax = roids.current[i].x;
    ay = roids.current[i].y;
    ar = roids.current[i].r;

    // loop over the lasers
    for (let j = ship.lasers.length - 1; j >= 0; j--) {
      // grab the laser properties
      lx = ship.lasers[j].x;
      ly = ship.lasers[j].y;

      // detect hits
      if (distBetweenPoints(ax, ay, lx, ly) < ar) {        

        // destroy the asteroid and activate the laser explosion
        score += destroyAsteroid(i, roids, {}, soundOn, level);
        ship.lasers[j].explodeTime = Math.ceil(LASER_EXPLODE_DUR * FPS);

        break;
      }
    }
  }
  return score;
}


export function drawShipHealth(ctx, ship) {
   ctx.textAlign = "left";
   ctx.textBaseLine = "middle";
   ctx.fillStyle = ship.health < 30 ? "red" : "white";
   ctx.font = TEXT_SIZE + "px dejavu sans mono";
   ctx.fillText("Ship Health: " + ship.health, SHIP_SIZE * 2, SHIP_SIZE * 2);
}
export function drawShipLives(ctx, shipLives) {
  ctx.textAlign = "left";
  ctx.textBaseLine = "middle";
  ctx.fillStyle = shipLives < shipLives/2 ? "red" : "white";
  ctx.font = TEXT_SIZE + "px dejavu sans mono";
  ctx.fillText("Ship Health: " + shipLives, SHIP_SIZE * 2, SHIP_SIZE * 2); 
}
 
export function drawScore(ctx, canvas, score) {
  ctx.textAlign = "right";
  ctx.textBaseLine = "middle";
  ctx.fillStyle = "white";
  ctx.font = TEXT_SIZE + "px dejavu sans mono";
  ctx.fillText("Score: " + score, canvas.width - SHIP_SIZE * 2, SHIP_SIZE * 2);
}

export function drawGameText(text, textAlpha, ctx, canvas) {
  if (textAlpha.current >= 0) {
    ctx.textAlign = "center";
    ctx.baseline = "middle";
    ctx.fillStyle = "rgba(255, 255, 255, " + textAlpha.current + ")";
    ctx.font = "small-caps " + TEXT_SIZE + "px dejavu sans mono";
    ctx.fillText(text.current, canvas.width / 2, canvas.height * 0.75);
    textAlpha.current -= 0.5 / TEXT_FADE_TIME / FPS;
  }
}

export function drawTimer(ctx, timeLeft, canvas) {
  ctx.textAlign = "right";
  ctx.baseline = "middle";
  ctx.fillStyle = "white";
  ctx.font = TEXT_SIZE + "px dejavu sans mono";
  ctx.fillText(`Light Years Home: ${timeLeft}`, canvas.width - SHIP_SIZE * 2, SHIP_SIZE * 2);
  return timeLeft--;
}


export function gameOver(text, textAlpha, score, ship, soundOn, setGameProcess, shipLives) {
  console.log("=== game over");
  textAlpha.current = 1.0;
  ship.dead = true;
  if (shipLives === 0 || shipLives < 0) {
    text.current = "Your ship is wrecked, you have not made it home!";
    if (soundOn) {
      soundCalls.PlayShipDamaged();
    }
  } else {
    text.current = "Congragulations! You've Made it Home!";
    if (soundOn) {
      soundCalls.PlayAsteroidsVictory();
    }
  }
  setTimeout(function() {
    setGameProcess({
      renderHome: false,
      renderRules: false,
      renderPrepare: false,
      renderCanvas: false,
      renderResult: true,
      displayCharacter: false
    })
    
  }, 5 * 1000)
}
