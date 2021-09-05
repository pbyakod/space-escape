export class Player {
  constructor(ctx) {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.width = 32;
    this.height = 48;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 9;
    this.frame = 0;
    this.moving = false;
  }

  draw(ctx, playerSprite) {
    const sx = this.width * this.frameX;
    const sy = this.height * this.frameY;
    const sw = this.width;
    const sh = this.height;
    const dx = this.x - this.width;
    const dy = this.y - this.height;
    const dw = this.width * 2;
    const dh = this.height * 2;
    ctx.drawImage(playerSprite, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  move(canvas, direction) {
    const { left, right, up, down } = direction;
    if (up) {
      this.y = this.y > this.speed ? this.y - this.speed : 0;
      this.frameY = 3;
    }
    if (down) {
      this.y = this.y < canvas.height - this.speed ? this.y + this.speed : canvas.height;
      this.frameY = 0;
    }
    if (left) {
      this.x = this.x > this.speed ? this.x - this.speed : 0;
      this.frameY = 1;
    }
    if (right) {
      this.x = this.x < canvas.width - this.speed ? this.x + this.speed : canvas.width;
      this.frameY = 2;
    }
    this.handlePlayerFrame();
  }

  handlePlayerFrame() {
    if (this.frame < 19) {
      this.frame += 1;
    } else {
      this.frame = 0;
    }
    this.frameX = Math.floor(this.frame / 5);
  }
}