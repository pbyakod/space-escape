import { SHIP_SIZE, SHIP_BLINK_DUR, SHIP_EXPLODE_DUR, FPS, SHIP_THRUST, FRICTION, LASER_DIST } from './constVaraibles';

export function explodeShip(shipObj, soundOn, soundFile) {
  shipObj.explodeTime = Math.ceil(SHIP_EXPLODE_DUR * FPS);
  if (soundOn) {
    soundFile.play();
  }
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

export function shipMovement(ctx, shipObj) {
  let blinkOn = shipObj.blinkNum % 2 === 0;
  let exploding = shipObj.explodeTime > 0;

  let ship = new Ship(shipObj.x, shipObj.y, shipObj.r, shipObj.a);

  if (!exploding) {
    if (blinkOn) {
      ship.drawShip(ctx);
    }

    if (shipObj.blinkNum > 0) {
      shipObj.blinkTime--;

      if (shipObj.blinkTime === 0) {
        shipObj.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
        shipObj.blinkNum--;
      }
    }

    shipObj.a += shipObj.rot;
    shipObj.x += shipObj.thrust.x;
    shipObj.y += shipObj.thrust.y;
    
  } else {
    ship.drawExlosion(ctx);
    shipObj.explodeTime--;

    // if (shipObj.explodeTime === 0) {
    //   player.shipHealth -= 10;
    //   if (player.shipHealth === 0) {
    //     gameOver();
    //   }
    // }
  }

  if (shipObj.thrusting && !shipObj.dead) {
    shipObj.thrust.x += SHIP_THRUST * Math.cos(shipObj.a) / FPS;
    shipObj.thrust.y -= SHIP_THRUST * Math.sin(shipObj.a) / FPS;
  
    // draw the thrust
    if (!exploding && blinkOn) {
      ship.drawThrust(ctx);
    } 
  } else {
    shipObj.thrust.x -= FRICTION * shipObj.thrust.x / FPS;
    shipObj.thrust.y -= FRICTION * shipObj.thrust.y / FPS;
  }
}

class Ship {
  constructor(x, y, r, a) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.a = a;
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

  explodeShip(soundOn, soundFile) {
    this.explodeTime = Math.ceil(SHIP_EXPLODE_DUR * FPS);
    if (soundOn) {
      soundFile.play();
    }
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