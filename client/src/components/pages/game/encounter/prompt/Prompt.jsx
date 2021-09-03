import React from 'react'
import { useGameContext } from '../../../../../utils/Game/GlobalState'
import { 
  RENDER_MINIGAME, 
  RENDER_RESULTS, 
  UPDATE_LOCATION,
  UPDATE_CHARACTER_STATS
} from "../../../../../utils/Game/actions"
import asteroids from "./img/asteroids.jpeg"
import denzal from "./img/denzalmerchant.gif"
import bad from "./img/bad.gif"
import good from "./img/good.gif"
import pirate from "./img/pirate.gif"
import troll from "./img/troll.gif"
import pranav from "./img/pranavmerchant.gif"
import serpent from "./img/serpenttamer.gif"
import "./prompt.scss"

import NavBar from '../../../../navBar/NavBar';

export default function Prompt({optionOne, optionTwo}) {
  const src = [
    asteroids,
    denzal,
    bad,
    good,
    pirate,
    troll,
    pranav,
    serpent
  ]
  const [state, dispatch] = useGameContext();
 
  function parseOption(option) {
    const [optionText, outcome] = option.split('|');
    console.log(outcome)
    return JSON.parse(outcome);
  }

  function handleClick(e) {
    console.log(e.target)
    const outcome = parseOption(e.target.name);
    
    switch(outcome.next) {
      case "minigame":
        dispatch({type: RENDER_MINIGAME});
        if (outcome.location_id) {
          dispatch({type: UPDATE_LOCATION, location_id: outcome.location_id})
        }
        break;
      case "results":
        dispatch({type: UPDATE_CHARACTER_STATS})
        dispatch({type: RENDER_RESULTS});
        break;
      default:
        break;

    }
  }

  return (
    <div>
      <NavBar/>
      <div className="main-container main-container_story">
      <h3 className="title">{state.encounter.message}</h3>
      <img className="title" src={src[state.location_id-1]} alt="" />
      <div className="row">
      <button className="title caution-btn" name={optionOne} onClick={handleClick}>{state.encounter.option1}</button>
      <button className="title caution-btn" name={optionTwo} onClick={handleClick}>{state.encounter.option2}</button>
      </div>
    </div>
    </div>
  )
}
