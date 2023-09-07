import React, { useState, useEffect } from 'react'
import useCreateSprintStore from './store';
import GameDisplay from "./components/GameDisplay";
import GameResults from "../../../../shared/components/GameResults";

const SprintGame = ({ words }) => {
  const [seconds, setSeconds] = useState(1);
  const {
    answerWord,
    questionWord,
    gameIsEnd,
    gameHistory,
    maxCombo,
    correctAnswers,
    incorrectAnswers,
    gameStatusDispatch,
    answerDispatch,
  } = useCreateSprintStore(words);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 5) {
        gameStatusDispatch(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  function sendAnswer(isCorrect) {
    answerDispatch({ isCorrect });
  }

  return (
    <>
      {gameIsEnd ? (
        <GameResults
          gameHistory={gameHistory}
          maxCombo={maxCombo}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        ></GameResults>
      ) : (
        <GameDisplay
          seconds={seconds}
          answerWord={answerWord.wordTranslate}
          questionWord={questionWord.word}
          sendCorrectAnswer={sendAnswer.bind(null, true)}
          sendIncorrectAnswer={sendAnswer.bind(null, false)}
        ></GameDisplay>
      )}
    </>
  );
};

export default SprintGame;