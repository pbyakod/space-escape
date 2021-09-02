
import NavBar from "../navBar/NavBar"
import { Link } from "react-router-dom"
import { useGameContext } from "../../utils/Game/GlobalState"

export default function Result() {
  const [state, dispatch] = useGameContext();

  function handleClick() {
    // if (state.encounter_index !== state.encounters.length - 1) {
    //   //increment encounter index
    //   //set new encounter
    // } else {

    // }
  }
  return (
    <div>
      <NavBar/>
      <h1>Result Page</h1>
      <button onClick={handleClick}>continue</button>
      {/* <Link to="story"> */}
      {/* </Link> */}
    </div>
  )
}
