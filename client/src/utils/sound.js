import { Howl } from 'howler';
import BackgroundSound from '../sounds/background.mp3';
import HoverSound from '../sounds/hover.mp3';

const soundFX = {
    background: new Howl({
        src: BackgroundSound
    }),
    hover: new Howl({
        src: HoverSound
    })
}

function PlayBackground() {
    if(!soundFX.background.playing()) {
      soundFX.background.play();
    }
}

function PlayHover() {
    soundFX.hover.play();
  }

const soundCalls = {
    PlayBackground,
    PlayHover
}

export default soundCalls;