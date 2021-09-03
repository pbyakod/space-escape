import React from 'react'
import { useGameContext } from '../../../../../utils/Game/GlobalState'
import { 
  RENDER_MINIGAME, 
  RENDER_RESULTS, 
  UPDATE_LOCATION,
  UPDATE_CHARACTER_STATS
} from "../../../../../utils/Game/actions"

import NavBar from '../../../../navBar/NavBar';

export default function Prompt({optionOne, optionTwo}) {
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
      <h1>Encounter Page</h1>
      {state.encounter.message}
      <button name={optionOne} onClick={handleClick}>{state.encounter.option1}</button>
      <button name={optionTwo} onClick={handleClick}>{state.encounter.option2}</button>
    </div>
  )
}
