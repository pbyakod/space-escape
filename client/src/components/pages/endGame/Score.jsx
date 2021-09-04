import { Link } from "react-router-dom";
import { INITIALIZE_GLOBAL_STATE, RENDER_LEADERBOARD } from "../../../utils/Game/actions";
import { useGameContext } from "../../../utils/Game/GlobalState"

export default function Score() {
  const [state, dispatch] = useGameContext();

  function directToLeaderboard() {
    dispatch({
      type: RENDER_LEADERBOARD
    })
  }

  function startNewGame() {
    dispatch({
      type: INITIALIZE_GLOBAL_STATE
    })
    document.location.href('/createCharacter');
  }
  return (
    <div>
      <h1>Score Page</h1>
      <button onClick={directToLeaderboard}>Leaderboard</button>
    </div>
  )
}
