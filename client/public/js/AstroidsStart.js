let animations = {
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 3,
  durationIn: 1000,
  durationOut: 600,
  delay: 500,
  easing: 'easeInExpo'
};

anime.timeline({loop: false})
  .add({
    targets: '.pre-game .one',
    opacity: animations.opacityIn,
    scale: animations.scaleIn,
    duration: animations.durationIn
  })
  .add({
    targets: '.pre-game .one',
    opacity: 0,
    scale: animations.scaleOut,
    duration: animations.durationOut,
    easing: animations.easing,
    delay: animations.delay
  })
  .add({
    targets: '.pre-game .two',
    opacity: animations.opacityIn,
    scale: animations.scaleIn,
    duration: animations.durationIn
  })
  .add({
    targets: '.pre-game .two',
    opacity: 0,
    scale: animations.scaleOut,
    duration: animations.durationOut,
    easing: animations.easing,
    delay: animations.delay
  })
  .add({
    targets: '.pre-game',
    opacity: 0,
    duration: animations.durationOut,
    delay: animations.delay,
    complete: astroidsTitle,
  })


function astroidsTitle() {
  document.location.replace('./AstroidsTitle.html');
}