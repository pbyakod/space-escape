import React from "react";
import { FaCaretLeft, FaCaretRight, FaCaretUp, FaSpaceShuttle } from 'react-icons/fa';

export default function AsteroidsRules({ setGameProcess }) {

  function renderPrepare() {
    setGameProcess({
      renderHome: false,
      renderRules: false,
      renderPrepare: true,
      renderCanvas: false,
      renderResult: false,
      displayCharacter: false
    })
  }
  return (
    <div className="asteroids-container d-block">
      <h1 className="mt-5 text-center"> How to Play </h1>
      <div className="container">

        <div className="w-50 mx-auto mt-5"><FaCaretUp />: accelarate</div>
        <div className="w-50 mx-auto"><FaCaretLeft />: Rotate the ship counter clockwise</div>
        <div className="w-50 mx-auto"><FaCaretRight />: Rotate the ship clockwise</div>
        <div className="w-50 mx-auto">Space Bar: Shoot laser</div>
        
        <div className="mt-5 mb-3 w-50 mx-auto">
          Asteroids move in random direction and velocity
        </div>

        <div className="mt-3 w-50 mx-auto">
          Earn scores by hiting asteroids:
          <div>20 pts for a large asteroids</div>
          <div>50 pts for a medium asteroid</div>
          <div>100 pts for a small asteroid</div>
        </div>
        <div className="mt-3 w-50 mx-auto">
          A large asteroid breaks into two medium asteroids when hit
        </div>
        <div className="w-50 mx-auto">
          A medium asteroid breaks into two small asteroids when hit
        </div>
        
        <div className="my-3 w-50 mx-auto">
          <FaSpaceShuttle />  Ship health decrease by 10 when hit by an asteroid
        </div>
        <div className="my-3 w-50 mx-auto">
          Game ends when ship health hit 0 or all asteroids are cleared.
        </div>
        <div className="mt-5 d-flex justify-content-around ">
          <button className="btn btn-info w-25" onClick={ renderPrepare }>Continue</button>
        </div>
      </div>
    </div>
  );
}