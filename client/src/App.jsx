import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";
import Rules from "./components/pages/home/rules/Rules";
import About from "./components/pages/home/about/About.jsx";
import CreateCharacter from "./components/pages/createCharacter/CreateCharacter.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Game from "./components/pages/game/Game";
import Score from "./components/pages/endGame/Score";
import LeaderBoard from "./components/pages/endGame/LeaderBoard";
import AsteroidsGame from "./components/minigame/AsteroidsGame/AsteroidsGame";
import Background from "./components/background/Background";
import api from './utils/api';
import { GameProvider } from "./utils/Game/GlobalState";
import { Howl, Howler } from 'howler';
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
    <Background/>
    <BrowserRouter>
      <GameProvider>
        <Switch>
          <Route component={Home} onClick={PlaySound} path="/" exact/>
          <Route component={Auth} path="/auth"/>
          <Route component={About} path="/about"/>
          <Route component={Rules} path="/rules"/>
          <Route component={api.loggedIn() ? Dashboard : Auth} path="/dashboard"/>
          <Route component={api.loggedIn() ? CreateCharacter : Auth} path="/createCharacter"/>
          <Route component={api.loggedIn() ? Game : Auth} path="/game"/>
          <Route component={api.loggedIn() ? Score : Auth} path="/score"/>
          <Route component={api.loggedIn() ? LeaderBoard: Auth} path="/leaderBoard"/>
          {/* <Route component={api.loggedIn() ? AsteroidsGame: Auth} path="/Asteroids" /> */}
          <Route component={AsteroidsGame} path="/Asteroids" />
        </Switch>
      </GameProvider>
      </BrowserRouter>
    </>
  );
}