import { ROIDS_NUM, ROIDS_SIZE, ROIDS_PTS_LG, ROIDS_PTS_MD, ROIDS_PTS_SM, ROIDS_JAG, ROIDS_VERT, ROIDS_SPD, FPS, SHIP_SIZE } from "./constVaraibles";
import { distBetweenPoints, dealWithBorder } from "./helper";
import soundCalls from "../../../utils/sound";

export function createAsteroids(level, shipObj, canvas, roids) {
  roids.current = [];
  let x, y;
  for (let i = 0; i < ROIDS_NUM + level * 2; i++) {
    do {
      x = Math.floor(Math.random() * (canvas.width - ROIDS_SIZE));
      y = Math.floor(Math.random() * (canvas.height - ROIDS_SIZE));
    } while (distBetweenPoints(shipObj.x, shipObj.y, x, y) < ROIDS_SIZE * 2 + shipObj.r)
    roids.current.push(new Asteroid(x, y, Math.ceil(ROIDS_SIZE / 2), level));
  }
}

export function drawAsteroids(ctx, roids) {
  for (let i = 0; i < roids.current.length; i++) {
    roids.current[i].drawAsteroid(ctx);
  }
}

export function moveAsteroids(ctx, roids) {
  for (let i = 0; i < roids.length; i++) {
    roids[i].x += roids[i].xv;
    roids[i].y += roids[i].yv;
    dealWithBorder(roids[i], ctx.canvas.width, ctx.canvas.height);
  }
}

export function destroyAsteroid(index, roids, player, soundOn, level) {
  let { x, y, r } = roids.current[index];
  let score = 0;

  // split the asteroid in two if necessary
  if (r === ROIDS_SIZE / 2 || r === ROIDS_SIZE / 4) {
    roids.current.push(new Asteroid(x, y, Math.ceil(r / 2), level));
    roids.current.push(new Asteroid(x, y, Math.ceil(r / 2), level));
    score += r === ROIDS_SIZE / 2 ? ROIDS_PTS_LG : ROIDS_PTS_MD;
  } else {
    score += ROIDS_PTS_SM;
  }

  roids.current.splice(index, 1);
  if (soundOn) {
    soundCalls.PlayLaserHitAsteroid();
  }

  return score;
}

class Asteroid {
  constructor(x, y, r, level) {
    let lvlMult = 1 + .1 * level;
    this.x = x;
    this.y = y;
    this.r = r;
    this.xv = Math.random() * ROIDS_SPD * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1);
    this.yv = Math.random() * ROIDS_SPD * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1);
    this.a = Math.random() * Math.PI * 2;
    this.explodeTime = 0;
    this.vert = Math.floor(Math.random() * (ROIDS_VERT + 1) + ROIDS_VERT / 2);
    this.offset = [];
    for (let i = 0; i < this.vert; i++) {
      this.offset.push(Math.random() * ROIDS_JAG * 2 + 1 - ROIDS_JAG);
    }
  }

  drawAsteroid(ctx) {
    ctx.strokeStyle = 'rgba(206, 104, 104)';
    ctx.shadowColor = 'rgba(206, 104, 104)';
    ctx.shadowBlur = 15;
    ctx.fillStyle = 'rgba(206, 104, 104)';
    ctx.lineWidth = SHIP_SIZE / 20;
    // draw a path
    ctx.beginPath();
    ctx.moveTo(
      this.x + this.r * this.offset[0] * Math.cos(this.a),
      this.y + this.r * this.offset[0] *  Math.sin(this.a)
    );

    // draw the polygen
    for (let j = 1; j < this.vert; j++) {
      ctx.lineTo(
        this.x + this.r * this.offset[j] * Math.cos(this.a + j * Math.PI * 2 / this.vert),
        this.y + this.r * this.offset[j] * Math.sin(this.a + j * Math.PI * 2 / this.vert),
      )
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}