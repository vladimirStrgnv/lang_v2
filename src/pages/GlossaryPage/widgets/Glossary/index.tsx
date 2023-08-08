import styles from "./index.module.scss";
import SvgBottom from "./assets/SvgBottom";
import { btnsData, filterBtnsData } from "./utils/consts";
import SectionLevelBtn from "../../../../shared/components/SectionLevelBtn";
import useCreateStore from "./store/index";
import BookWordItem from "../../../../shared/components/BookWordItem";
import BookWordCard from "../../../../shared/components/BookWordCard";
import Api from "../../../../shared/api";
import StatusFilterBtn from "./components/StatusFilterBtn";
import { useEffect, useState } from 'react';
import { useAppSelector } from "../../../../shared/stores/types";
import { Pagination } from "@mui/material";

const Glossary = () => {
  const {
    sectionDispatch,
    wordsDispatch,
    pageDispatch,
    wordDispatch,
    wordDifficultyDispatch,
    state,
  } = useCreateStore();
  const { page, words, section, curentWord } = state;
  const auth = useAppSelector((store) => store.signIn.authData);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const api = new Api(auth);
      const wordsRequest = auth
        ? await api.getAggregatedWords(section, page)
        : await api.getWords(section, page);

      wordsDispatch(wordsRequest);
      setLoadStatus(true);
    };
    fetch();
  }, [section, page]);

  const changepage = (e, page) => {
    pageDispatch(page - 1);
  };

  const addWordStatus = (id, status) => {
    const api = new Api(auth);
    api.createUserWord(id, status);
    wordDifficultyDispatch(id, status);
  };

  return (
    <section className={styles.glossary}>
      <SvgBottom />
      <div className={styles.glossary__wrapper}>
        <div className={styles.glossary__inner}>
          <nav>
            <h2 className={styles["glossary__level-title"]}>
              Уровни сложности слов
            </h2>
            <div className={styles["glossary__navbtns-wrapper"]}>
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

          <div className={styles["glossary__status-filter-btns-container"]}>
          {filterBtnsData.map((btnData, index) => (
                <StatusFilterBtn
                  isCurrentFilter={false}
                  title={btnData.title}
                  abbreviation={btnData.abbreviation}
                  setGlossaryFilter={()=>{}}
                ></StatusFilterBtn>
              ))}
          </div>

          <div className={styles["glossary__page"]}>
            <div className={styles["glossary__page-wrapper"]}>
              <h3 className={styles["glossary__page-title"]}>Слова</h3>
              <ul className={styles["glossary__page-words-list"]}>
                {words.map((word) => (
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
                ))}
              </ul>
            </div>
            <div className={styles["glossary__card-wrapper"]}>
              {loadStatus && (
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
                ></BookWordCard>
              )}
            </div>
          </div>
          <div className={styles.glossary__pagination}>
            <Pagination
              count={30}
              page={page + 1}
              onChange={changepage}
              color="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
