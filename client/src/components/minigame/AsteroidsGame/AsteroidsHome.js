import React, { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function AsteroidsHome({ setGameProcess }) {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: '.stock',
    translateX: function() {
      return anime.random(-1500, 1500);
    },
    translateY: function() {
      return anime.random(-1500, 1500);
    },
    scale: function() {
      return anime.random(1, 2);
    },

    easing: 'linear',
    duration: 2000,
    delay: anime.stagger(10),
    complete: asteroidsPrepare,
  })
  }, []);
  const stockArry = [];
  for (let i = 0; i < 100; i++) {
    stockArry.push(i);
  }

  function asteroidsPrepare() {
    setGameProcess({
      renderHome: false,
      renderRules: true,
      renderPrepare: false,
      renderCanvas: false,
    })
  }
  return (
    <div>
      <div className="asteroids-container">
        <h2 className="asteroids-home"><span>Shatter</span><br/>Asteroids</h2>
        {stockArry.map(el => <div className="asteroids stock"></div>)}
      </div>
    </div>
  );
}
    