import { IWord } from "../../../../../../../shared/api/types"

export interface SprintGameDisplayProps {
    endGame: boolean, 
    answerWord: IWord, 
    questionWord: IWord, 
    sendCorrectAnswer: (word)=> void, 
    sendIncorrectAnswer: (word)=> void
}