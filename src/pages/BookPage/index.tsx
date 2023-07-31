
import styles from './index.module.scss';
import SvgBottom from './assets/SvgBottom';
import SectionLevelBtn from '../../shared/components/SectionLevelBtn';
import btnsData from './utils/consts';
import useCreateStore from './store/index';
import { useEffect } from 'react';
import api from '../../shared/api';
import BookWordItem from '../../shared/components/BookWordItem';
import Pagination from '../../shared/components/Pagination';

const BookPage = () => {
  const {sectionDispatch, wordsDispatch, pageDispatch, wordDispatch, wordIdDispatch, wordDataDispatch, state} = useCreateStore();
  const { page, words, section} = state;

  useEffect(()=>{
    const fetch = async () => {
      const wordsRequest = await api.getWords(section, page-1);
      wordsDispatch(wordsRequest);  
    };
    fetch();
  }, [section, page]);

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
            <h3 className={styles['book__page-title']}>Слова</h3>
            <ul className={styles['book__page-words-list']}>
              {words.map(word => 
                  <li key={word.id}>
                    <BookWordItem
                      id={word.id}
                      word={word.word}
                      translate={word.wordTranslate}
                      difficulty={word.difficulty}
                    ></BookWordItem>
                  </li>
              )}
            </ul>
            <Pagination 
              startPage={1}
              currentPage={page} 
              pagesCount={30} 
              setCurrentPage={pageDispatch}
            ></Pagination>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Component = BookPage;