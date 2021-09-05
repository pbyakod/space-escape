import { NavLink } from "react-router-dom";
import sound from "../../utils/sound";
import "./navBar.scss";
import $ from "jquery";

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
      <NavLink to="/dashboard" className="nav-btn">
        Dashboard
      </NavLink>
      <div className="btn">
        <button class="vol-btn" onClick={sound.MuteSound}><i id='vol-btn' class="fa fa-volume-mute fa-2x"></i></button>
      </div>
    </div>
  );
}
