import useCreateSprintStore from './store';
import GameDisplay from "./components/GameDisplay";
import GameResults from "../../../../shared/components/GameResults";
import { playCorrectSound, playIncorrectSound } from '../../../../shared/utils/services/audio';
import { useAppSelector } from '../../../../shared/stores/types';
import Api from '../../../../shared/api';
import { WordHelpers } from '../../../../shared/utils/services/wordHelpers';
import { UserHelpers } from '../../../../shared/utils/services/userHelpers';

const SprintGame = ({ words }) => {
  const {
    answerWord,
    questionWord,
    gameIsEnd,
    gameHistory,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
    isCorrectStatement,
    gameStatusDispatch,
    answerDispatch,
    gameRestartDispatch
  } = useCreateSprintStore(words);
  const auth = useAppSelector((store) => store.signIn.authData);


  function endGame () {
    gameStatusDispatch(true);
  }

  async function sendAnswer(isCorrect, isCorrectStatement) {

    if (isCorrectStatement === isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }

    if (auth) {
      const api = new Api(auth);
      const isUserWord = questionWord.userWord;
      const updatedInfo = WordHelpers.getUpdatedStat(questionWord, isCorrectStatement === isCorrect);
      answerDispatch({ isCorrect, updatedInfo});
      isUserWord
        ? await api.updateUserWord(questionWord.id, updatedInfo)
        : await api.createUserWord(questionWord.id, updatedInfo);
      const {status, isUpdated} = WordHelpers.getWordStatus(updatedInfo, questionWord);
      if (isUpdated) {
        const userStat = await api.getStatistics();
        const updatedStats = UserHelpers.getUpdatedStats(userStat,status); 
        await api.updateStatistics(updatedStats);
      }
    } else {
      answerDispatch({ isCorrect, updatedInfo: null});
    }

  }

  return (
    <>
      {gameIsEnd ? (
        <GameResults
          gameHistory={gameHistory}
          maxCombo={maxCombo}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          restartGame={gameRestartDispatch}
        ></GameResults>
      ) : (
        <GameDisplay
          endGame={endGame}
          answerWord={answerWord.wordTranslate}
          questionWord={questionWord.word}
          sendCorrectAnswer={sendAnswer.bind(null, true, isCorrectStatement)}
          sendIncorrectAnswer={sendAnswer.bind(null, false, isCorrectStatement)}
        ></GameDisplay>
      )}
    </>
  );
};

export default SprintGame;