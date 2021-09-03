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
      <h1>Story Page</h1>
      <p>{story[location_id - 1]}</p>
      <button onClick={handleClick}>continue</button>
    </div>
  )
}
