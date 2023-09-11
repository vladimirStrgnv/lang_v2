import styles from './index.module.scss';
import React, { useState, useEffect } from 'react'

const GameDisplay = ({endGame, answerWord, questionWord, sendCorrectAnswer, sendIncorrectAnswer}) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds === 0) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className={styles["sprint-display__inner"]}>
      <div className={styles["sprint-display__time"]}>
        <div className={styles["sprint-display__clock"]}></div>
        <div className={styles["sprint-display__seconds"]}> {seconds}</div>
      </div>

      <div className={styles["sprint-display__question"]}>
        <span className={styles["sprint-display__question-word"]}>{answerWord}</span>
        <span className={styles["sprint-display__question-is"]}>это</span>
        <span className={styles["sprint-display__question-word"]}>
          {questionWord}
        </span>
        <span className={styles["sprint-display__question-mark"]}>?</span>
      </div>

      <div className={styles["sprint-display__answer-btns-container"]}>
        <button className={styles["sprint-display__true-answer-btn"]} onClick={() => sendCorrectAnswer()}>ВЕРНО</button>
        <button className={styles["sprint-display__false-answer-btn"]} onClick={() => sendIncorrectAnswer()}>НЕВЕРНО</button>
      </div>
    </div>  )
}

export default GameDisplay;