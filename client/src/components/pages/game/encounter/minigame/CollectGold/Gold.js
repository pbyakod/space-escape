import { GOLDS_NUM, GOLD_PTS, GOLD_SIZE, PLAYER_SIZE } from "./constVaraibles";
import { distBetweenPoints, randomInt } from "./helper";
import soundCalls from "../../../../../../utils/sound";

export function createGolds(playerX, playerY) {
  const golds = [];
  for (let i = 0; i < GOLDS_NUM; i++) {
    golds.push(new Gold(playerX, playerY));
  }
  return golds;
}

export function drawGolds(ctx, golds) {
  golds.map(gold => gold.draw(ctx));
}

export function collectGold(index, golds, playerX, playerY, soundOn) {
  const score = golds[index].score;
  golds.splice(index, 1);
  golds.push(new Gold(playerX, playerY));
  if (soundOn) {
    soundCalls.PlayLaserHitAsteroid();
  }
  return score;
}

class Gold {
  constructor(playerX, playerY, score = GOLD_PTS[randomInt(3)]) {
    let x, y;
    do {
      x = randomInt(window.innerWidth / GOLD_SIZE) * GOLD_SIZE + Math.floor(GOLD_SIZE / 2);
      y = randomInt(window.innerHeight / GOLD_SIZE) * GOLD_SIZE + Math.floor(GOLD_SIZE / 2);
    } while (distBetweenPoints(playerX, playerY, x, y) < GOLD_SIZE * 2 + PLAYER_SIZE)
    this.x = x;
    this.y = y;
    this.score = score;
  }

  draw(ctx) {
    ctx.strokeStyle = 'rgba(206, 104, 104)';
    ctx.shadowColor = 'rgba(206, 104, 104)';
    ctx.shadowBlur = 15;
    ctx.fillStyle = 'rgba(206, 104, 104)';
    ctx.lineWidth = GOLD_SIZE / 20;

    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}