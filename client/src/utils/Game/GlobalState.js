import { createContext, useContext } from "react";
import { useGameReducer } from "./reducers";

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value=[], ...props }) => {
  const [state, dispatch] = useGameReducer({
    location_id: 1,
    encounter: {},
    renderPrompt: false,
    renderEncounter: false,
    renderMinigame: false,
    renderResults: false,
    renderStory: false,
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