const FPS = 30; // frames per sec
const SHIP_SIZE = 30; // ship height in pixels

const canv = document.getElementById('asteroids-game');
const ctx = canv.getContext("2d");

const ship = {
  x: canv.width / 2,
  y: canv.height / 2,
  r: SHIP_SIZE / 2,
  a: 90 / 180 * Math.PI
}

// set up the game loop

setInterval(update, 1000 / FPS);

function update() {
  // draw space
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);


  // draw ship

  ctx.strokeStyle = "white";
  ctx.lineWidth = SHIP_SIZE / 20;
  ctx.beginPath();
  ctx.moveTo(  // nose of the ship
    ship.x + ship.r * Math.cos(ship.a),
    ship.y - ship.r * Math.sin(ship.a)
  );
  ctx.lineTo(   // rear left
    ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),   // rear right
    ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
  );
  ctx.lineTo(   // rear right
    ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),   // rear right
    ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
  );
  ctx.closePath();
  ctx.stroke();
  // rotate ship


  // move the ship
}