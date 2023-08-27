import styles from './index.module.scss';
import WordsList from '../WordsList';
import BookWordCard from '../../../../../../shared/components/BookWordCard';

const BookPage = ({words, curentWordId, wordDispatch, curentWord, auth, btnsConfig}) => {
  return (
    <div className={styles["book__page"]}>
      <div className={styles["book__page-wrapper"]}>
        <h3 className={styles["book__page-title"]}>Слова</h3>
        <WordsList
          words={words}
          curentWordId={curentWordId}
          wordDispatch={wordDispatch}
        ></WordsList>
      </div>
      <div className={styles["book__card-wrapper"]}>
        <BookWordCard
          id={curentWord.id}
          image={curentWord.image}
          word={curentWord.word}
          textMeaning={curentWord.textMeaning}
          wordTranslate={curentWord.wordTranslate}
          textMeaningTranslate={curentWord.textMeaningTranslate}
          textExample={curentWord.textExample}
          textExampleTranslate={curentWord.textExampleTranslate}
          isAuth={auth}
          transcription={curentWord.transcription}
          audio={curentWord.audio}
          btnsConfig={btnsConfig}
        ></BookWordCard>
      </div>
    </div>
  );
}

export default BookPage;