import { LEARN_ACTION_TYPES } from "./learn.action.types";

export const setLearningContent = (learningContent) => {
  return {
    type: LEARN_ACTION_TYPES.ADD,
    payload: learningContent,
  };
};
