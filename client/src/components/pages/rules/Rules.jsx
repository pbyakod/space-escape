import { Link } from "react-router-dom"
import "../rules/rules.scss"
import { Howl } from 'howler';
import Hover from '../../../sounds/hover.mp3';

export default function Rules() {

  const hoverSound = new Howl({
    src: Hover
  })

  function PlayHoverSound() {
    hoverSound.play();
  }

  return (
    <div>
      {/* main-container from App.scss */}
      <div className="main-container">
        {/* one rule per rule-title div so that content will fit the entire container */}
        <div className="rule-title">
          <h1>Rules Page</h1>
        </div>
        {/* the p tags will be changed once we define the rules of the game */}
        <div className="rule-items">
          <p>here are some rules</p>
        </div>
        <div className="rule-items">
          <p>here are some more rules</p>
        </div>
        <div className="rule-items">
          <p>even more rules</p>
        </div>
        <div className="rule-items">
          <p>too many rules now</p>
        </div>
        <div className="rule-items">
          <p>now you know how to play</p>
        </div>
        <div className="rule-items">
        {/* uses same properties as back-btn from home.scss */}
        <Link to="/" exact>
          <button class="back-btn" onMouseEnter={PlayHoverSound}>back</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
