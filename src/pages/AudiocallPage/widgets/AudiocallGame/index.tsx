import { useReducer } from "react";
import {
  audiocallReducer,
  answerAction,
  getNextStepAction,
  skipAnswerAction,
} from "./store/reducer";
import { initAudicallState } from "./store/initState";
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

const AudiocallGame = ({ words }) => {
  const [state, dispatch] = useReducer(
    audiocallReducer,
    words,
    initAudicallState
  );
  const auth = useAppSelector((store) => store.signIn.authData);
  const {
    choosenWord,
    answerOptions,
    correctWord,
    gameIsEnd,
    gameHistory,
    correctAnswers,
    maxCombo,
    incorrectAnswers,
  } = state;
  async function sendAnswer(choosenWord, isCorrect) {
    if (isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
    if (auth) {
      const api = new Api(auth);
      const isUserWord = correctWord.userWord;
      const updatedInfo = WordHelpers.getUpdatedStat(correctWord, isCorrect);
      console.log(updatedInfo)
      dispatch(answerAction({ choosenWord, isCorrect, updatedInfo }));
      isUserWord
        ? await api.updateUserWord(correctWord.id, updatedInfo)
        : await api.createUserWord(correctWord.id, updatedInfo);
      const wordStatus = WordHelpers.getWordStatus(updatedInfo, correctWord);
      if (wordStatus.isUpdated) {
        const userStat = await api.getStatistics();
        const updatedStats = UserHelpers.getUpdatedStats(userStat,wordStatus.status); 
        await api.updateStatistics(updatedStats);
      }
    } else {
      dispatch(answerAction({ choosenWord, isCorrect, updatedInfo: null }));
    }
  }

  function getNextStep() {
    dispatch(getNextStepAction(STEP));
  }

  function skipAnswer() {
    dispatch(skipAnswerAction(false));
  }

  return (
    <>
      {gameIsEnd ? (
        <GameResults
          gameHistory={gameHistory}
          maxCombo={maxCombo}
          incorrectAnswers={incorrectAnswers}
          correctAnswers={correctAnswers}
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
