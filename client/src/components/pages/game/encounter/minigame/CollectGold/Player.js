import { PLAYER_SIZE, PLAYER_BLINK_DUR, PLAYER_EXPLODE_DUR, FPS, PLAYER_THRUST, FRICTION, LASER_DIST, PLAYER_INV_DUR, LASER_SPD, LASER_MAX, HIT_DAMAGE } from './constVaraibles';
import { dealWithBorder } from "./helper";
import soundCalls from '../../../../../../utils/sound';

export class Player {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.width = 32;
    this.height = 48;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 9;
    this.moving = false;
  }

  draw(ctx) {
    const playerSprite = new Image();
    playerSprite.src = "./goldCollectionPlayer.png";
    ctx.drawImage()
  }


  
  move(canvas) {
    let exploding = this.explodeTime > 0;
  
    if (!exploding) {
  
      if (this.blinkNum > 0) {
        this.blinkTime--;
  
        if (this.blinkTime === 0) {
          this.blinkTime = Math.ceil(PLAYER_BLINK_DUR * FPS);
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
      this.thrust.x += PLAYER_THRUST * Math.cos(this.a) / FPS;
      this.thrust.y -= PLAYER_THRUST * Math.sin(this.a) / FPS;
    
    } else {
      this.thrust.x -= FRICTION * this.thrust.x / FPS;
      this.thrust.y -= FRICTION * this.thrust.y / FPS;
    }
  }
}