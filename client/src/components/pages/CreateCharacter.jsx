import CharProtoStats from "../charProto/CharProto"
import { Link } from "react-router-dom"
import apiCalls from "../../utils/api"
import { useEffect } from "react";

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
