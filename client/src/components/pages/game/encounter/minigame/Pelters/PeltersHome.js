import React, { useEffect, useRef } from "react";
import { randomInt } from "../CollectGold/helper";
import anime from 'animejs/lib/anime.es.js';

export default function PeltersHome({ setGameProcess }) {
  const randomNum = (num) => {
    let positive = Math.floor(Math.random() + 0.5);
    return positive ? randomInt(num) : randomInt * (-1);
  }
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: '.pelter',
    translateX: function() {
      return anime.random(-5000, -2000);
    },
    scale: function() {
      return anime.random(1, 2);
    },

    easing: 'linear',
    duration: 3000,
    delay: anime.stagger(10),
    complete: renderRules,
  })
  }, []);
  const pelterArray = [];
  
  for (let i = 0; i < 50; i++) {
    pelterArray.push({
      right: "-2000px",
      top: randomInt(100) + "%"
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
      <div className="pelters-container">
        <h2 className="pelters-home"><span>Avoid</span><br/>Pelters</h2>
        {pelterArray.map((el, i) => <div key={i} className="pelters pelter" style={el}></div>)}
      </div>
    </div>
  );
}
    