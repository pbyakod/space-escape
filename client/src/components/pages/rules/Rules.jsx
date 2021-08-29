import { Link } from "react-router-dom"
import "../rules/rules.scss"

export default function Rules() {
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
          <button class="back-btn">back</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
