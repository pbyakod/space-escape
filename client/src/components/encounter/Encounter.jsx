import NavBar from "../navBar/NavBar"
import { Link } from "react-router-dom"

export default function Encounter() {
   
  return (
    <div>
      <NavBar/>
      <h1>Encounter Page</h1>
      <Link to="/minigame">
        <button>option 1</button>
      </Link>
      <Link to="/results">
        <button>option 2</button>
      </Link>

    </div>
  )
}
