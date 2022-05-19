import { LEARN_ACTION_TYPES } from "./learn.action.types";

export const LEARN_INTIAL_STATE = {};

export const LearnReducer = (state = LEARN_INTIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LEARN_ACTION_TYPES.ADD:
      return { ...state, learn: payload };

    default:
      return state;
  }
};
