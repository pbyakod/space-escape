import { LASER_SPD, FPS, LASER_MAX } from "./constVaraibles";

export function dealWithBorder (obj, width, height) {
  if (obj.x < 0 - obj.r) {
    obj.x = width + obj.r;
  } else if (obj.x > width + obj.r) {
    obj.x = 0 - obj.r;
  }

  if (obj.y < 0 - obj.r) {
    obj.y = height + obj.r;
  } else if (obj.y > height + obj.r) {
    obj.y = 0 - obj.r;
  }
}

export function distBetweenPoints (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function shootLaser(ship) {
  console.log(ship);
  // create the laser object
  if (ship.canShoot && ship.lasers.length < LASER_MAX) {
    ship.lasers.push({ // from the nose of the ship
      x: ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
      y: ship.y - 4 / 3 * ship.r * Math.sin(ship.a),
      xv: LASER_SPD * Math.cos(ship.a) / FPS,
      yv: -LASER_SPD * Math.sin(ship.a) / FPS,
      dist: 0,
      explodeTime: 0
    });
    // if (soundOn) {
    //   fxLaser.play();
    // }
  }
  // prevent further shooting
  ship.canShoot = false;
}
