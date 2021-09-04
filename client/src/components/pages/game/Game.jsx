import Encounter from "./encounter/Encounter";
import apiCalls from "../../../utils/api";
import { useGameContext } from "../../../utils/Game/GlobalState";
import { useEffect } from "react";
import { INITIALIZE_GAME } from "../../../utils/Game/actions";
import Story from "./story/Story";
import Score from "../endGame/Score";
import LeaderBoard from "../endGame/LeaderBoard";

export default function Game() {
  const [state, dispatch] = useGameContext();
  // const [minigame, setMinigame] = useState('');

  console.log('Game')
  useEffect(() => {
    initializeGame();
  }, [])

  async function getGameData(location_id) {
    const GameData = await apiCalls.getLocation(location_id);
    console.log(GameData);
    return GameData;
  }

  async function initializeGame() {
    const GameData = await getGameData(state.location_id); 
    dispatch({
      type: INITIALIZE_GAME, 
      encounter: GameData.encounters[0],
    });
  }

  return (
    <div>
      {state.renderStory && <Story />}
      {!state.renderStory && <Encounter getGameData={getGameData}/>}
      {state.renderScore && <Score />}
      {state.renderLeaderboard && <LeaderBoard/>}
    </div>
  )
}