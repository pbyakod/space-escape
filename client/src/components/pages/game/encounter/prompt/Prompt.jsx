import React from 'react'
import { useGameContext } from '../../../../../utils/Game/GlobalState'
import { 
  RENDER_MINIGAME, 
  RENDER_RESULTS, 
  SET_OUTCOME
} from "../../../../../utils/Game/actions"
import asteroids from "./img/asteroidbelt.png"
import alien from "./img/alien.jpeg"
import desert from "./img/spaceshipdesert.jpg"
import denzal from "./img/denzalmerchant.gif"
import solarwind from "./img/solarwind.jpeg"
import good from "./img/good.gif"
import bad from "./img/bad.gif"
import spaceshipwires from "./img/spaceshipwires.jpg"
import prastinrepair from "./img/prastinrepair.jpeg"
import serpent from "./img/serpenttamer.gif"
import sih from "./img/sih.jpg"//sir isaac henry
import troll from "./img/troll.gif"
import trolltrivia from "./img/trolltrivia.jpeg"//trivia
import spacedanger from "./img/spacedanger.jpeg"//dangerous territory
import pirate from "./img/pirate.gif"
import qrepair from "./img/qrepair.jpg"
import guide from "./img/guide.gif"
//pirate 2
import pranav from "./img/pranavmerchant.gif"
import cluster from "./img/cluster.jpeg"

import parseOption from '../../../../../utils/helpers'
import NavBar from '../../../../navBar/NavBar';
import "../../../../../App.scss";
import "./prompt.scss"

export default function Prompt({setMinigameName}) {
  const src = [
    asteroids,
    alien,
    desert,
    denzal,
    solarwind,
    good,
    bad,
    spaceshipwires,
    prastinrepair,//trade at prastin
    serpent,
    sih,//sir isaac henry
    troll,
    trolltrivia,//trivia
    spacedanger,//dangerous territory
	  pirate,
    qrepair,//repair at q
    guide,
    pirate,//pirates 2
    pranav,
    cluster
  ]


  const [state, dispatch] = useGameContext();

  const optionOne = state.encounter.option1;
  const optionTwo = state.encounter.option2

  function handleClick(e) {
    const outcome = parseOption(e.target.name);
    dispatch({type: SET_OUTCOME, outcome: outcome});

    switch(outcome.next.split('/')[0]) {
      case "minigame":
        setMinigameName(outcome.next.split('/')[1]);
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
      <p className="">{state.encounter.message}</p>
      <img className="pimg gap" src={src[state.encounter.location_id-1]} alt="" />
      <button className="caution-btn gap" name={optionOne} onClick={handleClick}>{optionOne}</button>
      <button className="caution-btn gap" name={optionTwo} onClick={handleClick}>{optionTwo}</button>
    </div>
    </div>
  )
}
