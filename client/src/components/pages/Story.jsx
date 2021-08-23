
import NavBar from "../NavBar"
import { Link } from "react-router-dom"

export default function story() {
  return (
    <div>
      <NavBar/>
      <h1>Story Page</h1>
      <Link to="/obstacle">
        <button>continue</button>
        </Link>
    </div>
  )
}
