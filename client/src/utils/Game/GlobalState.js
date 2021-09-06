import { createContext, useContext } from "react";
import { useGameReducer } from "./reducers";

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value=[], ...props }) => {
  const [state, dispatch] = useGameReducer({
    game_id: 1,
    user_id: null,
    location_id: 1,
    location: {},
    encounter: {},
    outcome: {},
    renderPrompt: false,
    renderMinigame: false,
    renderResults: false,
    renderStory: false,
    renderScore: false,
    renderLeaderboard: false,
    char_id: null,
    health: 0,
    ship: 0,
    gold: 0,
    inProgress: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

const useGameContext = () => {
  return useContext(GameContext);
}

export { GameProvider, useGameContext };