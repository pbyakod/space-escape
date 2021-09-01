import NavBar from "../navBar/NavBar"
import { Link } from "react-router-dom"

export default function story() {
  return (
    <div>
      <NavBar/>
      <h1>Story Page</h1>
      <Link to="/encounter">
        <button>continue</button>
        </Link>
    </div>
  )
}
