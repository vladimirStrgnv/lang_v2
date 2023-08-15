import { IAudiocallState } from "../initState";
import { Randomizers } from "../../../../../../shared/utils/services/randomizers";
import { INCORRECTS_ANSWERS_COUNT } from "../../utils/consts";

export function audiocallReducer(state: IAudiocallState, action) {
  switch (action.type) {
    case "SEND_ANSWER":
      console.log(state.gameHistory);
      return {
        ...state,
        isAnswerSended: true,
        gameHistory: [
          ...state.gameHistory,
          state.correctWord.id === action.value,
        ],
      };
    case "SKIP_ANSWER":
      return {
        ...state,
        isAnswerSended: true,
        gameHistory: [
          ...state.gameHistory,
          action.value
        ],
      };
    case "GET_NEXT_STEP":
      return {
        ...state,
        currentStep: action.value,
        correctWord: state.words[action.value],
        answerOptions: Randomizers.shuffleArr([
          state.words[action.value],
          ...Randomizers.genRandomElements(
            state.words,
            INCORRECTS_ANSWERS_COUNT,
            action.value
          ),
        ]),
        isAnswerSended: false,
      };
    default:
      return state;
  }
}

export const answerAction = (value) => {
  return {
    type: "SEND_ANSWER",
    value: value,
  };
};

export const getNextStepAction = (value) => {
  return {
    type: "GET_NEXT_STEP",
    value: value,
  };
};

export const skipAnswerAction = (value) => {
    return {
      type: "SKIP_ANSWER",
      value: value,
    };
  };
