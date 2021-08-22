import "../App.scss"

import { Link } from "react-router-dom"

export default function CreateCharacter() {
  return (
    <div>
      <h1>Create Character Page</h1>
      <Link to="story">
      <button>submit</button>
      </Link>
    </div>
  )
}
