const FPS = 30; // frames per sec
const FRICTION = 0.7; // friction coefficient of space (0 = no friction, 1 = lots of friction)
const GAME_LIVES = 3; // starting number of lives
const LASER_DIST = 0.4; // maximum distance laser can travel as fraction of screen width
const LASER_MAX = 10; // maximum number of lasers on screen at once
const LASER_SPD = 500; // speed of lasers in pixels per sec
const LASER_EXPLODE_DUR = 0.1; // duration of the laser's explosion in sec
const ROIDS_JAG = .4; // jaggedness of the asteroids (0 = none, 1 = lots)
const ROIDS_NUM = 10; // number of roids
const ROIDS_PTS_LG = 20; // points scored for a large asteroid
const ROIDS_PTS_MD = 50; // points scored for a large asteroid
const ROIDS_PTS_SM = 100; // points scored for a large asteroid
const ROIDS_SIZE = 100; // starting size of asteroids in pixels per sec
const SHIP_BLINK_DUR = 0.1; // duration of the ship's blink during invisibility in sec
const SHIP_EXPLODE_DUR = 0.3; // duration of the ship's explosion
const SHIP_INV_DUR = 3; // duration of the ship's invisibility in sec
const ROIDS_SPD = 50; // max starting speed of asteroids in pixels per sec
const ROIDS_VERT = 10; // average number of vertices on each asteroid
const SHIP_SIZE = 30; // ship height in pixels
const SHIP_THRUST = 5; // accelerate of the ship in pixels per sec 
const TURN_SPEED = 180; // turn speed in degrees per sec
const SHOW_CENTRE_DOT = false; // show or hide ship's centre dot
const SHOW_BOUNDING = false; // show or hide collision bounding
const TEXT_FADE_TIME = 2.5; // text fade time in sec
const TEXT_SIZE = 40; // text font height in pixels
const canv = document.getElementById('asteroids-game');
const ctx = canv.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

canv.width = window.innerWidth;
canv.height = window.innerHeight;

function resizeCanvas() {
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;
}


// set up the game parameters
let level, roids, ship, lives, score, text, textAlpha;
newGame();

// set up the event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// set up the game loop

setInterval(update, 1000 / FPS);

function newGame() {
  score = 0;
  level = 0;
  lives = GAME_LIVES;
  ship = newShip();
  newLevel();
}

function newLevel() {
  text = "LEVEL " + (level + 1);
  textAlpha = 1.0;
  createAsteroidBelt();
}

function newShip() {
  return {
    x: canv.width / 2,
    y: canv.height / 2,
    r: SHIP_SIZE / 2,
    a: 90 / 180 * Math.PI,
    blinkTime: Math.ceil(SHIP_BLINK_DUR * FPS),
    blinkNum: Math.ceil(SHIP_INV_DUR / SHIP_BLINK_DUR),
    canShoot: true,
    dead: false,
    lasers: [],
    rot: 0,
    thrusting: false,
    thrust: {
      x: 0,
      y: 0
    }
  }
}

function createAsteroidBelt() {
  roids = [];
  let x, y;
  for (let i = 0; i < ROIDS_NUM + level * 2; i++) {
    do {
      x = Math.floor(Math.random() * canv.width);
      y = Math.floor(Math.random() * canv.height);
    } while (distBetweenPoints(ship.x, ship.y, x, y) < ROIDS_SIZE * 2 + ship.r)
    roids.push(newAsteroid(x, y, Math.ceil(ROIDS_SIZE / 2)));
  }
}

function destroyAsteroid(index) {
  let { x, y, r } = roids[index];

  // split the asteroid in two if necessary
  if (r === ROIDS_SIZE / 2 || r === ROIDS_SIZE / 4) {
    roids.push(newAsteroid(x, y, Math.ceil(r / 2)));
    roids.push(newAsteroid(x, y, Math.ceil(r / 2)));
    score += r === ROIDS_SIZE / 2 ? ROIDS_PTS_LG : ROIDS_PTS_MD;
  } else {
    score += ROIDS_PTS_SM;
  }

  roids.splice(index, 1);
  if (roids.length === 0) {
    level++;
    newLevel();
  }
}

function distBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function drawShip(x, y, a, color = "white") {
  ctx.strokeStyle = color;
  ctx.lineWidth = SHIP_SIZE / 20;
  ctx.beginPath();
  ctx.moveTo(  // nose of the ship
    x + 4 / 3 * ship.r * Math.cos(a),
    y - 4 / 3 * ship.r * Math.sin(a)
  );
  ctx.lineTo(   // rear left
    x - ship.r * (2 / 3 * Math.cos(a) + Math.sin(a)),   
    y + ship.r * (2 / 3 * Math.sin(a) - Math.cos(a))
  );
  ctx.lineTo(   // rear right
    x - ship.r * (2 / 3 * Math.cos(a) - Math.sin(a)),   
    y + ship.r * (2 / 3 * Math.sin(a) + Math.cos(a))
  );
  ctx.closePath();
  ctx.stroke();
}

function explodeShip() {
  ship.explodeTime = Math.ceil(SHIP_EXPLODE_DUR * FPS);
  // ctx.fillStyle = "lime";
  // ctx.strokeStyle = "lime";
  // ctx.beginPath();
  // ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);
  // ctx.fill();
  // ctx.stroke();
}

function gameOver() {
  ship.dead = true;
  text = "Game Over";
  textAlpha = 1.0;
  setTimeout(function() {
    console.log("next page");
    document.location.replace('./AsteroidsHome.html');
  }, 5 * 1000)
}

function newAsteroid(x, y, r) {
  let lvlMult = 1 + .1 * level;
  const roid = {
    x, 
    y,
    xv: Math.random() * ROIDS_SPD * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1),
    yv: Math.random() * ROIDS_SPD * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1),
    r: r,
    a: Math.random() * Math.PI * 2,
    explodeTime: 0,
    vert: Math.floor(Math.random() * (ROIDS_VERT + 1) + ROIDS_VERT / 2),
    offset: []
  };

  // create the vertex offsets array
  for (let i = 0; i < roid.vert; i++) {
    roid.offset.push(Math.random() * ROIDS_JAG * 2 + 1 - ROIDS_JAG);
  }

  return roid;
}

function keyDown(e) {
  if (ship.dead) {
    return;
  }
  switch(e.keyCode) {
    case 32 : // space bar (shoot the laser)
      shootLaser();
      break;
    case 37 : // left arrow (rotate ship left)
      ship.rot = TURN_SPEED / 180 * Math.PI / FPS;
      break;
    case 38 : // up arrow (rotate ship forward)
      ship.thrusting = true;  
      break;
    case 39 : // right arrow (rotate ship right)
      ship.rot = -TURN_SPEED / 180 * Math.PI / FPS;
      break;
    default :

  }
}

function keyUp(e) {
  if (ship.dead) {
    return;
  }
  switch(e.keyCode) {
    case 32 : // space bar (allow shooting again)
      ship.canShoot = true;;
      break;
    case 37 : // left arrow (stop rotating left)
      ship.rot = 0;
      break;
    case 38 : // up arrow (rotate ship forward)
      ship.thrusting = false;  
      break;
    case 39 : // right arrow (rotate ship right)
      ship.rot = 0;
      break;
    default :

  }
}

function shootLaser() {
  // create the laser object
  if (ship.canShoot && ship.lasers.length < LASER_MAX) {
    ship.lasers.push({ // from the nose of the ship
      x: ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
      y: ship.y - 4 / 3 * ship.r * Math.sin(ship.a),
      xv: LASER_SPD * Math.cos(ship.a) / FPS,
      yv: -LASER_SPD * Math.sin(ship.a) / FPS,
      dist: 0,
      explodeTime: 0
    })
  }
  // prevent further shooting
  ship.canShoot = false;
}

function update() {
  let blinkOn = ship.blinkNum % 2 === 0;
  let exploding = ship.explodeTime > 0;

  // draw space
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);


  if (ship.thrusting && !ship.dead) {
    ship.thrust.x += SHIP_THRUST * Math.cos(ship.a) / FPS;
    ship.thrust.y -= SHIP_THRUST * Math.sin(ship.a) / FPS;

    // draw the thruster
    if (!exploding && blinkOn) {
      ctx.fillStyle = "red";
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = SHIP_SIZE / 10;
      ctx.beginPath();
      ctx.moveTo(  // 
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + 0.5 * Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - 0.5 * Math.cos(ship.a))
      );
      ctx.lineTo(   // 
        ship.x - ship.r * 6 / 3 * Math.cos(ship.a), 
        ship.y + ship.r * 6 / 3 * Math.sin(ship.a)
      );
      ctx.lineTo(   // 
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - 0.5 * Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + 0.5 * Math.cos(ship.a))
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  } else {
    ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
    ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
  }

  // draw the ship
  if (!exploding) {
    if (blinkOn && !ship.dead) {
      drawShip(ship.x, ship.y, ship.a);
    }

    // handle blinking
    if (ship.blinkNum > 0) {

      // reduce the blink time
      ship.blinkTime--;

      // reduce the blink num
      if (ship.blinkTime === 0) {
        ship.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
        ship.blinkNum--;
      }
    }

  } else {
    // draw the explosion
    ctx.fillStyle = "darkred";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1.7, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1.4, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1.1, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 0.8, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 0.5, 0, Math.PI * 2, false);
    ctx.fill();
  }

  if (SHOW_BOUNDING) {
    ctx.strokeStyle = "lime";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);
    ctx.stroke();
  }

  // draw the asteroids
  
  for (let i = 0; i < roids.length; i++) {
    const { x, y, r, a, vert, offset} = roids[i];
    ctx.strokeStyle = "slategrey";
    ctx.lineWidth = SHIP_SIZE / 20;
    // draw a path
    ctx.beginPath();
    ctx.moveTo(
      x + r * offset[0] * Math.cos(a),
      y + r * offset[0] *  Math.sin(a)
    );

    // draw the polygen
    for (let j = 1; j < vert; j++) {
      ctx.lineTo(
        x + r * offset[j] * Math.cos(a + j * Math.PI * 2 / vert),
        y + r * offset[j] * Math.sin(a + j * Math.PI * 2 / vert),
      )
    }
    ctx.closePath();
    ctx.stroke();

    if (SHOW_BOUNDING) {
      ctx.strokeStyle = "lime";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.stroke();
    }
  }

  // check for asteroid collisions
  if (!exploding) {

    // only check when not blinking
    if (ship.blinkNum === 0 && !ship.dead) {
      for (let i = 0; i < roids.length; i++) {
        if (distBetweenPoints(ship.x, ship.y, roids[i].x, roids[i].y) < ship.r + roids[i].r) {
          explodeShip();
          destroyAsteroid(i);
          break;
        }
      }
    }
    
    // rotate the ship
    ship.a += ship.rot;
  
    // move the ship
    ship.x += ship.thrust.x;
    ship.y += ship.thrust.y;
  } else {
    ship.explodeTime--;

    if (ship.explodeTime === 0) {
      lives--;
      if (lives === 0) {
        gameOver();
      } else {
        ship = newShip();
      }
    }
  }
  
  // handle edge of screen
  if (ship.x < 0 - ship.r) {
    ship.x = canv.width + ship.r;
  } else if (ship.x > canv.width + ship.r) {
    ship.x = 0 - ship.r;
  }

  if (ship.y < 0 - ship.r) {
    ship.y = canv.height + ship.r;
  } else if (ship.y > canv.height + ship.r) {
    ship.y = 0 - ship.r;
  }


  // move the asteroid
  for (let i = 0; i < roids.length; i++) {
    roids[i].x += roids[i].xv;
    roids[i].y += roids[i].yv;
  
    // handle edge of screen
    if (roids[i].x < 0 - roids[i].r) {
      roids[i].x = canv.width + roids[i].r;
    } else if (roids[i].x > canv.width + roids[i].r) {
      roids[i].x = 0 - roids[i].r;
    }
  
    if (roids[i].y < 0 - roids[i].r) {
      roids[i].y = canv.height + roids[i].r;
    } else if (roids[i].y > canv.height + roids[i].r) {
      roids[i].y = 0 - roids[i].r;
    }
  }

  // move the lasers
  for (let i = ship.lasers.length - 1; i >= 0 ; i--) {
    // check distance travelled
    if (ship.lasers[i].dist > LASER_DIST * canv.width) {
      ship.lasers.splice(i, 1);
      continue;
    }

    // handle the explosion
    if (ship.lasers[i].explodeTime > 0) {
      ship.lasers[i].explodeTime--;

      // destroy the laser after the duration is up
      if (ship.lasers[i].explodeTime === 0) {
        ship.lasers.splice(i, 1);
        continue;
      }
    } else {
    // move the laser
      ship.lasers[i].x += ship.lasers[i].xv;
      ship.lasers[i].y += ship.lasers[i].yv;

      // calculate the distance travelled
      ship.lasers[i].dist += Math.sqrt(Math.pow(ship.lasers[i].xv, 2) + Math.pow(ship.lasers[i].yv, 2));
    }

    // handle the edge of screen
    if (ship.lasers[i].x < 0) {
      ship.lasers[i].x = canv.width;
    } else if (ship.lasers[i].x > canv.width) {
      ship.lasers[i].x = 0;
    }
    if (ship.lasers[i].y < 0) {
      ship.lasers[i].y = canv.height;
    } else if (ship.lasers[i].y > canv.height) {
      ship.lasers[i].y = 0;
    }
  }
  
  // centre dot
  if (SHOW_CENTRE_DOT) {
    ctx.fillStyle = "red";
    ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2)
  }

  // draw the lasers
  for (let i = 0; i < ship.lasers.length; i++) {
    if (ship.lasers[i].explodeTime === 0) {
      ctx.fillStyle = 'salmon';
      ctx.beginPath();
      ctx.arc(ship.lasers[i].x, ship.lasers[i].y, SHIP_SIZE / 15, 0, Math.PI * 2, false);
      ctx.fill();
    } else {
      // draw the explosion
      ctx.fillStyle = 'orangered';
      ctx.beginPath();
      ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.75, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.fillStyle = 'salmon';
      ctx.beginPath();
      ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.5, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.fillStyle = 'pink';
      ctx.beginPath();
      ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.25, 0, Math.PI * 2, false);
      ctx.fill();
    }
  }

  // draw the game text
  if (textAlpha >= 0) {
    ctx.textAlign = "center";
    ctx.baseline = "middle";
    ctx.fillStyle = "rgba(255, 255, 255, " + textAlpha + ")";
    ctx.font = "small-caps " + TEXT_SIZE + "px dejavu sans mono";
    ctx.fillText(text, canv.width / 2, canv.height * 0.75);
    textAlpha -= 1.0 / TEXT_FADE_TIME / FPS;
  }

  // draw the lives
  let lifeColor;
  for (let i = 0; i < lives; i++) {
    lifeColor = exploding && (i === lives - 1) ? "red" : "white";
    drawShip(SHIP_SIZE + i * SHIP_SIZE * 1.2, SHIP_SIZE, 0.5 * Math.PI, lifeColor);
  }

  // draw the score
  ctx.textAlign = "right";
  ctx.textBaseLine = "middle";
  ctx.fillStyle = "white";
  ctx.font = TEXT_SIZE + "px dejavu sans mono";
  ctx.fillText(score, canv.width - SHIP_SIZE / 2, SHIP_SIZE);

  // detect laser hits on asteroids
  let ax, ay, ar, lx, ly;
  for (let i = roids.length - 1; i >= 0; i--) {

    // grab the asteroid properties
    ax = roids[i].x;
    ay = roids[i].y;
    ar = roids[i].r;

    // loop over the lasers
    for (let j = ship.lasers.length - 1; j >= 0; j--) {
      // grab the laser properties
      lx = ship.lasers[j].x;
      ly = ship.lasers[j].y;

      // detect hits
      if (distBetweenPoints(ax, ay, lx, ly) < ar) {        

        // destroy the asteroid and activate the laser explosion
        destroyAsteroid(i);
        ship.lasers[j].explodeTime = Math.ceil(LASER_EXPLODE_DUR * FPS);

        break;
      }
    }
  }
}