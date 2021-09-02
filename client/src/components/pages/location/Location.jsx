import NavBar from "../../navBar/NavBar";
import Minigame from "../../minigame/MiniGame";
import Result from "../../result/Result";
import Encounter from "../../encounter/Encounter";
import { Link } from "react-router-dom";
import apiCalls from "../../../utils/api";
import { useGameContext } from "../../../utils/Game/GlobalState";
import { useEffect } from "react";
import { INITIALIZE_ENCOUNTERS } from "../../../utils/Game/actions";

export default function Location() {
  const [state, dispatch] = useGameContext();

  console.log('location')
  useEffect(() => {
    getLocationData();
  }, [])

  async function getLocationData() {
    const locationData = await apiCalls.getLocation(state.location_id);
    console.log(locationData);

    dispatch({
      type: INITIALIZE_ENCOUNTERS,
      encounter: locationData.encounters[0],
      encounters: locationData.encounters,
    });
    console.log(state);
  }
  return (
    <div>
      {state.renderPrompt 
        ? <Encounter optionOne={state.encounter.option1} optionTwo={state.encounter.option2} />
        : state.renderResults 
          ? <Result />
          : state.renderMinigame 
            ? <Minigame /> : false
      }

    </div>
  )
}