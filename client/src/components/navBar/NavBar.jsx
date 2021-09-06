import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import sound from "../../utils/sound";
import "./navBar.scss";
import apiCalls from "../../utils/api";
// import { useGameContext } from "../../utils/Game/GlobalState";
// import { RENDER_MAP } from "../../utils/Game/actions";

export default function NavBar() {

  const [soundOn, setSoundOn] = useState(sound.SoundStatus());

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
        <span className="vol-btn nav-btn" onClick={() => { 
          setSoundOn(sound.SwitchSound())
          }}>{soundOn ? <FaVolumeUp /> : <FaVolumeMute /> }</span>
      </div>
      <NavLink to="/map" className="nav-btn">
        <i class="fas fa-map-marked-alt fa-2x nav-btn"></i>
      </NavLink>
    </div>
  );
}
