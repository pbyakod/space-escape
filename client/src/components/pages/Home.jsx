import { Link } from "react-router-dom";
import "../../styling/home.scss"

export default function home() {
  	return (
    	<div className="homepage">
      		<section className="container-1">
        		<section className="container-title">
          			<h1><b>SPACE ESCAPE</b></h1>
        		</section>
				<br></br>
        		<section className="container-list">
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
      	</section>
      	<section className="container-2">
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
