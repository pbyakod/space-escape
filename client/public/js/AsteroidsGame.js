const FPS = 30; // frames per sec
const FRICTION = 0.7; // friction coefficient of space (0 = no friction, 1 = lots of friction)
const ROIDS_NUM = 300; // ship height in pixels
const ROIDS_SIZE = 100; // starting size of asteroids in pixels per sec
const ROIDS_SPD = 50; // max starting speed of asteroids in pixels per sec
const ROIDS_VERT = 10; // average number of vertices on each asteroid
const SHIP_SIZE = 30; // ship height in pixels
const SHIP_THRUST = 5; // accelerate of the ship in pixels per sec 
const TURN_SPEED = 360; // turn speed in degrees per sec
const canv = document.getElementById('asteroids-game');
const ctx = canv.getContext("2d");

const ship = {
  x: canv.width / 2,
  y: canv.height / 2,
  r: SHIP_SIZE / 2,
  a: 90 / 180 * Math.PI,
  rot: 0,
  thrusting: false,
  thrust: {
    x: 0,
    y: 0
  }
}

// set up asteroids
let roids = [];
createAsteroidBelt();

// set up the event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// set up the game loop

setInterval(update, 1000 / FPS);

function createAsteroidBelt() {
  roids = [];
  let x, y;
  for (let i = 0; i < ROIDS_NUM; i++) {
    do {
      x = Math.floor(Math.random() * canv.width);
      y = Math.floor(Math.random() * canv.height);
    } while (distBetweenPoints(ship.x, ship.y, x, y) < ROIDS_SIZE * 2 + ship.r)
    roids.push(newAsteroid(x, y));
  }
}

function distBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function newAsteroid(x, y) {
  const roid = {
    x, 
    y,
    xv: Math.random() * ROIDS_SPD / FPS * (Math.random() < 0.5 ? 1 : -1),
    yv: Math.random() * ROIDS_SPD / FPS * (Math.random() < 0.5 ? 1 : -1),
    r: ROIDS_SIZE / 2,
    a: Math.random() * Math.PI * 2,
    vert: Math.floor(Math.random() * (ROIDS_VERT + 1) + ROIDS_VERT / 2)
  }
  return roid;
}

function keyDown(e) {
  switch(e.keyCode) {
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
  switch(e.keyCode) {
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

function update() {
  // draw space
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);


  if (ship.thrusting) {
    ship.thrust.x += SHIP_THRUST * Math.cos(ship.a) / FPS;
    ship.thrust.y -= SHIP_THRUST * Math.sin(ship.a) / FPS;

    // draw the thruster
    ctx.fillStyle = "red";
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = SHIP_SIZE / 10;
    ctx.beginPath();
    ctx.moveTo(  // nose of the ship
      ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + 0.5 * Math.sin(ship.a)),
      ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - 0.5 * Math.cos(ship.a))
    );
    ctx.lineTo(   // rear left
      ship.x - ship.r * 6 / 3 * Math.cos(ship.a), 
      ship.y + ship.r * 6 / 3 * Math.sin(ship.a)
    );
    ctx.lineTo(   // rear right
      ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - 0.5 * Math.sin(ship.a)),
      ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + 0.5 * Math.cos(ship.a))
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else {
    ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
    ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
  }

  // draw ship

  ctx.strokeStyle = "white";
  ctx.lineWidth = SHIP_SIZE / 20;
  ctx.beginPath();
  ctx.moveTo(  // nose of the ship
    ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
    ship.y - 4 / 3 * ship.r * Math.sin(ship.a)
  );
  ctx.lineTo(   // rear left
    ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + Math.sin(ship.a)),   // rear right
    ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a))
  );
  ctx.lineTo(   // rear right
    ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - Math.sin(ship.a)),   // rear right
    ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + Math.cos(ship.a))
  );
  ctx.closePath();
  ctx.stroke();

  // draw the asteroids
  ctx.strokeStyle = "slategrey";
  ctx.lineWidth = SHIP_SIZE / 20;
  for (var i = 0; i < roids.length; i++) {
    const { x, y, r, a, vert } = roids[i];

    // draw a path
    ctx.beginPath();
    ctx.moveTo(
      x + r * Math.cos(a),
      y + r * Math.sin(a)
    );

    // draw the polygen
    for (let j = 0; j < vert; j++) {
      ctx.lineTo(
        x + r * Math.cos(a + j * Math.PI * 2 / vert),
        y + r * Math.sin(a + j * Math.PI * 2 / vert),
      )
    }
    ctx.closePath();
    ctx.stroke();
    // draw the


  }


  // rotate ship
  ship.a += ship.rot;

  // move the ship
  ship.x += ship.thrust.x;
  ship.y += ship.thrust.y;

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



  // centre dot
  ctx.fillStyle = "red";
  ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2)
}