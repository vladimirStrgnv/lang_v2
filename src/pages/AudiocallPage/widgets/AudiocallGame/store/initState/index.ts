import { Randomizers } from "../../../../../../shared/utils/services/randomizers";
import { IWord } from "../../../../../../shared/api/types";
import { INCORRECTS_ANSWERS_COUNT } from "../../utils/consts";

export interface IAudiocallState {
    currentStep: number;
    words: IWord[];
    answerOptions: IWord[];
    correctWord: IWord;
    gameSteps:  number;
    gameHistory: boolean[];
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
