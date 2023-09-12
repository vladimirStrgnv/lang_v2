import { IWord } from "../../../../../../../shared/api/types"

export interface GameDisplayProps {
    choosenWord: IWord,
    correctWord: IWord,
    playWord: (audio: string) =>void,
    answerOptions: IWord[],
    sendAnswer: (word, isCorrect) => void,
    getNextStep: ()=> void,
    skipAnswer: ()=> void
}