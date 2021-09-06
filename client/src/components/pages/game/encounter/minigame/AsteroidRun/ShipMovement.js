import { SHIP_SIZE, SHIP_BLINK_DUR, SHIP_EXPLODE_DUR, FPS, SHIP_THRUST, FRICTION, LASER_DIST, SHIP_INV_DUR, LASER_SPD, LASER_MAX, HIT_DAMAGE } from './constVariables';
import { dealWithBorder } from "./helper";
import soundCalls from '../../../../../../utils/sound';

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
    };
    this.health = 100;

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

  drawLaser(ctx) {
    for (let i = 0; i < this.lasers.length; i++) {
      if (this.lasers[i].explodeTime === 0) {
        ctx.fillStyle = 'salmon';
        ctx.beginPath();
        ctx.arc(this.lasers[i].x, this.lasers[i].y, SHIP_SIZE / 15, 0, Math.PI * 2, false);
        ctx.fill();
      } else {
        // draw the explosion
        ctx.fillStyle = 'orangered';
        ctx.beginPath();
        ctx.arc(this.lasers[i].x, this.lasers[i].y, this.r * 0.75, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = 'salmon';
        ctx.beginPath();
        ctx.arc(this.lasers[i].x, this.lasers[i].y, this.r * 0.5, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = 'pink';
        ctx.beginPath();
        ctx.arc(this.lasers[i].x, this.lasers[i].y, this.r * 0.25, 0, Math.PI * 2, false);
        ctx.fill();
      }
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

  draw(ctx) {
    let blinkOn = this.blinkNum % 2 === 0;
    let exploding = this.explodeTime > 0;
    if (!exploding && blinkOn) {
      this.drawShip(ctx);
      if (this.thrusting && !this.dead) {
        this.drawThrust(ctx);
      }
    } else if (exploding) {
      this.drawExlosion(ctx);
    }
    this.drawLaser(ctx);
  }

  move(canvas) {
    this.moveShip(canvas);
    this.moveLaser(canvas);
  }

  moveShip(canvas) {
    let exploding = this.explodeTime > 0;
  
    if (!exploding) {
  
      if (this.blinkNum > 0) {
        this.blinkTime--;
  
        if (this.blinkTime === 0) {
          this.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
          this.blinkNum--;
        }
      }
  
      this.a += this.rot;
      this.x += this.thrust.x;
      this.y += this.thrust.y;
      
      dealWithBorder(this, canvas.width, canvas.height);
      
    } else {
      
      this.explodeTime--;
    }
  
    if (this.thrusting && !this.dead) {
      this.thrust.x += SHIP_THRUST * Math.cos(this.a) / FPS;
      this.thrust.y -= SHIP_THRUST * Math.sin(this.a) / FPS;
    
    } else {
      this.thrust.x -= FRICTION * this.thrust.x / FPS;
      this.thrust.y -= FRICTION * this.thrust.y / FPS;
    }
  }

  shootLaser(soundOn) {
    if (this.canShoot && this.lasers.length < LASER_MAX) {
      this.lasers.push({ // from the nose of the ship
        x: this.x + 4 / 3 * this.r * Math.cos(this.a),
        y: this.y - 4 / 3 * this.r * Math.sin(this.a),
        xv: LASER_SPD * Math.cos(this.a) / FPS,
        yv: -LASER_SPD * Math.sin(this.a) / FPS,
        dist: 0,
        explodeTime: 0
      });
      if (soundOn) {
        soundCalls.PlayShootLaser();
      }
    }
    // prevent further shooting
    this.canShoot = false;
  }

  moveLaser (canvas) {
    for (let i = this.lasers.length - 1; i >= 0 ; i--) {
      // check distance travelled
      if (this.lasers[i].dist > LASER_DIST * canvas.width) {
        this.lasers.splice(i, 1);
        continue;
      }
  
      // handle the explosion
      if (this.lasers[i].explodeTime > 0) {
        this.lasers[i].explodeTime--;
  
        // destroy the laser after the duration is up
        if (this.lasers[i].explodeTime === 0) {
          this.lasers.splice(i, 1);
          continue;
        }
      } else {
      // move the laser
        this.lasers[i].x += this.lasers[i].xv;
        this.lasers[i].y += this.lasers[i].yv;
  
        // calculate the distance travelled
        this.lasers[i].dist += Math.sqrt(Math.pow(this.lasers[i].xv, 2) + Math.pow(this.lasers[i].yv, 2));
      }
  
      // handle the edge of screen
      if (this.lasers[i].x < 0 || this.lasers[i].x > canvas.width || this.lasers[i].y < 0 || this.lasers[i].y > canvas.height) {
        this.lasers.splice(i, 1);
      }
    }
  }

  explodeShip(soundOn) {
    this.explodeTime = Math.ceil(SHIP_EXPLODE_DUR * FPS);
    this.health -= HIT_DAMAGE;
    if (soundOn) {
      soundCalls.PlayShipWasHit();
    }
  }

  setXPos(x) {
    this.x = x;
  }

  setNoseDirection(angle) {
    this.a = angle;
  }
}