import { ROIDS_NUM, ROIDS_SIZE, ROIDS_PTS_LG, ROIDS_PTS_MD, ROIDS_PTS_SM, ROIDS_JAG, ROIDS_VERT, ROIDS_SPD, FPS, SHIP_SIZE } from "./constVariables";
import { distBetweenPoints, dealWithBorder } from "./helper";
import soundCalls from "../../../../../../utils/sound";

export function createAsteroids(level, shipObj, canvas, roids) {
  roids.current = [];
  let x, y;
  for (let i = 0; i < ROIDS_NUM * 10; i++) {
    do {
      x = Math.floor(Math.random() * (canvas.width - ROIDS_SIZE));
      y = Math.floor(Math.random() * (canvas.height - ROIDS_SIZE));
    } while (distBetweenPoints(shipObj.x, shipObj.y, x, y) < ROIDS_SIZE * 2 + shipObj.r)
    roids.current.push(new Asteroid(x, y, Math.ceil(ROIDS_SIZE / 2), level));
  }
}

export function makeAsteroidsMoveLeft(roids) {
  for (let i = 0; i < roids.length; i++) {
    roids[i].setXV(-generateVelocity(3)*3)
    roids[i].setYV(0)
  }
}

export function drawAsteroids(ctx, roids) {
  for (let i = 0; i < roids.current.length; i++) {
    roids.current[i].drawAsteroid(ctx);
  }
}

export function moveAsteroids(ctx, roids, xvScale, yvScale) {
  for (let i = 0; i < roids.length; i++) {
    roids[i].x += roids[i].xv * xvScale;
    roids[i].y += roids[i].yv * yvScale;
    dealWithBorder(roids[i], ctx.canvas.width, ctx.canvas.height);
  }
}

export function destroyAsteroid(index, roids, player, soundOn, level) {
  let { x, y, r } = roids.current[index];
  let score = 0;

  // split the asteroid in two if necessary
  if (r === ROIDS_SIZE / 2 || r === ROIDS_SIZE / 4) {
    // roids.current.push(new Asteroid(x, y, Math.ceil(r / 2), level));
    // roids.current.push(new Asteroid(x, y, Math.ceil(r / 2), level));
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

function generateVelocity(lvlMult) {
  return ROIDS_SPD;
}

class Asteroid {
  constructor(x, y, r, level) {
    let lvlMult = 1 + .1 * level;
    this.x = x;
    this.y = y;
    this.r = r;
    this.xv = generateVelocity(lvlMult) * (Math.random() < 0.5 ? 1 : -1);
    this.yv = generateVelocity(lvlMult) * (Math.random() < 0.5 ? 1 : -1);
    this.a = Math.random() * Math.PI * 2;
    this.explodeTime = 0;
    this.vert = ROIDS_VERT;
    this.offset = [];
    for (let i = 0; i < this.vert; i++) {
      this.offset.push(Math.random() * ROIDS_JAG * 2 + 1 - ROIDS_JAG);
    }
  }

  drawAsteroid(ctx) {
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
  grd.addColorStop(0, "black");
  grd.addColorStop(0.5, "black");
  grd.addColorStop(1, "beige");
    ctx.strokeStyle = 'beige)';
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 15;
    ctx.fillStyle = grd;
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

  setXV(xv) {
    this.xv = xv;
  }

  setYV(yv) {
    this.yv = yv; 
  }
}