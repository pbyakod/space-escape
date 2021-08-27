import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Rules from "./components/pages/Rules";
import About from "./components/pages/About";
import CreateCharacter from "./components/pages/CreateCharacter";
import Story from "./components/pages/Story";
import Obstacle from "./components/pages/Obstacle";
import MiniGame from "./components/pages/MiniGame";
import Result from "./components/pages/Result";
import Score from "./components/pages/Score";
import LeaderBoard from "./components/pages/LeaderBoard";
import Background from "./components/background/Background";


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

        <Route component={CreateCharacter} path="/createCharacter">
        {/* {token !== "" ? <CreateCharacter /> : <Auth setAuth={setAuth} />} */}
        </Route>

        <Route component={Story} path="/story">
        {/* {token !== "" ? <Story /> : <Auth setAuth={setAuth} />} */}
        </Route>
        
        <Route component={Obstacle} path="/obstacle">
        {/* {token !== "" ? <Obstacle /> : <Auth setAuth={setAuth} />} */}
        </Route>
        <Route component={Result} path="/result">
        {/* {token !== "" ? <Result /> : <Auth setAuth={setAuth} />} */}
        </Route>
        <Route component={Score} path="/score">
        {/* {token !== "" ? <Score /> : <Auth setAuth={setAuth} />} */}
        </Route>
        <Route component={LeaderBoard} path="/leaderBoard">
        {/* {token !== "" ? <LeaderBoard /> : <Auth setAuth={setAuth} />} */}
        </Route>
        
      </Switch>
      </BrowserRouter>
    </>
  );
}