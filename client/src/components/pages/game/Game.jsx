import Encounter from "../../encounter/Encounter";
import apiCalls from "../../../utils/api";
import { useGameContext } from "../../../utils/Game/GlobalState";
import { useEffect } from "react";
import { INITIALIZE_ENCOUNTERS } from "../../../utils/Game/actions";
import Story from "../Story";

export default function Game() {
  const [state, dispatch] = useGameContext();
  // const [minigame, setMinigame] = useState('');



  console.log('Game')
  useEffect(() => {
    getGameData();
  }, [])

  async function getGameData() {
    const GameData = await apiCalls.getLocation(state.location_id);
    console.log(GameData);

    dispatch({
      type: INITIALIZE_ENCOUNTERS,
      encounter: GameData.encounters[0],
    });

    console.log(state);
  }

  return (
    <div>
      {state.renderStory && <Story location_id={state.location_id}/>}
      {state.renderPrompt && <Encounter optionOne={state.encounter.option1} optionTwo={state.encounter.option2} />}
    </div>
  )
}