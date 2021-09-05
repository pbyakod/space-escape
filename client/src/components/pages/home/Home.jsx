import { Link } from "react-router-dom";
import apiCalls from "../../../utils/api";
import "./home.scss";
import sound from "../../../utils/sound";

export default function home() {
  function handleNewGame() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const gameState = {
        location_id: 1,
        inProgress: true,
        user_id: user.id
      }
    localStorage.setItem('game_state', JSON.stringify(gameState));
    } else {
      document.location.replace('/');
    }
  }
  return (
    <div className="homepage">
      {/* <button className='sound-btn' onClick={sound.MuteSound}>Sound</button> */}
      <section className="main-container">
        <h1 className="main-title">Space Escape</h1>
        {/* the content that displays in the main container when site is loaded */}
        <section className={!apiCalls.loggedIn() ? "initial-content" : "loggedin-content"}>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="auth">Sign in / Sign up</Link>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="rules">How to Play</Link>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="about">About the Authors</Link>
        </section>
        {/* content that displays on home page if user is already logged in */}
        <section className={apiCalls.loggedIn() ? "initial-content" : "loggedin-content"}>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="dashboard">Continue Game</Link>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="createCharacter" onClick={handleNewGame}>New Game</Link>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="leaderBoard">High Scores</Link>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="rules">How to Play</Link>
            <Link className="game-links" onMouseEnter={sound.PlayHover} to="about">About the Authors</Link>
        </section>
      </section>
    </div>
  );
}
