import "../App.scss";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="homepage">
      <section className="containerLarge">
        <h1>Home Page</h1>
        <Link to="auth">Sign in / Sign up</Link>
        <Link to="rules">How to Play</Link>
        <Link to="about">About the Authors</Link>
      </section>

      <section className="containerLarge">
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
