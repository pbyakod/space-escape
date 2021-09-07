import "../map/map.scss"
import { useGameContext } from "../../../utils/Game/GlobalState";

export default function Map () {
    const [state] = useGameContext(); 
    return (
        <div>
            <div className="map-container">
                <p>Location ID: {state.location_id}</p>
                <p>Location Name: {state.location.name}</p>
                <img src="/images/map.png" alt="game map" />
            </div>
        </div>
    )
}