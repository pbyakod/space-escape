import { useReducer } from "react";
import {
  CREATE_GAME,
  INITIALIZE_ENCOUNTERS,
  RENDER_MINIGAME,
  RENDER_RESULTS,
  RENDER_PROMPT,
  RENDER_STORY,
  UPDATE_LOCATION
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
        encounter: action.encounter,
        renderStory: true
      }
    case RENDER_MINIGAME:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: true,
        renderResults: false,
        renderStory: false
      }
    case RENDER_RESULTS:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: true,
        renderStory: false
      }
    case RENDER_PROMPT:
      return {
        ...state,
        renderPrompt: true,
        renderMinigame: false,
        renderResults: false,
        renderStory: false
      }
    case RENDER_STORY:
      return {
        ...state,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: false,
        renderStory: true,
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        location_id: action.location_id
      }
    
    default:
      return state;
  }
}

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState)
}
