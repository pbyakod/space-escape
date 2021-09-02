import { Link } from "react-router-dom";
import apiCalls from "../../../utils/api";
import "../home/home.scss";
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
    <div className="homepage" onMouseEnter={sound.PlayBackground}>
      {/* main container from App.scss */}
      <button className='sound-btn' onClick={sound.MuteSound}>Sound</button>
      <section className="main-container">
        <h1 className="main-title">Space Escape</h1>
        {/* the content that displays in the main container when site is loaded */}
        <section className={!apiCalls.loggedIn() ? "initial-content" : "loggedin-content"}>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="auth">Sign in / Sign up</Link>
            </div>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="rules">How to Play</Link>
            </div>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="about">About the Authors</Link>
          </div>
        </section>
        {/* content that displays on home page if user is already logged in */}
        <section className={apiCalls.loggedIn() ? "initial-content" : "loggedin-content"}>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="dashboard">Continue Game</Link>
          </div>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="createCharacter" onClick={handleNewGame}>New Game</Link>
          </div>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="leaderBoard">High Scores</Link>
          </div>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="rules">How to Play</Link>
          </div>
          <div className="game-links" onMouseEnter={sound.PlayHover}>
            <Link to="about">About the Authors</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
