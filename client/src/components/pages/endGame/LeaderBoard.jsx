import { Link } from "react-router-dom"
import apiCalls from "../../../utils/api";
import { INITIALIZE_GLOBAL_STATE } from "../../../utils/Game/actions";
import { useGameContext } from "../../../utils/Game/GlobalState"
import { useEffect, useState } from "react";

export default function LeaderBoard() {
  const [state, dispatch] = useGameContext();
  const [games, setGames] = useState([]);

  useEffect(() => {
    apiCalls
      .getAllGames()
      .then(data => {
        console.log(data)
        setGames(data)
      })
  }, [])

  function handleClick() {
    dispatch({
      type: INITIALIZE_GLOBAL_STATE
    })
  }
  return (
    <div className="main-container">
      <h3 className="main-title">Leader Board</h3>
      <ul>
        {games.sort((a,b) => b.score-a.score).map((game, i) => {
          if (i <= 10){
          return (
            !game.inProgress 
              ? <li>
                  <p>Username: {game.user.username} Score: {game.score}</p>
                </li>
              : false
          )} else {
            return false;
          }
        })}
      </ul>
      <Link to="">
        <button onClick={handleClick}>Play Again</button>
      </Link>
    </div>
  )
}
