import { NavLink } from "react-router-dom";
import sound from "../../utils/sound";
import "./navBar.scss";
import $ from "jquery";
import apiCalls from "../../utils/api";

export default function NavBar() {
  console.log(sound.SoundStatus);
  const test = sound.SoundStatus;
  console.log(test);

  $(function() {
    $('#vol-btn').on('click', function() {
      $(this).toggleClass('fa-volume-up fa-volume-mute')
      $(this).hasClass('fa-volume-mute')
    })
  })

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
        <button class="vol-btn" onClick={sound.MuteSound}><i id='vol-btn' class="fa fa-volume-mute fa-2x"></i></button>
      </div>
    </div>
  );
}
