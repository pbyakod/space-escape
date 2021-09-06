import { Link } from "react-router-dom"
import "./rules.scss"
import sound from "../../../../utils/sound";

export default function Rules() {

  return (
    <div>
      {/* main-container from App.scss */}
      <div className="main-container">
        {/* one rule per rule-title div so that content will fit the entire container */}
        <div className="rule-title">
          <h1>How To Play</h1>
        </div>
        {/* the p tags will be changed once we define the rules of the game */}
        <div className="rule-items">
          <p>Step 1: Sign Up or Sign in! You can save your progress, leave the game, and continue at anytime!</p>
        </div>
        <div className="rule-items">
          <p>Step2: Pick your Character: Each has three values: Ship, Health, and Gold. All of these are needed to win the game, so choose wisely!</p>
        </div>
        <div className="rule-items">
          <p>Step 3: Play!</p>
        </div>
        <div className="rule-items">
          <p>When given a choice of options, pick whicher you think is best, each has a unqique set of outcomes!</p>
        </div>
        <div className="rule-items">
          <p>When presented with an option to play a mini-game, you can either play the game, or skip it. Be warned that skipping a minigame will always depelete your health, ship, gold, or all three!</p>
        </div>
        <div className="rule-items">
          <p>Make it home before your ship breaks down or your health runs out! Enjoy!</p>
        </div>
        <div className="rule-items">
        {/* uses same properties as back-btn from home.scss */}
        <Link to="/" exact>
          <button class="back-btn" onMouseEnter={sound.PlayHover}>back</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
