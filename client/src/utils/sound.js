import { Howl } from "howler";
import BackgroundSound from "../sounds/background.mp3";
import HoverSound from "../sounds/hover.mp3";
import AsteroidsHomepage from "../sounds/asteroidsHomepage.wav";
import AsteroidsVictory from "../sounds/asteroidsVictory.wav";
import LaserHitAsteroid from "../sounds/laserHitAsteroid.mp3";
import ShipDamaged from "../sounds/shipDamaged.wav";
import ShipWasHit from "../sounds/shipWasHit.ogg";
import ShootLaser from "../sounds/shootLaser.wav";
import CollectGold from "../sounds/collectGold.mp3";
import TimeUp from "../sounds/timeup.wav";

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
  collectGold: new Howl({
    src: CollectGold,
  }),
  timeUp: new Howl({
    src: TimeUp,
  })
};

function PlayBackground() {
  if (!soundFX.background.playing() && SoundStatus()) {
    soundFX.background.play();
  }
}

function PlayHover() {
  if (SoundStatus()) {
    soundFX.hover.play();
  }
}

function PlayAsteroidsHomepage(soundOn) {
  if (soundOn) {
    soundFX.asteroidsHomepage.play();
  }
}

function PlayAsteroidsVictory(soundOn) {
  if (!soundFX.asteroidsVictory.playing() && soundOn) {
    soundFX.asteroidsVictory.play();
  }
}

function PlayLaserHitAsteroid(soundOn) {
  if (soundFX.laserHitAsteroid.playing()) {
    soundFX.laserHitAsteroid.stop();
  }
  if (soundOn) {
    soundFX.laserHitAsteroid.play();
  }
}

function PlayShipDamaged(soundOn) {
  if (!soundFX.shipDamaged.playing() && soundOn) {
    soundFX.shipDamaged.play();
  }
}

function PlayShipWasHit(soundOn) {
  if (soundFX.shipWasHit.playing()) {
    soundFX.shipWasHit.stop();
  }
  if (soundOn) {
    soundFX.shipWasHit.play();
  }
}

function PlayShootLaser(soundOn) {
  if (soundFX.shootLaser.playing()) {
    soundFX.shootLaser.stop();
  }
  if (soundOn) {
    soundFX.shootLaser.play();
  }
}

function PlayCollectGold() {
  if (soundFX.collectGold.playing()) {
    soundFX.collectGold.stop();
  }
  if (SoundStatus()) {
    soundFX.collectGold.play();
  }
}

function PlayTimeUp() {
  if (!soundFX.timeUp.playing() && SoundStatus()) {
    soundFX.timeUp.play();
  }
}

function SwitchSound() {
  if (soundFX.background.playing()) {
    soundFX.background.stop();
    return false;
  } else {
    soundFX.background.play();
    return true;
  }
}

function SoundStatus() {
  if (soundFX.background.playing()) {
    return true;
  }
  return false;
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
  PlayCollectGold,
  PlayTimeUp,
  SwitchSound,
  SoundStatus
};

export default soundCalls;
