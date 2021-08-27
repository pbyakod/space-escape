import { Link } from "react-router-dom";
import "../../styling/home.scss"

export default function home() {
  return (
    <div className="homepage">
      <section className="containerLarge1">
        <section className="containerTitle">
          <h1>Space Escape</h1>
        </section>
        <section className="containerList">
          <div className="containerLink">
            <Link to="auth">Sign in / Sign up</Link>
          </div>
          <div className="containerLink">
            <Link to="rules">How to Play</Link>
          </div>
          <div className="containerLink">
            <Link to="about">About the Authors</Link>
          </div>
        </section>
      </section>

      <section className="containerLarge2">
        <h1>Home Page</h1>
        <Link to="story">Continue Game</Link>
        <Link to="createCharacter">New Game</Link>
        <Link to="leaderBoard">High Scores</Link>
        <Link to="rules">How to Play</Link>
        <Link to="about">About the Authors</Link>
      </section>
    </div>
  );
}
