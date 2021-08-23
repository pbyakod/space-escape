
import { Link } from "react-router-dom"

export default function Rules() {
  return (
    <div>
      <h1>Rules Page</h1>
      <p>here are some rules</p>
      <Link to="/" exact>
      <button>back</button>
      </Link>
    </div>
  )
}
