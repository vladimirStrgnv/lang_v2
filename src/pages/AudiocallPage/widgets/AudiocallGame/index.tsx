import {
  playWord,
  playCorrectSound,
  playIncorrectSound,
} from "../../../../shared/utils/services/audio";
import { STEP } from "./utils/consts";
import { useAppSelector } from "../../../../shared/stores/types";
import Api from "../../../../shared/api";
import { WordHelpers } from "../../../../shared/utils/services/wordHelpers";
import GameDisplay from "./components/GameDisplay";
import GameResults from "../../../../shared/components/GameResults";
import { UserHelpers } from "../../../../shared/utils/services/userHelpers";
import { createAudiocallState } from "./store";

const AudiocallGame = ({ words }) => {
  const {
    answerAction,
    getNextStepAction,
    skipAnswerAction,
    restartGame,
    choosenWord,
    correctWord,
    gameHistory,
    gameIsEnd,
    maxCombo,
    incorrectAnswers,
    correctAnswers,
    answerOptions,
  } = createAudiocallState(words);
  const auth = useAppSelector((store) => store.signIn.authData);

  async function sendAnswer(choosenWord, isCorrect) {
    answerAction({ choosenWord, isCorrect, updatedInfo: null });

    if (isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
    if (auth) {
      const api = new Api(auth);
      const isUserWord = correctWord.userWord;
      const updatedInfo = WordHelpers.getUpdatedStat(correctWord, isCorrect);
      isUserWord
        ? await api.updateUserWord(correctWord.id, updatedInfo)
        : await api.createUserWord(correctWord.id, updatedInfo);
      const wordStatus = WordHelpers.getWordStatus(updatedInfo, correctWord);
      if (wordStatus.isUpdated) {
        const userStat = await api.getStatistics();
        const updatedStats = UserHelpers.getUpdatedStats(
          userStat,
          wordStatus.status
        );
        await api.updateStatistics(updatedStats);
      }
    }
  }

  function getNextStep() {
    getNextStepAction(STEP);
  }

  function skipAnswer() {
    skipAnswerAction(false);
  }

  return (
    <>
      {gameIsEnd ? (
        <GameResults
          gameHistory={gameHistory}
          maxCombo={maxCombo}
          incorrectAnswers={incorrectAnswers}
          correctAnswers={correctAnswers}
          restartGame={restartGame}
        />
      ) : (
        <GameDisplay
          choosenWord={choosenWord}
          correctWord={correctWord}
          playWord={playWord}
          answerOptions={answerOptions}
          sendAnswer={sendAnswer}
          getNextStep={getNextStep}
          skipAnswer={skipAnswer}
        ></GameDisplay>
      )}
    </>
  );
};

export default AudiocallGame;
