import { useGameContext } from "../../../../utils/Game/GlobalState"
import { RENDER_PROMPT } from "../../../../utils/Game/actions" 
import story from './assets/story'; 

export default function Story({location_id}) {
  const [state, dispatch] = useGameContext();
  
  function handleClick(e) {
    console.log(e)
   dispatch({type: RENDER_PROMPT}); 
  }
  return (
    <div>
      <div className="main-container">
        <h1 className="title">Story Page</h1>
        <p className="content">{story[location_id - 1]}</p>
        <button onClick={handleClick}>continue</button>
      </div>
    </div>
  )
}
