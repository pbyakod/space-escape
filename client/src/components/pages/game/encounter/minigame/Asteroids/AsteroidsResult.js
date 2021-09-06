import React from "react";
import { useGameContext } from '../../../../../../utils/Game/GlobalState';
import { UPDATE_OUTCOME } from '../../../../../../utils/Game/actions';
import {useEffect} from 'react';

export default function AsteroidsResult({ gameResult, setGameProcess }) {
  let heading = "";
  let p1 = "";
  let p2 = "";
  let p3 = "";
  let p4 = "";
  if (gameResult.shipHealth === 0) {
    heading = "Thank you very much!"
    p1 = "Good job! You stood out to protect people on the planet!";
    p2 = `You earned ${gameResult.score/10} gold during the fight! It is enough to repair your spaceship.`;
    p3 = "The ship is damaged badly. It will take 15 days to be fully repaired.";
    p4 = "Enjoy your tour and good luck!";
  } else {
    heading = "Congratulations!";
    p1 = "Good job! You stood out to protect people on the planet!";
    p2 = `You earned ${gameResult.score/10} gold during the fight!`;
    p3 = "Enjoy your tour and good luck!";
  }
  
  function displayCharacter() {
    setGameProcess({
      renderHome: false,
      renderRules: false,
      renderPrepare: false,
      renderCanvas: false,
      renderResult: false,
      displayCharacter: true
    })
  }

  const [globalState, dispatch] = useGameContext();

  useEffect(() => {
    dispatch({
      type: UPDATE_OUTCOME,
      outcome: {health: -5, ship: gameResult.shipHealth - 100, gold: gameResult.score/10 }
    })
  },[])

  return (
    <div className="asteroids-container d-block pt-5">
      <h1 id="title" className="my-5 text-center">{ heading }</h1>
      <div className="container w-50">
        <div className="my-3">{p1}</div>
        <div className="my-3">{p2}</div>
        <div className="my-3">{p3}</div>
        <div className="my-3">{p4}</div>
        <div className="my-5 d-flex justify-content-around ">
          <button className="btn btn-danger w-25" onClick={ displayCharacter }>Continue</button>
        </div>
      </div>
    </div>
  );
}


