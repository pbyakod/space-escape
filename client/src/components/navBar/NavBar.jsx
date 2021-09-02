import "./navBar.scss"
import { useGameContext } from "../../utils/Game/GlobalState";

export default function NavBar() {
  const [state] = useGameContext(); 
  return (
    <div className = "navBar">
      location id: {state.location_id}
      encounter id: {state.encounter_id}
      char id: {state.char_id}
      health: {state.health}
      ship: {state.ship}
      gold: {state.gold}
    </div>
  )
}
