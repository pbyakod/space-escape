import { Link } from "react-router-dom"
import "../../styling/rules.scss"

export default function Rules() {
  return (
    <div className= "rulesContainer">
      <br></br><h1>Rules Page</h1>
      <br></br><p>here are some rules</p>
      <br></br><p>here are some more rules</p>
      <br></br><p>now you know how to play</p>
      <Link to="/" exact>
      <br></br><button>back</button>
      </Link>
    </div>
  )
}
