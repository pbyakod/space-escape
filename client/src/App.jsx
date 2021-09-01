import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";
import Rules from "./components/pages/rules/Rules";
import About from "./components/pages/about/About";
import CreateCharacter from "./components/pages/createCharacter/CreateCharacter";
import Story from "./components/pages/Story";
import Obstacle from "./components/pages/Obstacle";
import MiniGame from "./components/pages/MiniGame";
import Result from "./components/pages/Result";
import Score from "./components/pages/Score";
import LeaderBoard from "./components/pages/LeaderBoard";
import Background from "./components/background/Background";
import api from './utils/api';

// const body = {username: 'user100', password: 'password100'};

// api.login(body).then(data => console.log(data)).catch(err => console.log(err));
// console.log(api.loggedIn())

export default function App() {
  //use token to authorize user
  const [token, setToken] = [];
  //const [token, setToken] = useState("");
  const setAuth = (token) => {
    console.log(token);
    setToken(token); // set token from server into state.
    alert(JSON.stringify(token));

  };
  return (
    <>
    <Background/>
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact>
          {/* {token !== "" ? <Home /> : <Auth setAuth={setAuth} />} */}
        </Route>

        <Route component={Auth} path="/auth">
        </Route>

        <Route component={About} path="/about">
        </Route>

        <Route component={Rules} path="/rules"></Route>

        <Route component={api.loggedIn() ? CreateCharacter : Auth} path="/createCharacter">
        {/* {token !== "" ? <CreateCharacter /> : <Auth setAuth={setAuth} />} */}
        </Route>

        <Route component={api.loggedIn() ? Story : Auth} path="/story">
        {/* {token !== "" ? <Story /> : <Auth setAuth={setAuth} />} */}
        </Route>
        
        <Route component={api.loggedIn() ? Obstacle : Auth} path="/obstacle">
        {/* {token !== "" ? <Obstacle /> : <Auth setAuth={setAuth} />} */}
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
        
      </Switch>
      </BrowserRouter>
    </>
  );
}