import { useGameContext } from "../../../../utils/Game/GlobalState"
import Prompt from "./prompt/Prompt";
import MiniGame from "../encounter/minigame/MiniGame";
import Result from "./result/Result";
import { useState } from "react";

export default function Encounter() {
  const [state, dispatch] = useGameContext();
  const [minigameName, setMinigameName] = useState("");

  return (
    <div>
      {state.renderPrompt && <Prompt setMinigameName={setMinigameName}/>}
      {state.renderMinigame && <MiniGame game={minigameName}/>}
      {state.renderResults && <Result />}
    </div>
  )
}