import NavBar from "../navBar/NavBar"
import { Link } from "react-router-dom"
import { useGameContext } from "../../utils/Game/GlobalState"
import { SET_MINIGAME, SET_RESULTS } from "../../utils/Game/actions";

export default function Encounter({optionOne, optionTwo}) {
  const [state, dispatch] = useGameContext();

  function parseOption(option) {
    const [optionText, outcome] = option.split('|');
    console.log(outcome)
    return JSON.parse(outcome);
  }
  function handleClick(e) {
    const outcome = parseOption(e.target.name);
    
    switch(outcome.next) {
      case "minigame":
        dispatch({type: SET_MINIGAME});
        break;
      case "results":
        dispatch({type: SET_RESULTS});
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

      
      {/* <Link to="/minigame"> */}
      {/* </Link> */}
      {/* <Link to="/results"> */}
      {/* </Link> */}

    </div>
  )
}
