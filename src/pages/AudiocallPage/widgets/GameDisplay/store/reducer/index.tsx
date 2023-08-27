import { IAudiocallState } from "../initState";
import { Randomizers } from "../../../../../../shared/utils/services/randomizers";
import { INCORRECTS_ANSWERS_COUNT } from "../../utils/consts";

export function audiocallReducer(state: IAudiocallState, action) {
  switch (action.type) {
    case "SEND_ANSWER":
      const isCorrectAnswer = state.correctWord.id === action.value.id;
      const currentCombo = isCorrectAnswer? state.currentCombo + 1 : 0;
      return {
        ...state,
        gameHistory: [          
          ...state.gameHistory,
          {
          index: state.currentStep,
          word: state.correctWord,
          isCorrect: isCorrectAnswer,
          }
        ],
        choosenWord: action.value,
        currentCombo: currentCombo,
        maxCombo: currentCombo > state.maxCombo? currentCombo: state.maxCombo ,
        correctAnswers: isCorrectAnswer? state.correctAnswers + 1 : state.correctAnswers,
        incorrectAnswers: !isCorrectAnswer? state.incorrectAnswers + 1 : state.incorrectAnswers,

      };
    case "SKIP_ANSWER":
      return {
        ...state,
        choosenWord: {},
        gameHistory: [
          ...state.gameHistory,
          {
          index: state.currentStep,
          word: state.correctWord,
          isCorrect: action.value,
          }
        ],
        currentCombo: 0,
        incorrectAnswers: state.incorrectAnswers + 1
      };
    case "GET_NEXT_STEP":
      const currentStep = state.currentStep + action.value;
      if (state.words.length > currentStep) {
        return {
          ...state,
          currentStep: currentStep,
          correctWord: state.words[currentStep],
          answerOptions: Randomizers.shuffleArr([
            state.words[currentStep],
            ...Randomizers.genRandomElements(
              state.words.filter(word => word.id !== state.words[currentStep].id),
              INCORRECTS_ANSWERS_COUNT,
            ),
          ]),
          choosenWord: null
        };
      } else {
        return {
          ...state,
          gameIsEnd: true
        }
      }

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
