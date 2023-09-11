
import styles from './index.module.scss';
import SvgBottom from './assets/SvgBottom';
import btnsData from './utils/consts';
import useCreateStore from './store/index';
import { useEffect, useState } from 'react';
import Api from "../../../../shared/api";
import { Pagination } from "@mui/material";
import { useAppSelector } from "../../../../shared/stores/types";
import SectionLevelBtnList from './components/SectionLevelBtnList';
import BookPage from './components/BookPage';
import GameList from '../../../../shared/components/GameList';
import { UserHelpers } from '../../../../shared/utils/services/userHelpers';

const Book = () => {
  const {
    sectionDispatch,
    wordsDispatch,
    pageDispatch,
    wordDispatch,
    wordDifficultyDispatch,
    state,
  } = useCreateStore();
  const auth = useAppSelector((store) => store.signIn.authData);
  const { page, words, section, curentWord } = state;
  const [loadStatus, setLoadStatus] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const api = new Api(auth);
      const wordsRequest = auth
        ? await api.getAggregatedWords(section, page)
        : await api.getWords(section, page);
      wordsDispatch(wordsRequest.words);
      setLoadStatus(true);
    };
    fetch();
  }, [section, page]);

  const changepage = (e, page) => {
    pageDispatch(page - 1);
  };

  async function addWordStatus(id, status) {
    const wordStat = {
      difficulty: status,
      optional: {
        correctInRow: 0,
        incorrectInRow: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
      },
    };
    const api = new Api(auth);
    await api.createUserWord(id, wordStat);
    const userStat = await api.getStatistics();
    const updatedStat = UserHelpers.getUpdatedStats(userStat, status);
    await api.updateStatistics(updatedStat);
    wordDifficultyDispatch(id, status);
  }

  return (
    <section className={styles.book}>
      <SvgBottom />
      <div className={styles.book__wrapper}>
        <div className={styles.book__inner}>
          <nav>
            <h2 className={styles["book__level-title"]}>
              Уровни сложности слов
            </h2>
            <div className={styles["book__navbtns-wrapper"]}>
              <SectionLevelBtnList
                btnsData={btnsData}
                currentSection={section}
                sectionDispatch={sectionDispatch}
              ></SectionLevelBtnList>
            </div>
          </nav>
          {loadStatus && (
            <BookPage
              words={words}
              curentWordId={curentWord.id}
              wordDispatch={wordDispatch}
              curentWord={curentWord}
              auth={auth}
              btnsConfig={[
                {
                  text: "добавить в сложные",
                  onClick: addWordStatus.bind(null, curentWord.id, "difficult"),
                  isActive: !curentWord.userWord,
                },
                {
                  text: "добавить в изучаемые",
                  onClick: addWordStatus.bind(null, curentWord.id, "studied"),
                  isActive: !curentWord.userWord,
                },
              ]}
            ></BookPage>
          )}
          <div className={styles.book__pagination}>
            <Pagination
              count={30}
              page={page + 1}
              onChange={changepage}
              color="primary"
            />
          </div>
          <GameList
            wordsCounts={words.length}
            wordsParams={{ section, page, filter: "", wordCounts: 20 }}
          ></GameList>
        </div>
      </div>
    </section>
  );
};

export default Book;
