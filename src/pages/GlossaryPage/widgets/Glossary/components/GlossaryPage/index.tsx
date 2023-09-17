import styles from './index.module.scss';
import WordsList from '../WordsList';
import BookWordCard from '../../../../../../shared/components/BookWordCard';
import { GlossaryPageProps } from './consts';

const GlossaryPage: React.FC<GlossaryPageProps> = ({words,curentWordId,wordDispatch, curentWord,auth, btnsConfig }) => {
  return (
    <div className={styles["glossary__page"]}>
    <div className={styles["glossary__page-wrapper"]}>
      <h3 className={styles["glossary__page-title"]}>Слова</h3>
      <WordsList
        words={words}
        curentWordId={curentWordId}
        wordDispatch={wordDispatch}
      ></WordsList>
    </div>
    <div className={styles["glossary__card-wrapper"]}>
      <BookWordCard
        image={curentWord.image}
        word={curentWord.word}
        textMeaning={curentWord.textMeaning}
        wordTranslate={curentWord.wordTranslate}
        textMeaningTranslate={curentWord.textMeaningTranslate}
        textExample={curentWord.textExample}
        textExampleTranslate={curentWord.textExampleTranslate}
        isAuth={!!auth}
        transcription={curentWord.transcription}
        audio={curentWord.audio}
        btnsConfig={btnsConfig}
      ></BookWordCard>
    </div>
  </div>  )
}

export default GlossaryPage;