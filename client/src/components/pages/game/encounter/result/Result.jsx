import { useGameContext } from "../../../../../utils/Game/GlobalState"
import { RENDER_STORY, RENDER_SCORE, SET_NEXT_LOCATION, AFFECT_CHAR_STATS} from "../../../../../utils/Game/actions";
import parseOption from "../../../../../utils/helpers";
import apiCalls from "../../../../../utils/api";
import {useEffect} from "react";
import "../../../../../App.scss";

export default function Result() {
  const [state, dispatch] = useGameContext();

  useEffect(() => {
    const characterStatsChange = {
      health: state.health + state.outcome.health,
      gold: state.gold + state.outcome.gold,
      ship: state.ship + state.outcome.ship
    }

    dispatch({
      type: AFFECT_CHAR_STATS,
      statsChange: characterStatsChange
    })
    
  }, [])

  function handleClick(e) {
    if (state.health <= 0 || state.gold <= 0|| state.ship <= 0) {
      console.log('Game Over!')
      dispatch({
        type: RENDER_SCORE //sets renderScore to true and inProgress to false because game ended
      })
    } else {
      apiCalls.getLocation(state.outcome.next_location_id)
        .then(GameData => {
          if (GameData) {
            dispatch({
              type: SET_NEXT_LOCATION, 
              location_id: GameData.id,
              encounter: GameData.encounters[0]
            });
            const body = {
              location_id: state.outcome.next_location_id,
              health: state.health,
              ship: state.ship,
              gold: state.gold,
              user_id: state.user_id
            }
            apiCalls
              .updateUserGame(state.game_id, body)
              .then(data => console.log(data))
              .catch(err => console.log(err));
          } else {
            console.log('end game no more location id')
            dispatch({
              type: RENDER_SCORE 
            });
          }
        });
      }
    dispatch({type: RENDER_STORY}) //sets renderStory to true
  }

  return (
    <div className="main-container">
      <h1 className="gap title">Results</h1>
      <p className="gap title">Player Health: {state.health}</p>
      <p className="gap title">Ship Health: {state.ship}</p>
      <p className="gap title">Gold: {state.gold}</p>
      <button className="gap" onClick={handleClick}>continue</button>
    </div>
  )
}
