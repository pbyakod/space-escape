import { Link } from 'react-router-dom'
import "./game.scss"
import { useGameContext } from "../../../../utils/Game/GlobalState";
import { INITIALIZE_SAVED_GAME } from "../../../../utils/Game/actions";
import apiCalls from "../../../../utils/api";



export default function Game({ game, user_id}) {
  let charName = "";
  let location = "";

  switch (game.char_id){ 
    case 1: charName = "Jeff Bezos"
    break;
    case 2: charName = "Elon Musk"
    break;
    case 3: charName = "Richard Branson"
    break;
    default: charName = "error";
    break;
  }

  switch (game.location_id) {
    case 1: location = "Denzal's Belt"
    break;
    case 2: location = "Troy's Traverse"
    break;
    case 3: location = "Automatia"
    break;
    case 4: location = "Niburu"
    break;
    case 5: location = "Unknown"
    break;
    case 6: location = "Peter's Pass"
    break;
    case 7: location = "Prastin"
    break;
    case 8: location = "Troll Topia"
    break;
    case 9: location = "Qiushyang's Cresents"
    break;
    case 10: location = "Qiushuang's Planet"
    break;
    case 11: location = "Terminus"
    break;
    case 12: location = "Pranav's Pelters"
    break;
   default: location = "ERROR"
   break;
  }

  const [ state, dispatch ] = useGameContext();

  function continueGame() {
   dispatch({
    game_id: game.id,
    user_id: user_id, 
    location_id: game.location_id,
    health: game.health,
    ship: game.ship,
    gold: game.gold,
    type: INITIALIZE_SAVED_GAME
   })
  }

  function deleteGame() {
    return;
  }

  return (
    <li>
          
          <p>{game.id}</p>
          <p>Location: {game.Location.name}</p>
          <p>Character: {charName}</p>
          <p>Health: {game.health}</p>
          <p>Ship Health: {game.ship}</p>
          <p>Gold: {game.gold}</p>
        <div className="dashboard-action">
         <Link to="/game"><button className="continue go-btn" onClick={continueGame}>Continue</button></Link>
          <button className="delete stop-btn" onClick={deleteGame}>Delete</button>
        </div>
        </li>
  )
}
