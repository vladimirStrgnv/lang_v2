import styles from './index.module.scss';
import GameInfo from '../../../../shared/components/GameInfo';
import { audiocallDescription, audiocallTitle, startScreensSectionBtns } from './utils/consts';
import { useState } from 'react';
import { Randomizers } from "../../../../shared/utils/services/randomizers";
import Api from '../../../../shared/api';
  
const StartPage = ({ setStateWords, auth, wordsParams }) => {
  const [{ section, page, wordCounts,filter }, setWordsOptions] = useState({
    section: wordsParams?wordsParams.section: null,
    page: wordsParams?wordsParams.page: null,
    wordCounts: wordsParams?wordsParams.wordCounts: null,
    filter: wordsParams?wordsParams.filter: null
  });

  const setSection = (sectionNum) => {
    setWordsOptions({
      page: Randomizers.getRandomInt(0, 20),
      section: sectionNum,
      wordCounts: null,
      filter: null
    });
  };

  const startGame = async () => {
    const api = new Api(auth);
    const { words } = auth
      ? await api.getAggregatedWords(section, page, wordCounts, filter)
      : await api.getWords(section, page);
    setStateWords(words);
  };

  return (
    <div className={styles["audiocall__start-screen"]}>
      <GameInfo
        title={audiocallTitle}
        description={audiocallDescription}
      ></GameInfo>
      <div className={styles["audiocall__btns-container"]}>
        <h2>Выбери уровень</h2>
        <div className={styles["audiocall__level-btns"]}>
          {startScreensSectionBtns.map((btn) => (
            <button
              className={
                btn.sectionNum === section
                  ? `${styles["audiocall__level-btns__item"]} ${styles["audiocall__level-btns__item--active"]}`
                  : styles["audiocall__level-btns__item"]
              }
              key={btn.title}
              onClick={() => setSection(btn.sectionNum)}
            >
              {btn.title}
            </button>
          ))}
        </div>
        <button
          onClick={() => startGame()}
          className={
            section !== null
              ? `${styles["audiocall__start-game-btn"]} ${styles["audiocall__start-game-btn--active"]}`
              : styles["audiocall__start-game-btn"]
          }
        >
          Начать
        </button>
      </div>
    </div>
  );
};

export default StartPage;
