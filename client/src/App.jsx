import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";
import Rules from "./components/pages/rules/Rules";
import About from "./components/pages/about/About";
import CreateCharacter from "./components/pages/createCharacter/CreateCharacter";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Story from "./components/pages/Story";
import Location from "./components/pages/location/Location";
import MiniGame from "./components/pages/MiniGame";
import AsteroidsGame from "./components/minigame/AsteroidsGame/AsteroidsGame";
import Result from "./components/pages/Result";
import Score from "./components/pages/Score";
import LeaderBoard from "./components/pages/LeaderBoard";
import Background from "./components/background/Background";
import api from './utils/api';
import { GameProvider } from "./utils/Game/GlobalState";
import { Howl, Howler } from 'howler';
import Hover from './sounds/hover.mp3';

export default function App() {
  //use token to authorize user
  const [token, setToken] = [];
  //const [token, setToken] = useState("");
  const setAuth = (token) => {
    console.log(token);
    setToken(token); // set token from server into state.
    alert(JSON.stringify(token));

  };

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
          <Route component={Home} onClick={PlaySound} path="/" exact>
            {/* {token !== "" ? <Home /> : <Auth setAuth={setAuth} />} */}
          </Route>

          <Route component={Auth} path="/auth">
          </Route>

          <Route component={About} path="/about">
          </Route>

          <Route component={Rules} path="/rules"></Route>

          <Route component={api.loggedIn() ? Dashboard : Auth} path="/dashboard"></Route>

          <Route component={api.loggedIn() ? CreateCharacter : Auth} path="/createCharacter">
          {/* {token !== "" ? <CreateCharacter /> : <Auth setAuth={setAuth} />} */}
          </Route>

          <Route component={api.loggedIn() ? Story : Auth} path="/story">
          {/* {token !== "" ? <Story /> : <Auth setAuth={setAuth} />} */}
          </Route>
          
          <Route component={api.loggedIn() ? Location : Auth} path="/location">
          {/* {token !== "" ? < /> : <Auth setAuth={setAuth} />} */}
          </Route>
          <Route component={api.loggedIn() ? Result : Auth} path="/result">
          {/* {token !== "" ? <Result /> : <Auth setAuth={setAuth} />} */}
          </Route>
          <Route component={api.loggedIn() ? Score : Auth} path="/score">
          {/* {token !== "" ? <Score /> : <Auth setAuth={setAuth} />} */}
          </Route>
          <Route component={api.loggedIn() ? LeaderBoard: Auth} path="/leaderBoard">
          {/* {token !== "" ? <LeaderBoard /> : <Auth setAuth={setAuth} />} */}
          </Route>
          <Route component={AsteroidsGame} path="/Asteroids" exact>
            {/* {token !== "" ? <Home /> : <Auth setAuth={setAuth} />} */}
          </Route>
        </Switch>
      </GameProvider>
      </BrowserRouter>
    </>
  );
}