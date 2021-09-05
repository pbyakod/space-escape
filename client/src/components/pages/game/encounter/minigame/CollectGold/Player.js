export class Player {
  constructor(ctx) {
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
    ctx.strokeStyle = 'rgba(5, 5, 5)';
    ctx.shadowColor = 'rgba(5, 5, 5)';
    ctx.shadowBlur = 15;
    ctx.fillStyle = 'rgba(5, 5, 5)';
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  move(canvas, direction) {
    const { left, right, up, down } = direction;
    if (up) {
      this.y = this.y > this.speed ? this.y - this.speed : 0;
    }
    if (down) {
      this.y = this.y < canvas.height - this.speed ? this.y + this.speed : canvas.height;
    }
    if (left) {
      this.x = this.x > this.speed ? this.x - this.speed : 0;
    }
    if (right) {
      this.x = this.x < canvas.width - this.speed ? this.x + this.speed : canvas.width;
    }
  }
}