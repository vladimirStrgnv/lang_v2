import { GameHistoryStep } from "../../../../pages/AudiocallPage/widgets/AudiocallGame/store";

export interface GameResultsProps {
    gameHistory: GameHistoryStep[],
    maxCombo: number,
    incorrectAnswers: number,
    correctAnswers: number,
    restartGame: ()=>void
}