import { SHIP_SIZE, SHIP_BLINK_DUR, SHIP_INV_DUR, FPS } from './constVaraibles';

const objs = {
  shipObj: {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    r: SHIP_SIZE / 2,
    a: 90 / 180 * Math.PI,
    blinkTime: Math.ceil(SHIP_BLINK_DUR * FPS),
    blinkNum: Math.ceil(SHIP_INV_DUR / SHIP_BLINK_DUR),
    canShoot: true,
    dead: false,
    lasers: [],
    rot: 0,
    explodeTime : 0,
    thrusting: false,
    thrust: {
      x: 0,
      y: 0
    }
  },
  asteroidObj: {
    // x: 0.5,
    // y: 50,
    // width: 800 / 10 - 1,
    // height: 20,
    // density: 2,
    // colors: ["blue", "lightblue"]
  },
  player: {
    name: "Dhaval",
    lives: 5,
    score: 0,
    level: 1,
  },
}

export default objs;