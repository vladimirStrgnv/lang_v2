import styles from "./index.module.scss";
import SvgBottom from "./assets/SvgBottom";
import { filterBtnsData, btnsData } from "./utils/consts";
import useCreateStore from "./store/index";
import Api from "../../../../shared/api";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../shared/stores/types";
import { Pagination } from "@mui/material";
import SectionLevelBtnList from "./components/SectionLevelBtnList";
import GlossaryPage from "./components/GlossaryPage";
import WordsNotFound from "./components/WordsNotFound";
import StatusFilterBtnList from "./components/StatusFilterBtnList";
import GameList from "../../../../shared/components/GameList";

const Glossary = () => {
  const {
    sectionDispatch,
    wordsDispatch,
    pageDispatch,
    wordDispatch,
    wordDeleteDispatch,
    filterDispatch,
    state,
  } = useCreateStore();
  const { page, words, section, curentWord, currentFilter, totalCount } = state;
  const auth = useAppSelector((store) => store.signIn.authData);
  const [loadStatus, setLoadStatus] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const api = new Api(auth);
      const wordsRequest = await api.getAggregatedWords(
        section,
        page,
        20,
        currentFilter
      );
      if (wordsRequest.words.length) {
        wordsDispatch(wordsRequest);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetch();
  }, [section, page, currentFilter]);

  const changepage = (e, page) => {
    pageDispatch(page - 1);
  };

  function deleteWord(id) {
    const api = new Api(auth);
    api.deleteUserWord(id);
    wordDeleteDispatch(id);
  }

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
              <SectionLevelBtnList
                btnsData={btnsData}
                currentSection={section}
                sectionDispatch={sectionDispatch}
              ></SectionLevelBtnList>
            </div>
          </nav>

          <div className={styles["glossary__status-filter-btns-container"]}>
            <StatusFilterBtnList
              filterBtnsData={filterBtnsData}
              currentFilter={currentFilter}
              filterDispatch={filterDispatch}
            ></StatusFilterBtnList>
          </div>
          {loadStatus && words.length ? (
            <>
              <GlossaryPage
                words={words}
                curentWordId={curentWord.id}
                wordDispatch={wordDispatch}
                curentWord={curentWord}
                auth={auth}
                btnsConfig={[
                  {
                    text: "удалить из раздела",
                    onClick: deleteWord.bind(null, curentWord.id),
                    isActive: true,
                  },
                ]}
              ></GlossaryPage>
              <div className={styles.glossary__pagination}>
                <Pagination
                  count={Math.ceil(totalCount / 20)}
                  page={page + 1}
                  onChange={changepage}
                  color="primary"
                />
              </div>
            </>
          ) : (
            <WordsNotFound />
          )}
          <GameList words={words}></GameList>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
