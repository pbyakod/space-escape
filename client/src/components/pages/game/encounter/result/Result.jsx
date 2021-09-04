import { useGameContext } from "../../../../../utils/Game/GlobalState"
import { RENDER_STORY, RENDER_SCORE, SET_NEXT_LOCATION, AFFECT_CHAR_STATS} from "../../../../../utils/Game/actions";
import parseOption from "../../../../../utils/helpers";
import {useEffect} from "react";

export default function Result({getGameData}) {
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
      getGameData(state.outcome.next_location_id)
        .then(GameData => {
          console.log(GameData)
          if (GameData) {
            console.log('here',GameData)
            dispatch({
              type: SET_NEXT_LOCATION, 
              location_id: GameData.id,
              encounter: GameData.encounters[0]
            });
          } else {
            console.log('end game no more location id')
            dispatch({
              type: RENDER_SCORE 
            })
          }
        });
    }
    dispatch({type: RENDER_STORY}) //sets renderStory to true
  }

  return (
    <div>
      <h1>Result Page</h1>
      {state.health}
      {state.gold}
      {state.ship}
      <button onClick={handleClick}>continue</button>
    </div>
  )
}
