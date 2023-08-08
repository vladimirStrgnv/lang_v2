
import styles from './index.module.scss';
import SvgBottom from './assets/SvgBottom';
import SectionLevelBtn from '../../../../shared/components/SectionLevelBtn';
import btnsData from './utils/consts';
import useCreateStore from './store/index';
import { useEffect, useState } from 'react';
import Api from '../../../../shared/api';
import BookWordItem from '../../../../shared/components/BookWordItem';
import BookWordCard from '../../../../shared/components/BookWordCard';
import { Pagination } from '@mui/material';
import { useAppSelector } from '../../../../shared/stores/types';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from '../../../../shared/components/ErrorFallBack';

const Book = () => {
  const {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordDifficultyDispatch, state} = useCreateStore();
  const auth = useAppSelector((store) => store.signIn.authData);
  const { page, words, section, curentWord } = state;
  const [loadStatus, setLoadStatus ] = useState(false);
  useEffect(()=>{
    const fetch = async () => {
      const api  = new Api(auth);
      const wordsRequest = auth?await api.getAggregatedWords(section, page): await api.getWords(section, page);
      console.log(wordsRequest)

      wordsDispatch(wordsRequest);  
      setLoadStatus(true)
    };
    fetch();
  }, [section, page]);

  const changepage = (e, page) => {
    pageDispatch(page-1);
  }

  const addWordStatus = (id, status) => {
    const api  = new Api(auth);
    api.createUserWord(id, status);
    wordDifficultyDispatch(id,status);
  }

  return (
    <section className={styles.book}>
      <SvgBottom />
      <div className={styles.book__wrapper}>
        <div className={styles.book__inner}>
          <nav>
            <h2 className={styles['book__level-title']}>Уровни сложности слов</h2>
            <div className={styles['book__navbtns-wrapper']}>
            {btnsData.map((btnData, index) => (
            <SectionLevelBtn
              key={index}
              setBookSection={sectionDispatch}
              section={btnData.section}
              isCurrentSection={btnData.section === section}
              title={btnData.title}
              amount={btnData.amount}
              level={btnData.level}
            ></SectionLevelBtn>
          ))}
            </div>
          </nav>
          <div className={styles['book__page']}>
            <ErrorBoundary
             FallbackComponent={Fallback}
             >
              <div className={styles['book__page-wrapper']}>
                <h3 className={styles['book__page-title']}>Слова</h3>
                <ul className={styles['book__page-words-list']}>
                  {words.map(word => 
                      <li key={word.id}>
                        <BookWordItem
                          id={word.id}
                          word={word.word}
                          translate={word.wordTranslate}
                          difficulty={word.userWord?.difficulty}
                          isChoosen={curentWord.id === word.id}
                          onClick={wordDispatch}
                        ></BookWordItem>
                      </li>
                  )}
                </ul>
              </div>
              <div className={styles['book__card-wrapper']}>
                { loadStatus && 
                <BookWordCard 
                  id={curentWord.id}
                  image={curentWord.image}
                  word={curentWord.word}
                  textMeaning={curentWord.textMeaning}
                  wordTranslate={curentWord.wordTranslate}
                  textMeaningTranslate={curentWord.textMeaningTranslate}
                  userWord={curentWord.userWord}
                  textExample={curentWord.textExample}
                  textExampleTranslate={curentWord.textExampleTranslate}
                  isAuth={auth}
                  transcription={curentWord.transcription}
                  audio={curentWord.audio}
                  addWordStatus={addWordStatus}
                ></BookWordCard>} 
              </div>
            </ErrorBoundary>
          </div>
          <div className={styles.book__pagination}>
            <Pagination count={30} page={page+1} onChange={changepage} color="primary"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Book;
