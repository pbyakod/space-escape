import React from 'react'
import "./game.scss"

export default function Game({ game }) {

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

  return (
    <li>
          
          <p>{game.id})</p>
          <p>Location: {location}</p>
          <p>Character: {charName}</p>
          <p>Health: {game.health}</p>
          <p>Ship Health: {game.ship}</p>
          <p>Gold: {game.gold}</p>
        <div className="dashboard-action">
          <button className="continue go-btn">Continue</button>
          <button className="delete stop-btn">Delete</button>
        </div>
        </li>
  )
}
