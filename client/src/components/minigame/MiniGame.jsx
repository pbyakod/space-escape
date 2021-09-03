
import { Link } from "react-router-dom"

export default function MiniGame(prop) {
   
  return (
    <div>
      <h1>Mini Game Page</h1>
        <Link to="results">
          <button>continue</button>
        </Link></div>
    // <div>
    //   {/* {prop.game === 'asteroids' && <Asteroid/>}
    //   {prop.game === 'wackomole' && <Wackomole/>} */}
    // </div>
  )
}
