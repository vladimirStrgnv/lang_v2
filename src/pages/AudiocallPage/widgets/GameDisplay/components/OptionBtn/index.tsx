import styles from './index.module.scss';

const OptionBtn = ({wordId, isAnswerSended, correctWordId, word, onClick}) => {
    console.log('render')
  return (
    <button
      className={
        isAnswerSended && wordId === correctWordId
          ? `${styles["game-display__answer-options-item"]} ${styles["game-display__answer-options-item--correct"]}`
          : isAnswerSended && wordId !== correctWordId
          ? `${styles["game-display__answer-options-item"]} ${styles["game-display__answer-options-item--incorrect"]}`
          : styles["game-display__answer-options-item"]
      }
      onClick={() => onClick()}
    >
      {word}
    </button>
  );
};

export default OptionBtn;