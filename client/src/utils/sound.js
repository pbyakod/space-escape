import { Howl } from "howler";
import BackgroundSound from "../sounds/background.mp3";
import HoverSound from "../sounds/hover.mp3";
import AsteroidsHomepage from "../sounds/asteroidsHomepage.wav";
import AsteroidsVictory from "../sounds/asteroidsVictory.wav";
import LaserHitAsteroid from "../sounds/laserHitAsteroid.mp3";
import ShipDamaged from "../sounds/shipDamaged.wav";
import ShipWasHit from "../sounds/shipWasHit.ogg";
import ShootLaser from "../sounds/shootLaser.wav";

const soundFX = {
  background: new Howl({
    src: BackgroundSound,
    loop: true,
  }),
  hover: new Howl({
    src: HoverSound,
  }),
  asteroidsHomepage: new Howl({
    src: AsteroidsHomepage,
  }),
  asteroidsVictory: new Howl({
    src: AsteroidsVictory,
  }),
  laserHitAsteroid: new Howl({
    src: LaserHitAsteroid,
  }),
  shipDamaged: new Howl({
    src: ShipDamaged,
  }),
  shipWasHit: new Howl({
    src: ShipWasHit,
  }),
  shootLaser: new Howl({
    src: ShootLaser,
  }),
};

function PlayBackground() {
  if (!soundFX.background.playing()) {
    soundFX.background.play();
  }
}

function PlayHover() {
  soundFX.hover.play();
}

function PlayAsteroidsHomepage() {
  soundFX.asteroidsHomepage.play();
}

function PlayAsteroidsVictory() {
  if (!soundFX.asteroidsVictory.playing()) {
    soundFX.asteroidsVictory.play();
  }
}

function PlayLaserHitAsteroid() {
  if (soundFX.laserHitAsteroid.playing()) {
    soundFX.laserHitAsteroid.stop();
  }
  soundFX.laserHitAsteroid.play();
}

function PlayShipDamaged() {
  if (!soundFX.shipDamaged.playing()) {
    soundFX.shipDamaged.play();
  }
}

function PlayShipWasHit() {
  if (soundFX.shipWasHit.playing()) {
    soundFX.shipWasHit.stop();
  }
  soundFX.shipWasHit.play();
}

function PlayShootLaser() {
  if (soundFX.shootLaser.playing()) {
    soundFX.shootLaser.stop();
  }
  soundFX.shootLaser.play();
}

function MuteSound() {
  if (soundFX.background.playing()) {
    soundFX.background.stop();
  } else {
    soundFX.background.play();
  }
}

function SoundStatus() {
  if (soundFX.background.playing) 
  return true
  return false

}

const soundCalls = {
  PlayBackground,
  PlayHover,
  PlayAsteroidsHomepage,
  PlayAsteroidsVictory,
  PlayLaserHitAsteroid,
  PlayShipDamaged,
  PlayShipWasHit,
  PlayShootLaser,
  MuteSound,
  SoundStatus
};

export default soundCalls;
