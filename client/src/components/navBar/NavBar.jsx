import { NavLink } from "react-router-dom";
import sound from "../../utils/sound";
import "./navBar.scss";
import $ from "jquery";
import apiCalls from "../../utils/api";
// import { useGameContext } from "../../utils/Game/GlobalState";
// import { RENDER_MAP } from "../../utils/Game/actions";

export default function NavBar() {
  console.log(sound.SoundStatus);
  const test = sound.SoundStatus;
  console.log(test);

  // const [state, dispatch] = useGameContext(); 

  $(function() {
    $('#vol-btn').on('click', function() {
      $(this).toggleClass('fa-volume-up fa-volume-mute')
      $(this).hasClass('fa-volume-mute')
    })
  })

  // function mapClick() {
  //   dispatch({
  //     type: RENDER_MAP
  //   })
  // }

  return (
    <div className="navBar">
      <NavLink to="/" exact className="nav-btn">
        Home
      </NavLink>
      <section className={!apiCalls.loggedIn() ? "nav-btn" : "dashboard"}>
        <NavLink to="/auth" className="nav-btn">
          Sign in / Sign up
        </NavLink> 
      </section>
      <section className={apiCalls.loggedIn() ? "nav-btn" : "dashboard"}>
        <NavLink to="/dashboard" className="nav-btn">
          Dashboard
        </NavLink>
      </section>
      <div className="btn">
        <span className="vol-btn nav-btn" onClick={sound.MuteSound}><i id='vol-btn' className="fa fa-volume-mute fa-2x nav-btn"></i></span>
      </div>
      <NavLink to="/map" className="nav-btn">
        <i class="fas fa-map-marked-alt fa-2x nav-btn"></i>
      </NavLink>
    </div>
  );
}
