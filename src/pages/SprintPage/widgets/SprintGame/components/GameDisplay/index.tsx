import styles from './index.module.scss';

const GameDisplay = ({seconds, answerWord, questionWord, sendCorrectAnswer, sendIncorrectAnswer}) => {
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