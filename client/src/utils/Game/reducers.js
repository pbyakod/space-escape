import { useReducer } from "react";
import {
  INITIALIZE_GLOBAL_STATE,
  CREATE_GAME,
  INITIALIZE_GAME,
  INITIALIZE_SAVED_GAME,
  RENDER_MINIGAME,
  RENDER_RESULTS,
  RENDER_PROMPT,
  RENDER_STORY,
  RENDER_SCORE,
  UPDATE_OUTCOME,
  SET_NEXT_LOCATION,
  SET_OUTCOME,
  AFFECT_CHAR_STATS,
  RENDER_LEADERBOARD,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_GLOBAL_STATE:
      return {
        location_id: 1,
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
      };
    case INITIALIZE_GAME:
      return {
        ...state,
        encounter: action.encounter,
        renderStory: true,
      };
    case CREATE_GAME:
      return {
        ...state,
        game_id: action.game_id,
        user_id: action.user_id,
        char_id: action.char_id,
        health: action.health,
        ship: action.ship,
        gold: action.gold,
        inProgress: action.inProgress,
      };
    case INITIALIZE_SAVED_GAME:
      return {
        ...state,
        location_id: action.location_id,
        health: action.health,
        ship: action.ship,
        gold: action.gold,
      };

    case RENDER_MINIGAME:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: true,
        renderResults: false,
        renderStory: false,
      };
    case RENDER_RESULTS:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: true,
        renderStory: false,
      };
    case RENDER_PROMPT:
      return {
        ...state,
        renderPrompt: true,
        renderMinigame: false,
        renderResults: false,
        renderStory: false,
      };
    case RENDER_STORY:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: false,
        renderStory: true,
      };
    case RENDER_SCORE:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: false,
        renderStory: false,
        renderScore: true,
        renderLeaderboard: false,
        inProgress: false,
      };
    case RENDER_LEADERBOARD:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: false,
        renderStory: false,
        renderScore: false,
        renderLeaderboard: true,
        inProgress: false,
      };
    // case UPDATE_LOCATION:
    //   return {
    //     ...state,
    //     location_id: action.location_id
    //   }
    case SET_NEXT_LOCATION:
      return {
        ...state,
        location_id: action.location_id,
        encounter: action.encounter,
        outcome: {},
      };
    case SET_OUTCOME:
      return {
        ...state,
        outcome: action.outcome,
      };
    case UPDATE_OUTCOME:
      return {
        ...state,
        outcome: {
          ...state.outcome,
          health: action.outcome.health,
          ship: action.outcome.ship,
          gold: action.outcome.gold,
        },
      };
    case AFFECT_CHAR_STATS:
      return {
        ...state,
        ...action.statsChange,
      };
    default:
      return state;
  }
};

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState);
}
