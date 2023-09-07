import { useReducer } from "react";
import { IWord } from "../../../../../shared/api/types";
import { Randomizers } from "../../../../../shared/utils/services/randomizers";

export interface ISprintState {
  currentStep: number;
  words: IWord[];
  questionWord: IWord;
  answerWord: IWord;
  gameSteps: number;
  gameHistory: boolean[];
  gameIsEnd: boolean;
  correctAnswers: number;
  incorrectAnswers: number;
  maxCombo: number;
  currentCombo: number;
}

export function initSprintState(words) {
  const shuffleWords = Randomizers.shuffleArr(words);

  return {
    words: shuffleWords,
    questionWord: shuffleWords[0],
    answerWord: Randomizers.genRandomElements(shuffleWords, 1)[0],
    currentStep: 0,
    gameSteps: words.length - 1,
    gameHistory: [],
    gameIsEnd: false,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentCombo: 0,
    maxCombo: 0,
  };
}

function reducer(state: ISprintState, action) {
  switch (action.type) {
    case "CHANGE_GAME_STATUS":
      return { ...state, gameIsEnd: action.value };
    case "SEND_ANSWER":
      const newStepValue = state.currentStep + 1;
      const isCorrect =
        action.value.isCorrect ===
        (state.answerWord.id === state.questionWord.id);
      const currentCombo = isCorrect ? state.currentCombo + 1 : 0;

        return {
          ...state,
          currentStep: newStepValue,
          questionWord: state.words[newStepValue],
          gameHistory: [
            ...state.gameHistory,
            {
              index: state.currentStep,
              word: state.questionWord,
              isCorrect,
            },
          ],
          answerWord: Randomizers.genRandomElements(state.words, 1)[0],
          currentCombo,
          correctAnswers: isCorrect
            ? state.correctAnswers + 1
            : state.correctAnswers,
          incorrectAnswers: !isCorrect
            ? state.incorrectAnswers + 1
            : state.incorrectAnswers,
          maxCombo:
            currentCombo > state.maxCombo ? currentCombo : state.maxCombo,
            gameIsEnd: newStepValue> state.gameSteps
        };
    default:
      return state;
  }
}

const useCreateSprintStore = (gameWords: IWord[]) => {
  const [state, dispatch] = useReducer(reducer, gameWords, initSprintState);
  const {
    answerWord,
    questionWord,
    gameIsEnd,
    gameHistory,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
  } = state;

  const gameStatusDispatch = (value) => {
    dispatch({
      type: "CHANGE_GAME_STATUS",
      value: value,
    });
  };

  const answerDispatch = (value) => {
    dispatch({
      type: "SEND_ANSWER",
      value: value,
    });
  };

  return {
    gameStatusDispatch,
    answerDispatch,
    answerWord,
    questionWord,
    gameIsEnd,
    gameHistory,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
  };
};

export default useCreateSprintStore;
