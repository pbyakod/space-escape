
import NavBar from "../NavBar"
import { Link } from "react-router-dom"

export default function Obstacle() {
  
  return (
    <div>
      <NavBar/>
      <h1>Obstacle Page</h1>
      <Link to="/minigame">
        <button>option 1</button>
      </Link>
      <Link to="/results">
        <button>option 2</button>
      </Link>

    </div>
  )
}
