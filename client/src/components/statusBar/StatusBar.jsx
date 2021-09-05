import "./statusBar.scss"
import { useGameContext } from "../../utils/Game/GlobalState";

export default function StatusBar() {
  const [state] = useGameContext(); 
  return (
    <div className = "statusBar">
      {/* location id: {state.location_id}
      encounter id: {state.encounter_id}
      char id: {state.char_id} */}
      <label for="file">Health</label>
      <progress id="file" value={state.health} max="1000" placeholder={state.health}></progress>
      <label for="file">Gold</label>
      <progress id="file" value={state.gold} max="1000"></progress>
      <label for="file">Ship</label>
      <progress id="file" value={state.ship} max="1000"></progress>
    </div>
  )
}
