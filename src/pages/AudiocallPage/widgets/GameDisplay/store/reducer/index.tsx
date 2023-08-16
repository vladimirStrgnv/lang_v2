import { IAudiocallState } from "../initState";
import { Randomizers } from "../../../../../../shared/utils/services/randomizers";
import { INCORRECTS_ANSWERS_COUNT } from "../../utils/consts";

export function audiocallReducer(state: IAudiocallState, action) {
  switch (action.type) {
    case "SEND_ANSWER":
      return {
        ...state,
        gameHistory: [          
          ...state.gameHistory,
          {
          word: state.correctWord,
          result: state.correctWord.id === action.value.id,
          }
        ],
        choosenWord: action.value
      };
    case "SKIP_ANSWER":
      return {
        ...state,
        choosenWord: {},
        gameHistory: [
          ...state.gameHistory,
          action.value
        ],
      };
    case "GET_NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + action.value,
        correctWord: state.words[state.currentStep + action.value],
        answerOptions: Randomizers.shuffleArr([
          state.words[state.currentStep + action.value],
          ...Randomizers.genRandomElements(
            state.words.filter(word => word.id !== state.words[state.currentStep + action.value].id),
            INCORRECTS_ANSWERS_COUNT,
          ),
        ]),
        choosenWord: null
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
