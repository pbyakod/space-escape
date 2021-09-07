import { useGameContext } from "../../../../../utils/Game/GlobalState";
import {
  RENDER_STORY,
  RENDER_SCORE,
  SET_NEXT_LOCATION,
  AFFECT_CHAR_STATS,
} from "../../../../../utils/Game/actions";
import parseOption from "../../../../../utils/helpers";
import apiCalls from "../../../../../utils/api";
import { useEffect } from "react";
import "../../../../../app.scss";
import "./result.scss";
import Continue from "./continue/Continue"
import End from "./end/End"

export default function Result() {
  const [state, dispatch] = useGameContext();

  useEffect(() => {
    const characterStatsChange = {
      health: state.health + state.outcome.health,
      gold: state.gold + state.outcome.gold,
      ship: state.ship + state.outcome.ship,
    };

    dispatch({
      type: AFFECT_CHAR_STATS,
      statsChange: characterStatsChange,
    });
  }, []);

  function handleClick(e) {
    if (state.health <= 0 || state.gold <= 0 || state.ship <= 0) {
      console.log("Game Over!");
      dispatch({
        type: RENDER_SCORE, //sets renderScore to true and inProgress to false because game ended
      });
    } else {
      apiCalls.getLocation(state.outcome.next_location_id).then((GameData) => {
        if (GameData.encounter) {
          dispatch({
            type: SET_NEXT_LOCATION,
            location_id: GameData.id,
            location: GameData,
            encounter: GameData.encounter,
          });
          const body = {
            location_id: state.outcome.next_location_id,
            health: state.health,
            ship: state.ship,
            gold: state.gold,
            user_id: state.user_id,
          };
          apiCalls
            .updateUserGame(state.game_id, body)
            .then(dispatch({ type: RENDER_STORY })) //sets renderStory to true
            .catch((err) => console.log(err));
        } else {
          console.log("end game no more location id");
          dispatch({
            type: RENDER_SCORE,
          });
        }
      });
    }
  }

  return (

    <div className="main-container">
      {state.health > 0 && state.ship > 0 && state.gold >= 0?
      <Continue health={state.health} ship={state.ship} gold={state.gold} adjust={state.outcome}/>
      :<End health={state.health} ship={state.ship} gold={state.gold}/>
      }
      <button className="gap caution-btn" onClick={handleClick}>
        continue
      </button>
    </div>

    

  );
}

