import { Link } from "react-router-dom";
import apiCalls from "../../../utils/api";
import "../home/home.scss";

export default function home() {
  function handleNewGame() {
    const user= JSON.parse(localStorage.getItem('user'));
    const gameState = {
      location_id: 1,
      inProgress: true,
      user_id: user.id
    }
    localStorage.setItem('game_state', JSON.stringify(gameState));
  }
  return (
    <div className="homepage">
      {/* main container from App.scss */}
      <section className="main-container">
        <h1 className="main-title">Space Escape</h1>
        {/* the content that displays in the main container when site is loaded */}
        <section className={!apiCalls.loggedIn() ? "initial-content" : "loggedin-content"}>
          <div className="game-links">
            <Link to="auth">Sign in / Sign up</Link>
            </div>
          <div className="game-links">
            <Link to="rules">How to Play</Link>
            </div>
          <div className="game-links">
            <Link to="about">About the Authors</Link>
          </div>
        </section>
        {/* content that displays on home page if user is already logged in */}
        <section className={apiCalls.loggedIn() ? "initial-content" : "loggedin-content"}>
          <div className="game-links">
            <Link to="story">Continue Game</Link>
          </div>
          <div className="game-links">
            <Link to="createCharacter" onClick={handleNewGame}>New Game</Link>
          </div>
          <div className="game-links">
            <Link to="leaderBoard">High Scores</Link>
          </div>
          <div className="game-links">
            <Link to="rules">How to Play</Link>
          </div>
          <div className="game-links">
            <Link to="about">About the Authors</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
