import React from "react";
import { FaCaretLeft, FaCaretRight, FaCaretUp, FaCaretDown, FaCoins } from 'react-icons/fa';
export default function CollectGoldRules({ setGameProcess }) {

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
    <div className="collect-gold-container d-block">
      <h1 className="mt-5 text-center pt-5"> How to Play </h1>
      <div className="container">

        <div className="w-50 mx-auto mt-5"><FaCaretUp />: move up</div>
        <div className="w-50 mx-auto"><FaCaretLeft />: move left</div>
        <div className="w-50 mx-auto"><FaCaretRight />: move right</div>
        <div className="w-50 mx-auto"><FaCaretDown />: move down</div>
        
        <div className="mt-5 mb-3 w-50 mx-auto">
          You have 30 sec to collect golds. Gold appear in random position, the total number keeps 10
        </div>

        <div className="mt-3 w-50 mx-auto">
          Earn scores by collecting golds: 20/50/100 pts at random
        </div>
        <div className="mt-3 w-50 mx-auto">
          A pile of gold appears when any other pile was collected
        </div>
        
        <div className="my-3 w-50 mx-auto">
          <FaCoins /> Gold increases by total points/10
        </div>
        <div className="my-3 w-50 mx-auto">
          Game ends when time is up.
        </div>
        <div className="mt-5 d-flex justify-content-around ">
          <button className="btn btn-info w-25" onClick={ renderPrepare }>Continue</button>
        </div>
      </div>
    </div>
  );
}