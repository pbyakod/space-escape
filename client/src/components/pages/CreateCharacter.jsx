import CharProtoStats from "../CharProtoStats"
import { Link } from "react-router-dom"

export default function CreateCharacter() {
  return (
    <div>
      <h1>Create Character Page</h1>
      <CharProtoStats/>
      <Link to="story">
      <button>submit</button>
      </Link>
    </div>
  )
}
