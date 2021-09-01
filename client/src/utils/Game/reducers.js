import { useReducer } from "react";
import {
  CREATE_GAME
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
    default:
      return state;
  }
}

export function useGameReducer(initialState) {
  return useReducer(reducer, initialState)
}
