import { useGameContext } from "../../../../utils/Game/GlobalState"
import { RENDER_PROMPT } from "../../../../utils/Game/actions" 
import "../../../../app.scss";
import "./story.scss"
import copilot from "./img/copilot.jpeg"

export default function Story() {
  const [state, dispatch] = useGameContext();
  
  function handleClick(e) {
    console.log(e)
    dispatch({type: RENDER_PROMPT}); 
  }
  console.log(state)
  return (
    <div className="main-container">
      <p className="story-content">{state.encounter.story}</p>
      <img className="copilot" src={copilot} alt="copilot frog in space suit"/>
      <button className="caution-btn" onClick={handleClick}>continue</button>
    </div>
  )
}
