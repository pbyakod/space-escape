
import { Link } from "react-router-dom"
import { RENDER_RESULTS } from "../../utils/Game/actions";
import { useGameContext } from "../../utils/Game/GlobalState"

export default function MiniGame(prop) {
  const [state, dispatch] = useGameContext();

  function handleClick(e) {
    dispatch({type: RENDER_RESULTS});
  }
  
  return (
    <div>
      <h1>Mini Game Page</h1>
      <button onClick={handleClick}>continue</button>
     {/* {prop.game === 'asteroids' && <Asteroid/>}
     {prop.game === 'wackomole' && <Wackomole/>} */}
    </div>
  )
}
