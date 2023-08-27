import styles from './index.module.scss';
import WordDetails from '../WordDetails';

const ResultDetails = ({ results }) => {
  return (
    <div className={styles["audiocall-results__details"]}>
      <h3>Подробности</h3>
      <ul className={styles["audiocall-results__details-list"]}>
        {results.map((result, index) => {
          return (
            <WordDetails
              index={result.index + 1}
              word={result.word.word}
              wordTranslate={result.word.wordTranslate}
              transcription={result.word.transcription}
              audio={result.word.audio}
              isCorrect={result.isCorrect}
            ></WordDetails>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultDetails;