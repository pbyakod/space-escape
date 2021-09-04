
import { Link } from "react-router-dom"
import { INITIALIZE_GLOBAL_STATE } from "../../../utils/Game/actions";
import { useGameContext } from "../../../utils/Game/GlobalState"

export default function LeaderBoard() {
  const [state, dispatch] = useGameContext();
  function handleClick() {
    dispatch({
      type: INITIALIZE_GLOBAL_STATE
    })
  }
  return (
    <div>
      <h1>Leader Board Page</h1>
      <Link to="">
        <button onClick={handleClick}>Play Again</button>
      </Link>
    </div>
  )
}
