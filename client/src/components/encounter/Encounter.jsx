import NavBar from "../navBar/NavBar"
import { Link } from "react-router-dom"
<<<<<<< Updated upstream

export default function Encounter() {
=======
import { useGameContext } from "../../utils/Game/GlobalState"
import { SET_MINIGAME, SET_RESULTS } from "../../utils/Game/actions";
import a from "./img/asteroids.jpeg"
import b from "./img/alien.jpeg"
import c from "./img/r1merch.jpeg"
import d from "./img/solarwind.jpeg"
import e from "./img/snake.jpeg"
import f from "./img/blackhole.jpeg"
import g from "./img/help.jpeg"
import h from "./img/troll.jpeg"
import i from "./img/pirate.jpeg"

export default function Encounter({optionOne, optionTwo}) {
  const src=[a,b,c,d,e,f,g,h,i];
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
>>>>>>> Stashed changes
   
  return (
    <div>
      <NavBar/>
<<<<<<< Updated upstream
      <h1>Encounter Page</h1>
      <Link to="/minigame">
        <button>option 1</button>
      </Link>
      <Link to="/results">
        <button>option 2</button>
      </Link>
=======
      
      <h1 className="title">Encounter Page</h1>
      <div className="title">
      {state.encounter.message}
      <img src={src[state.encounter.id-1]} alt="" />
      <button name={optionOne} onClick={handleClick}>{state.encounter.option1}</button>
      <button name={optionTwo} onClick={handleClick}>{state.encounter.option2}</button>
</div>
      
      {/* <Link to="/minigame"> */}
      {/* </Link> */}
      {/* <Link to="/results"> */}
      {/* </Link> */}
>>>>>>> Stashed changes

    </div>
  )
}
