import { RENDER_RESULTS } from "../../../../../utils/Game/actions";
import { useGameContext } from "../../../../../utils/Game/GlobalState"
import AsteroidsGame from "./Asteroids/AsteroidsGame";
import CollectGoldGame from "./CollectGold/CollectGoldGame";
import PeltersGame from "./Pelters/PeltersGame";

export default function MiniGame({game}) {
  game="asteroids";
  const [state, dispatch] = useGameContext();
  return (
    <div>
     {game === 'asteroids' && <AsteroidsGame/>}
     {game === 'collectGold' && <CollectGoldGame/>}
     {game === 'pelters' && <PeltersGame/>}
    </div>
  )
}