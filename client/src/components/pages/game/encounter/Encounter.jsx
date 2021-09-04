import { useGameContext } from "../../../../utils/Game/GlobalState"
import Prompt from "./prompt/Prompt";
import MiniGame from "../encounter/minigame/MiniGame";
import Result from "./result/Result";

export default function Encounter() {
  const [state, dispatch] = useGameContext();
  return (
    <div>
      {state.renderPrompt && <Prompt />}
      {state.renderMinigame && <MiniGame/>}
      {state.renderResults && <Result />}
    </div>
  )
}