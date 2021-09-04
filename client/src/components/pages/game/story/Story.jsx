import { useGameContext } from "../../../../utils/Game/GlobalState"
import { RENDER_PROMPT } from "../../../../utils/Game/actions" 
import "../../../../App.scss";
import "./story.scss"

export default function Story() {
  const [state, dispatch] = useGameContext();
  
  function handleClick(e) {
    console.log(e)
    dispatch({type: RENDER_PROMPT}); 
  }
  console.log(state)
  return (
    <div className="main-container">
      <h1 className="title"> Story - {state.location_id}</h1>
      <p className="story-content">{state.encounter.story}</p>
      <button onClick={handleClick}>continue</button>
    </div>
  )
}
