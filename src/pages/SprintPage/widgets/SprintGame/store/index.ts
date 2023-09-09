import { useReducer } from "react";
import { IWord } from "../../../../../shared/api/types";
import { Randomizers } from "../../../../../shared/utils/services/randomizers";

export interface ISprintState {
  currentStep: number;
  words: IWord[];
  questionWord: IWord;
  answerWord: IWord;
  isCorrectStatement: boolean;
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
  const answerWord = Randomizers.genRandomElements(shuffleWords, 1)[0];
  const questionWord =  shuffleWords[0];

  return {
    words: shuffleWords,
    questionWord,
    answerWord,
    gameSteps: words.length - 1,
    gameHistory: [],
    isCorrectStatement: answerWord.id === questionWord.id,
    currentStep: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentCombo: 0,
    maxCombo: 0,
    gameIsEnd: false,
  };
}

function reducer(state: ISprintState, action) {
  switch (action.type) {
    case "CHANGE_GAME_STATUS":
      return { ...state, gameIsEnd: action.value };
    case "REASTRT_GAME":
      return { ...state, ...action.value };
    case "SEND_ANSWER":
      const newStepValue = state.currentStep + 1;
      const isCorrect = action.value.isCorrect === state.isCorrectStatement;
      const currentCombo = isCorrect ? state.currentCombo + 1 : 0;
      const questionWord = state.words[newStepValue];
      const answerWord = Randomizers.genRandomElements(state.words, 1)[0];
      return {
        ...state,
        words: state.words.map((word) =>
          word.id === state.questionWord.id
            ? { ...word, userWord: action.value.updatedInfo }
            : word
        ),
        currentStep: newStepValue,
        isCorrectStatement: questionWord?.id === answerWord?.id,
        questionWord,
        gameHistory: [
          ...state.gameHistory,
          {
            index: state.currentStep,
            word: state.questionWord,
            isCorrect,
          },
        ],
        answerWord,
        currentCombo,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
        incorrectAnswers: !isCorrect
          ? state.incorrectAnswers + 1
          : state.incorrectAnswers,
        maxCombo: currentCombo > state.maxCombo ? currentCombo : state.maxCombo,
        gameIsEnd: newStepValue > state.gameSteps,
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
    isCorrectStatement,
    words
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

  const gameRestartDispatch = () => {
    const shuffleWords = Randomizers.shuffleArr(words);
    const answerWord = Randomizers.genRandomElements(shuffleWords, 1)[0];
    const questionWord =  shuffleWords[0];
    dispatch({
      type: "REASTRT_GAME",
      value: {
        words,
        questionWord,
        answerWord,
        gameSteps: words.length - 1,
        gameHistory: [],
        isCorrectStatement: answerWord.id === questionWord.id,
        currentStep: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        currentCombo: 0,
        maxCombo: 0,
        gameIsEnd: false,
      },
    });
  };

  return {
    gameStatusDispatch,
    answerDispatch,
    gameRestartDispatch,
    answerWord,
    questionWord,
    gameIsEnd,
    gameHistory,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
    isCorrectStatement,
    
  };
};

export default useCreateSprintStore;
