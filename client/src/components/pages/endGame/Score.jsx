import { Link } from "react-router-dom";
import apiCalls from "../../../utils/api";
import { INITIALIZE_GLOBAL_STATE, RENDER_LEADERBOARD } from "../../../utils/Game/actions";
import { useGameContext } from "../../../utils/Game/GlobalState"
import "../../../app.scss"
export default function Score() {
  const [state, dispatch] = useGameContext();

  const score = 10*state.gold + 5*(state.health + state.ship);

  function directToLeaderboard() {
    dispatch({
      type: RENDER_LEADERBOARD
    });

    apiCalls
      .updateUserGame(
        state.game_id, 
        {score, inProgress: false, user_id: state.user_id}
      )
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  return (
    <div className="main-container">
      <h1>Score: {score} </h1>
      <p className="gap title">Player Health: {state.health}</p>
      <p className="gap title">Ship Health: {state.ship}</p>
      <p className="gap title">Gold: {state.gold}</p>
      <button onClick={directToLeaderboard}>Leaderboard</button>
    </div>
  )
}
