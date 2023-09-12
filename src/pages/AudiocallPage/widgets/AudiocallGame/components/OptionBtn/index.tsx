import styles from './index.module.scss';
import { OptionBtnProps } from './types';

const OptionBtn: React.FC<OptionBtnProps> = ({wordId, isChoosenWord, correctWordId, word, onClick, choosenWord}) => {
  return (
    <button
      className={
         (wordId === correctWordId && choosenWord != null)
          ? `${styles["game-display__answer-options-item"]} ${styles["game-display__answer-options-item--correct"]}`
          : isChoosenWord && wordId !== correctWordId
          ? `${styles["game-display__answer-options-item"]} ${styles["game-display__answer-options-item--incorrect"]}`
          : choosenWord != null && wordId !== correctWordId
          ? `${styles["game-display__answer-options-item"]} ${styles["game-display__answer-options-item--inactive"]}`
          : styles["game-display__answer-options-item"]
      }
      onClick={() => onClick()}
    >
      {word}
    </button>
  );
};

export default OptionBtn;