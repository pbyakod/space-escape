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
        if (GameData) {
          dispatch({
            type: SET_NEXT_LOCATION,
            location_id: GameData.id,
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
      {/* code to show non-zero values */}
      <h4 className="main-title">Results</h4>
      {state.outcome.health === 0 || (
        <p className="title">{state.outcome.health} Health</p>
      )}
      {state.outcome.ship === 0 || (
        <p className="title">{state.outcome.ship} Ship Health</p>
      )}
      {state.outcome.gold === 0 || (
        <p className="title">{state.outcome.gold} Gold</p>
      )}
      {/* code to always show values (even 0 values) */}
      {/* <h4 className="main-title">Results</h4>
        <p className="title">{state.outcome.health} Health</p>
        <p className="title">{state.outcome.ship} Ship Health</p>
        <p className="title">{state.outcome.gold} Gold</p> */}
      <p
        className={
          state.outcome.health === 0 &&
          state.outcome.ship === 0 &&
          state.outcome.gold === 0
            ? "gap title"
            : "gap title break"
        }
      >
        Ship Health: {state.ship}
      </p>
      <p className="gap title">Player Health: {state.health}</p>
      <p className="gap title">Gold: {state.gold}</p>
      
      <button className="gap caution-btn" onClick={handleClick}>
        continue
      </button>
    </div>
  );
}
