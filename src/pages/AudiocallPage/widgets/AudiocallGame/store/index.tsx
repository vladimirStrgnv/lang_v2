import { useReducer } from "react";
import { Randomizers } from "../../../../../shared/utils/services/randomizers";
import { IWord } from "../../../../../shared/api/types";
import { INCORRECTS_ANSWERS_COUNT } from "../utils/consts";

export interface GameHistoryStep {
  index: number,
  word: IWord,
  isCorrect: boolean,
}

export interface IAudiocallState {
    currentStep: number;
    words: IWord[];
    answerOptions: IWord[];
    correctWord: IWord;
    gameSteps:  number;
    gameHistory: GameHistoryStep[];
    choosenWord: IWord;
    gameIsEnd: boolean;
    correctAnswers: number;
    incorrectAnswers: number;
    maxCombo: number;
    currentCombo: number;

}

export function initAudicallState (words) {
    const shuffleWords = Randomizers.shuffleArr(words);
    return {
        words: shuffleWords,
        currentStep: 0,
        correctWord : shuffleWords[0],
        answerOptions : Randomizers.shuffleArr([shuffleWords[0], ...Randomizers.genRandomElements(words.filter(word => word.id !== words[0].id), INCORRECTS_ANSWERS_COUNT)]),
        gameSteps : words.length - 1,
        gameHistory: [],
        choosenWord: null,
        gameIsEnd: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        currentCombo: 0,
        maxCombo: 0
    }
}

export function audiocallReducer(state: IAudiocallState, action) {
  switch (action.type) {
    case "RESTART_GAME": {
      return {
        ...state, 
        ...action.value
      }
    };
    case "SEND_ANSWER":
      const {choosenWord, isCorrect, updatedInfo} = action.value;
      const currentCombo = isCorrect? state.currentCombo + 1 : 0;
      return {
        ...state,
        gameHistory: [          
          ...state.gameHistory,
          {
          index: state.currentStep,
          word: state.correctWord,
          isCorrect: isCorrect,
          }
        ],
        choosenWord,
        currentCombo: currentCombo,
        maxCombo: currentCombo > state.maxCombo? currentCombo: state.maxCombo ,
        correctAnswers: isCorrect? state.correctAnswers + 1 : state.correctAnswers,
        incorrectAnswers: !isCorrect? state.incorrectAnswers + 1 : state.incorrectAnswers,
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

export function createAudiocallState (words) {
  const [state, dispatch] = useReducer(
    audiocallReducer,
    words,
    initAudicallState
  );

  const {
    choosenWord,
    correctWord,
    gameHistory,
    gameIsEnd,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
    answerOptions,
  } = state;

  const answerAction = (value) => {
    dispatch({
      type: "SEND_ANSWER",
      value: value,
    });
  };

  const getNextStepAction = (value) => {
    dispatch({
      type: "GET_NEXT_STEP",
      value: value,
    });
  };

  const skipAnswerAction = (value) => {
    dispatch({
      type: "SKIP_ANSWER",
      value: value,
    });
  };

  const restartGame = () => {
    const shuffleWords = Randomizers.shuffleArr(words);
    dispatch({
      type: "RESTART_GAME",
      value: {
        words: shuffleWords,
        currentStep: 0,
        correctWord : shuffleWords[0],
        answerOptions : Randomizers.shuffleArr([shuffleWords[0], ...Randomizers.genRandomElements(words.filter(word => word.id !== words[0].id), INCORRECTS_ANSWERS_COUNT)]),
        gameSteps : words.length - 1,
        gameHistory: [],
        choosenWord: null,
        gameIsEnd: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        currentCombo: 0,
        maxCombo: 0
      },
    });
  };

  return {
    getNextStepAction,
    answerAction,
    skipAnswerAction,
    restartGame,
    choosenWord,
    correctWord,
    gameHistory,
    gameIsEnd,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
    answerOptions,
  };
}





