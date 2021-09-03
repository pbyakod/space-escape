import { SHIP_SIZE, SHIP_BLINK_DUR, SHIP_EXPLODE_DUR, FPS, SHIP_THRUST, FRICTION, LASER_DIST, SHIP_INV_DUR, LASER_SPD, LASER_MAX } from './constVaraibles';
import soundCalls from '../../../utils/sound';

export function explodeShip(ship, soundOn) {
  ship.explodeTime = Math.ceil(SHIP_EXPLODE_DUR * FPS);
  if (soundOn) {
    soundCalls.PlayShipWasHit();
  }
}

export function shootLaser(ship, soundOn) {
  if (ship.canShoot && ship.lasers.length < LASER_MAX) {
    ship.lasers.push({ // from the nose of the ship
      x: ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
      y: ship.y - 4 / 3 * ship.r * Math.sin(ship.a),
      xv: LASER_SPD * Math.cos(ship.a) / FPS,
      yv: -LASER_SPD * Math.sin(ship.a) / FPS,
      dist: 0,
      explodeTime: 0
    });
    if (soundOn) {
      soundCalls.PlayShootLaser();
    }
  }
  // prevent further shooting
  ship.canShoot = false;
}

export function drawLaser(ctx, ship) {
  for (let i = 0; i < ship.lasers.length; i++) {
    if (ship.lasers[i].explodeTime === 0) {
      ctx.fillStyle = 'salmon';
      ctx.beginPath();
      // console.log(ship);
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
}

export function moveLaser (canvas, ship) {
  for (let i = ship.lasers.length - 1; i >= 0 ; i--) {
    // check distance travelled
    if (ship.lasers[i].dist > LASER_DIST * canvas.width) {
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
      ship.lasers[i].x = canvas.width;
    } else if (ship.lasers[i].x > canvas.width) {
      ship.lasers[i].x = 0;
    }
    if (ship.lasers[i].y < 0) {
      ship.lasers[i].y = canvas.height;
    } else if (ship.lasers[i].y > canvas.height) {
      ship.lasers[i].y = 0;
    }
  }
}

export function shipMovement(ctx, ship) {
  let blinkOn = ship.blinkNum % 2 === 0;
  let exploding = ship.explodeTime > 0;

  if (!exploding) {
    if (blinkOn) {
      ship.drawShip(ctx);
    }

    if (ship.blinkNum > 0) {
      ship.blinkTime--;

      if (ship.blinkTime === 0) {
        ship.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
        ship.blinkNum--;
      }
    }

    ship.a += ship.rot;
    ship.x += ship.thrust.x;
    ship.y += ship.thrust.y;
    
  } else {
    ship.drawExlosion(ctx);
    ship.explodeTime--;

    // if (ship.explodeTime === 0) {
    //   player.shipHealth -= 10;
    //   if (player.shipHealth === 0) {
    //     gameOver();
    //   }
    // }
  }

  if (ship.thrusting && !ship.dead) {
    ship.thrust.x += SHIP_THRUST * Math.cos(ship.a) / FPS;
    ship.thrust.y -= SHIP_THRUST * Math.sin(ship.a) / FPS;
  
    // draw the thrust
    if (!exploding && blinkOn) {
      ship.drawThrust(ctx);
    } 
  } else {
    ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
    ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
  }
}

export class Ship {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.r = SHIP_SIZE / 2;
    this.a = 90 / 180 * Math.PI;
    this.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
    this.blinkNum = Math.ceil(SHIP_INV_DUR / SHIP_BLINK_DUR);
    this.canShoot = true;
    this.dead = false;
    this.lasers = [];
    this.rot = 0;
    this.explodeTime  = 0;
    this.thrusting = false;
    this.thrust = {
      x: 0,
      y: 0
    }
  }

  drawShip(ctx, color = "white") {
    ctx.strokeStyle = color;
    ctx.lineWidth = SHIP_SIZE / 20;
    ctx.beginPath();
    ctx.moveTo(  // nose of the ship
      this.x + 4 / 3 * this.r * Math.cos(this.a),
      this.y - 4 / 3 * this.r * Math.sin(this.a)
    );
    ctx.lineTo(   // rear left
      this.x - this.r * (2 / 3 * Math.cos(this.a) + Math.sin(this.a)),   
      this.y + this.r * (2 / 3 * Math.sin(this.a) - Math.cos(this.a))
    );
    ctx.lineTo(   // rear right
      this.x - this.r * (2 / 3 * Math.cos(this.a) - Math.sin(this.a)),   
      this.y + this.r * (2 / 3 * Math.sin(this.a) + Math.cos(this.a))
    );
    ctx.closePath();
    ctx.stroke();
  }

  drawThrust(ctx) {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = SHIP_SIZE / 10;
    ctx.beginPath();
    ctx.moveTo(  // 
      this.x - this.r * (2 / 3 * Math.cos(this.a) + 0.5 * Math.sin(this.a)),
      this.y + this.r * (2 / 3 * Math.sin(this.a) - 0.5 * Math.cos(this.a))
    );
    ctx.lineTo(   // 
      this.x - this.r * 6 / 3 * Math.cos(this.a), 
      this.y + this.r * 6 / 3 * Math.sin(this.a)
    );
    ctx.lineTo(   // 
      this.x - this.r * (2 / 3 * Math.cos(this.a) - 0.5 * Math.sin(this.a)),
      this.y + this.r * (2 / 3 * Math.sin(this.a) + 0.5 * Math.cos(this.a))
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  drawExlosion(ctx) {
    ctx.fillStyle = "darkred";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * 1.7, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * 1.4, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * 1.1, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * 0.8, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * 0.5, 0, Math.PI * 2, false);
    ctx.fill();
  }
}