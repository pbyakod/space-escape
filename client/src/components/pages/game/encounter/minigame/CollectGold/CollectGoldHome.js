import React, { useEffect, useRef } from "react";
import { randomInt } from "./helper";
import anime from 'animejs/lib/anime.es.js';

export default function CollectGoldHome({ setGameProcess }) {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: '.gold',
    translateY: function() {
      return anime.random(0, 1500);
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
  const goldArray = [];
  
  for (let i = 0; i < 50; i++) {
    goldArray.push({
      top: "0",
      left: randomInt(100) + "%"
    });
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
      <div className="collect-gold-container">
        <h2 className="collect-gold-home">Collect Gold</h2>
        {goldArray.map((el, i) => <div key={i} className="collect-gold gold" style={el}></div>)}
      </div>
    </div>
  );
}
    