import "./dashboard.scss";
import api from "../../../utils/api.js";
import Game from "./game/Game";
import { useEffect, useState } from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom"

export default function Dashboard() {
  const [gameList, setGameList] = useState([]);

  const username  = () => {
    return JSON.parse(localStorage.getItem('user')).username
  }

  const userId = () => {
   return JSON.parse(localStorage.getItem('user')).id
  }

  async function getGameList() {
    
    setGameList(await api.getUserGames(userId()));
  }

  useEffect(() => {
    getGameList();
  }, []);

  // console.log("gameList = ", gameList)
  return (
    <div className="main-container">
      <h1 className="title"> {username()}'s Dashboard </h1>
      <ul>
        {gameList.map((game, i) => {
          console.log("entered")
          console.log("db l_id = ", game.location_id)

          return <Game game={game} key={i}/>;
         })}
      </ul>
      <Link to="/">
      <button className="caution-btn">back</button>
      </Link>
    </div>
  );
}
