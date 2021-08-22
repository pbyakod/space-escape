import './App.css';

export default function App() {
  return (<></>);
}

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
  const [token, setToken] = useState("");
  const setAuth = (token) => {
    console.log(token);
    //updates state
    setToken(token); // set token from server into state.
    alert(JSON.stringify(token));

  };
  return (
    <>
      <Switch>
        <Route exact path="">
          {token !== "" ? <Home /> : <Auth setAuth={setAuth} />}
        </Route>
        <Route path="about">
          <About />
        </Route>
        <Route path="rules"></Route>
        <Route path="createcharacter"></Route>
        <Route path="story"></Route>
        <Route path="obstacle"></Route>
        <Route path="result"></Route>
        <Route path="score"></Route>
        <Route path="leaderboard"></Route>
        
      </Switch>
    </>
  );
}