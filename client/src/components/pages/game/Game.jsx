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

  console.log('Game')
  useEffect(() => {
    initializeGame();
  }, [])

  async function initializeGame() {
    const GameData = await apiCalls.getLocation(state.location_id); 
    dispatch({
      type: INITIALIZE_GAME, 
      encounter: GameData.encounter,
      location: {
        name: GameData.name,
        people: GameData.population,
        currency: GameData.currency,
        leader: GameData.leader,
        tradeable: GameData.tradeable,
        abundance: GameData.abundance,
        fact: GameData.fact
      }
    });
  }

  return (
    <div>
      {state.renderStory && <Story />}
      {!state.renderStory && <Encounter />}
      {state.renderScore && <Score />}
      {state.renderLeaderboard && <LeaderBoard/>}
    </div>
  )
}