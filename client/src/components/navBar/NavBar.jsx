import React, { useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import sound from "../../utils/sound";
import "./navBar.scss";
import apiCalls from "../../utils/api";
import { useGameContext } from "../../utils/Game/GlobalState";
import { RENDER_MAP, RENDER_PROMPT, RENDER_RESULTS, RENDER_SCORE, RENDER_STORY } from "../../utils/Game/actions";
import { useLocation } from "react-router";

export default function NavBar() {
  const [state, dispatch] = useGameContext();
  const [soundOn, setSoundOn] = useState(sound.SoundStatus());

  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location])

  function handleMap() {
    if (!state.renderMap) {
      dispatch({
        type: RENDER_MAP
      })
    } else {
      switch(state.renderPrevious) {
        case 'renderStory':
          dispatch({
            type: RENDER_STORY
          })
          break;
        case 'renderPrompt':
          dispatch({
            type: RENDER_PROMPT
          })
          break;
        case 'renderResults':
          dispatch({
            type: RENDER_RESULTS
          })
          break;
        case 'renderScore':
          dispatch({
            type: RENDER_SCORE
          })
          break;
        default: 
          break;
      }
    }
  }

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
          }}>{soundOn ? <FaVolumeUp size="2rem"/> : <FaVolumeMute size="2rem"/> }</span>
      </div>
      {location.pathname === '/game' && (<div className="btn">
        <span onClick={handleMap} className="nav-btn">
          <i class="fas fa-map-marked-alt fa-2x nav-btn"></i>
        </span>
      </div>)
      }
    </div>
  );
}
