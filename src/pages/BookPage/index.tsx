
import styles from './index.module.scss';
import SvgBottom from './assets/SvgBottom';
import SectionLevelBtn from '../../shared/components/SectionLevelBtn';
import btnsData from './utils/consts';
import useCreateStore from './store/index';
import { useEffect, useState } from 'react';
import api from '../../shared/api';
import BookWordItem from '../../shared/components/BookWordItem';
import BookWordCard from '../../shared/components/BookWordCard';
import { Pagination } from '@mui/material';
import { useAppSelector } from '../../shared/stores/types';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from '../../shared/components/ErrorFallBack';

const BookPage = () => {
  const {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordDataDispatch, state} = useCreateStore();
  const isAuth = useAppSelector((store) => store.signIn.authData);
  const { page, words, section, curentWord } = state;
  const [loadStatus, setLoadStatus ] = useState(false);
  useEffect(()=>{
    const fetch = async () => {
      const wordsRequest = await api.getWords(section, page-1);
      console.log(wordsRequest);
      wordsDispatch(wordsRequest);  
      setLoadStatus(true)
    };
    fetch();
  }, [section, page]);

  const changepage = (e, page) => {
    pageDispatch(page);
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
                          difficulty={word.difficulty}
                          isChoosen={curentWord.id === word.id}
                          onClick={wordDispatch}
                        ></BookWordItem>
                      </li>
                  )}
                </ul>
              </div>
              <div className={styles['book__card-wrapper']}>
                { loadStatus && <BookWordCard 
                  wordData={curentWord}
                ></BookWordCard>} 
              </div>
            </ErrorBoundary>
          </div>
          <div className={styles.book__pagination}>
            <Pagination count={30} page={page} onChange={changepage} color="primary"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Component = BookPage;