import { FPS, TEXT_SIZE, TEXT_FADE_TIME, GOLD_SIZE, PLAYER_SIZE } from "./constVaraibles";
import soundCalls from "../../../../../../utils/sound";
import { collectGold } from "./Gold";
export function randomInt(num) {
  // generate a random integer smaller than num
  return Math.floor(Math.random() * num);
}

export function dealWithBorder (obj, width, height) {
  if (obj.x < 0 - obj.r) {
    obj.x = width + obj.r;
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

export function detectCollection(player, golds, soundOn, gameOver) {
  if (gameOver) {
    return 0;
  }
  let score = 0;
    for (let i = 0; i < golds.length; i++) {
      if (distBetweenPoints(player.x, player.y, golds[i].x, golds[i].y) < PLAYER_SIZE / 4 + GOLD_SIZE / 4) {
        score += collectGold(i, golds, player.x, player.y, soundOn)
        break;
      }
    }
  return score;
}

export function drawTimer(ctx, timeLeft) {
  timeLeft = Math.floor(timeLeft);
  ctx.textAlign = "left";
  ctx.textBaseLine = "middle";
  ctx.fillStyle = timeLeft < 10 ? "red" : "white";
  ctx.font = TEXT_SIZE + "px dejavu sans mono";
  ctx.fillText("Time Left: " + timeLeft, PLAYER_SIZE / 2, PLAYER_SIZE / 2);
}
 
export function drawScore(ctx, canvas, score) {
  ctx.textAlign = "right";
  ctx.textBaseLine = "middle";
  ctx.fillStyle = "white";
  ctx.font = TEXT_SIZE + "px dejavu sans mono";
  ctx.fillText("Score: " + score, canvas.width - PLAYER_SIZE / 2, PLAYER_SIZE / 2);
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


export function gameOver(text, textAlpha, score, ship, soundOn, setGameProcess) {
  textAlpha.current = 1.0;
  text.current = "Time is up! You earn " + score/10 + " Gold!";
  if (soundOn) {
    soundCalls.PlayTimeUp();
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
