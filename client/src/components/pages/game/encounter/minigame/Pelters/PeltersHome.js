import React, { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function PeltersHome({ setGameProcess }) {
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
    complete: renderRules,
  })
  }, []);
  const stockArry = [];
  for (let i = 0; i < 100; i++) {
    stockArry.push(i);
  }

  function renderRules() {
    setGameProcess({
      renderHome: false,
      renderRules: true,
      renderPrepare: false,
      renderCanvas: false,
      renderResult: false,
      displayCharacter: false
    })
  }
  return (
    <div>
      <div className="pelters-container">
        <h2 className="pelters-home"><span>Avoid</span><br/>Pelters</h2>
        {stockArry.map(el => <div className="pelters stock"></div>)}
      </div>
    </div>
  );
}
    