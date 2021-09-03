import React from 'react'
import { useGameContext } from '../../../../../utils/Game/GlobalState'
import { 
  RENDER_MINIGAME, 
  RENDER_RESULTS, 
  UPDATE_LOCATION,
  UPDATE_CHARACTER_STATS,
  SET_OUTCOME
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
import parseOption from '../../../../../utils/helpers'

import NavBar from '../../../../navBar/NavBar';

export default function Prompt() {
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

  const optionOne = state.encounter.option1;
  const optionTwo = state.encounter.option2

  function handleClick(e) {
    const outcome = parseOption(e.target.name);
    dispatch({type: SET_OUTCOME, outcome: outcome});

    switch(outcome.next) {
      case "minigame":
        dispatch({type: RENDER_MINIGAME});
        break;
      case "results":
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
      <button className="title caution-btn" name={optionOne} onClick={handleClick}>{optionOne}</button>
      <button className="title caution-btn" name={optionTwo} onClick={handleClick}>{optionTwo}</button>
      </div>
    </div>
    </div>
  )
}
