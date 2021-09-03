import { useGameContext } from "../../utils/Game/GlobalState"
import Prompt from "../prompt/Prompt";
import MiniGame from "../minigame/MiniGame";
import Result from "../result/Result";
import { createContext, useContext } from "react";

export default function Encounter({optionOne, optionTwo}) {
  const [state, dispatch] = useGameContext();

   

   
  return (
    <div>
      {state.renderPrompt && <Prompt optionOne optionTwo/>}
      {state.renderMinigame && <MiniGame/>}
      {state.renderResults && <Result />}
    </div>
  )
}