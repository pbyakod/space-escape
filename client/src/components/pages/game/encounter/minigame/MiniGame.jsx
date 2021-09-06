
import { RENDER_RESULTS } from "../../../../../utils/Game/actions";
import { useGameContext } from "../../../../../utils/Game/GlobalState"
import AsteroidsGame from "./Asteroids/AsteroidsGame";
import CollectGoldGame from "./CollectGold/CollectGoldGame";

export default function MiniGame({game}) {
  // game = "collectGold";
  console.log(game)
  const [state, dispatch] = useGameContext();
  return (
    <div>
     {game === 'asteroids' && <AsteroidsGame/>}
     {game === 'collectGold' && <CollectGoldGame/>}
     {/* {prop.game === 'wackomole' && <Wackomole/>} */}
    </div>
  )
}