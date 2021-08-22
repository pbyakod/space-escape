import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home";
import Auth from "./components/Auth";
import Rules from "./components/Rules";
import About from "./components/About";
import CreateCharacter from "./components/CreateCharacter";
import Story from "./components/Story";
import Obstacle from "./components/Obstacle";
import MiniGame from "./components/MiniGame";
import Result from "./components/Result";
import Score from "./components/Score";
import LeaderBoard from "./components/LeaderBoard";
import Background from "./components/Background";
// import NavBar from "./components/navBar/NavBar";
//import ContainerLarge from "./components/containerLarge/ContainerLarge";
// import ContainerSmall from "./components/containerSmall/ContainerSmall";
// import ContainerImage from "./components/containerImage/ContainerImage";

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
    <BrowserRouter>
    {/* <Background/> */}
      <Switch>
        <Route component={Home} path="/" exact>
          {/* {token !== "" ? <Home /> : <Auth setAuth={setAuth} />} */}
        </Route>
        <Route component={Auth} path="/auth">
        </Route>
        <Route component={About} path="/about">
        </Route>
        <Route component={Rules} path="/rules"></Route>
        <Route component={CreateCharacter} path="createCharacter">
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
        <Route component={Score} path="score">
        {/* {token !== "" ? <Score /> : <Auth setAuth={setAuth} />} */}
        </Route>
        <Route component={LeaderBoard} path="leaderBoard">
        {/* {token !== "" ? <LeaderBoard /> : <Auth setAuth={setAuth} />} */}
        </Route>
        
      </Switch>
      </BrowserRouter>
    </>
  );
}