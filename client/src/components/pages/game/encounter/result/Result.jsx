import { useGameContext } from "../../../../../utils/Game/GlobalState"
import { RENDER_STORY} from "../../../../../utils/Game/actions";

export default function Result() {
  const [state, dispatch] = useGameContext();

  function handleClick(e) {
    dispatch({type: RENDER_STORY})
  }
  return (
    <div>
      <h1>Result Page</h1>
      <button onClick={handleClick}>continue</button>
    </div>
  )
}
