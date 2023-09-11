import styles from './index.module.scss';
import { playWord } from '../../../../../shared/utils/services/audio';

const WordDetails = ({index, word, wordTranslate, transcription, audio, isCorrect}) => {
  return (
    <div className={styles["word-details"]}>
      <div className={`${styles["word-details__item"]} `}>{index}</div>
      <div className={`${styles["word-details__item"]} `}>{word}</div>
      <div className={`${styles["word-details__item"]} `}>{wordTranslate}</div>
      <div className={`${styles["word-details__item"]}`}>{transcription}</div>
      <div
        className={`${styles["word-details__item"]} ${styles["word-details__audio"]}`}
        onClick={() => {
          playWord(audio);
        }}
      ></div>
      <div
        className={
          isCorrect
            ? `${styles["word-details__item"]} ${styles["word-details__correct"]}`
            : `${styles["word-details__item"]} ${styles["word-details__incorrect"]}`
        }
      ></div>
    </div>
  );
}

export default WordDetails;