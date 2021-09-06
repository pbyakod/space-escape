import React, { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function PeltersPrepare({ setGameProcess }) {
  const animationRef = useRef(null);
  let animations = {
    opacityIn: [0, 1],
    scaleIn: [0.2, 1],
    scaleOut: 3,
    durationIn: 1000,
    durationOut: 600,
    delay: 500,
    easing: 'easeInExpo'
  };
  
  useEffect(() => {
    animationRef.current = anime.timeline({loop: false})
    .add({
      targets: '.prepare .one',
      opacity: animations.opacityIn,
      scale: animations.scaleIn,
      duration: animations.durationIn
    })
    .add({
      targets: '.prepare .one',
      opacity: 0,
      scale: animations.scaleOut,
      duration: animations.durationOut,
      easing: animations.easing,
      delay: animations.delay
    })
    .add({
      targets: '.prepare .two',
      opacity: animations.opacityIn,
      scale: animations.scaleIn,
      duration: animations.durationIn
    })
    .add({
      targets: '.prepare .two',
      opacity: 0,
      scale: animations.scaleOut,
      duration: animations.durationOut,
      easing: animations.easing,
      delay: animations.delay
    })
    .add({
      targets: '.prepare',
      opacity: 0,
      duration: animations.durationOut,
      delay: animations.delay,
      complete: renderCanvas,
    })
  }, []);

  function renderCanvas() {
    setGameProcess({
      renderHome: false,
      renderRules: false,
      renderPrepare: false,
      renderCanvas: true,
      renderResult: false,
      displayCharacter: false
    })
  }
  return (
    <div className="pelters-container">
      <div className="pelters prepare">
        <span className="one">Ready?</span>
        <span className="two">Go!</span>
      </div>
    </div>
    
  );
}
    

