import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.scss";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";
import Rules from "./components/pages/home/rules/Rules";
import About from "./components/pages/home/about/About.jsx";
import CreateCharacter from "./components/pages/createCharacter/CreateCharacter.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Game from "./components/pages/game/Game";
import Score from "./components/pages/endGame/Score";
import LeaderBoard from "./components/pages/endGame/LeaderBoard";
import NavBar from "./components/navBar/NavBar";
import Map from "./components/pages/map/Map";
import api from './utils/api';
import { GameProvider } from "./utils/Game/GlobalState";
import { Howl } from 'howler';
import Hover from './sounds/hover.mp3';

export default function App() {
  const hoverSound = new Howl({
    src: Hover
  })

  function PlaySound() {
    hoverSound.play();
  }
  return (
    <>
    <BrowserRouter>
      <GameProvider>
        <NavBar/>
        <Switch>
          <Route component={Home} onClick={PlaySound} path="/" exact/>
          <Route component={Auth} path="/auth"/>
          <Route component={About} path="/about"/>
          <Route component={Rules} path="/rules"/>
          <Route component={Map} path="/map"/>
          <Route component={api.loggedIn() ? Dashboard : Auth} path="/dashboard"/>
          <Route component={api.loggedIn() ? CreateCharacter : Auth} path="/createCharacter"/>
          <Route component={api.loggedIn() ? Game : Auth} path="/game"/>
          <Route component={api.loggedIn() ? Score : Auth} path="/score"/>
          <Route component={api.loggedIn() ? LeaderBoard: Auth} path="/leaderBoard"/>
        </Switch>
      </GameProvider>
      </BrowserRouter>
    </>
  );
}