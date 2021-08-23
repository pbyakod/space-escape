
import NavBar from "../navBar/NavBar"
import { Link } from "react-router-dom"

export default function Result() {
  return (
    <div>
      <NavBar/>
      <h1>Result Page</h1>
      <Link to="story">
        <button>continue</button>
      </Link>
    </div>
  )
}
