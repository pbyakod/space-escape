
import { RENDER_RESULTS } from "../../../../../utils/Game/actions";
import { useGameContext } from "../../../../../utils/Game/GlobalState"
import AsteroidsGame from "./Asteroids/AsteroidsGame";

export default function MiniGame({game}) {
  console.log(game)
  const [state, dispatch] = useGameContext();
  return (
    <div>
     {game === 'asteroids' && <AsteroidsGame/>}
     {/* {prop.game === 'wackomole' && <Wackomole/>} */}
    </div>
  )
}