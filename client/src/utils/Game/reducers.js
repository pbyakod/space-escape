import { useReducer } from "react";
import {
  CREATE_GAME,
  INITIALIZE_ENCOUNTERS,
  SET_MINIGAME,
  SET_RESULTS,
  SET_PROMPT,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_GAME:
      console.log(action)
      return {
        ...state,
        char_id: action.char_id,
        health: action.health,
        ship: action.ship,
        gold: action.gold,
        inProgress: action.inProgress
      }
    case INITIALIZE_ENCOUNTERS:
      return {
        ...state,
        encounters: action.encounters,
        encounter: action.encounter,
        renderPrompt: true
      }
    case SET_MINIGAME:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: true,
        renderResults: false
      }
    case SET_RESULTS:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: true
      }
    case SET_PROMPT:
      return {
        ...state,
        renderPrompt: true,
        renderMinigame: false,
        renderResults: false
      }
    
    default:
      return state;
  }
}

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState)
}
