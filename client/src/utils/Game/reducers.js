import { useReducer } from "react";
import {
  CREATE_GAME,
  INITIALIZE_GAME,
  RENDER_MINIGAME,
  RENDER_RESULTS,
  RENDER_PROMPT,
  RENDER_STORY,
  RENDER_END_GAME,
  UPDATE_LOCATION,
  SET_NEXT_LOCATION,
  SET_OUTCOME,
  AFFECT_CHAR_STATS
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
    case INITIALIZE_GAME:
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
    case RENDER_END_GAME:
      return {
        ...state,
        renderEndGame: true,
        renderPrompt: false,
        renderMinigame: false,
        renderResults: false,
        renderStory: false,
        inProgress: false
      }
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
        outcome: {}
      }
    case SET_OUTCOME:
      return {
        ...state,
        outcome: action.outcome
      }
    case AFFECT_CHAR_STATS:
      return {
        ...state,
        ...action.statsChange
      }
    default:
      return state;
  }
}

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState)
}
