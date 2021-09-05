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

export function drawGolds(ctx, golds, imgs) {
  //console.log(golds.length);
  //console.log(imgs.length);
  golds.map((gold, i) => gold.draw(ctx, imgs[i]));
}

export function collectGold(index, golds, playerX, playerY, soundOn) {
  const score = golds[index].score;
  golds.splice(index, 1);
  golds.push(new Gold(playerX, playerY));
  if (soundOn) {
    soundCalls.PlayCollectGold();
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
    this.width = 50;
    this.hight = 50;
    this.score = score;
  }

  draw(ctx, img) {
    ctx.drawImage(img, this.x, this.y, this.width, this.hight);
  }
}