import { combineReducers } from "redux";
import { LearnReducer } from "./learn.reducer";

export const rootReducer = combineReducers({
  learning: LearnReducer,
});
