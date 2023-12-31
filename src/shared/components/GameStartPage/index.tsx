import styles from './index.module.scss';
import GameInfo from '../GameInfo';
import { useState } from 'react';
import { Randomizers } from '../../utils/services/randomizers'; 
import Api from '../../api';
import PopUp from '../PopUp';
import { GameStartPageProps } from './types';
  
const GameStartPage: React.FC<GameStartPageProps> = ({ setStateWords, auth, wordsParams, description, title, startScreensSectionBtns }) => {

  const [popupIsActive, setPopupActive] = useState(false);
  const [{ section, page, wordCounts,filter }, setWordsOptions] = useState({
    section: wordsParams?wordsParams.section: null,
    page: wordsParams?wordsParams.page: null,
    wordCounts: wordsParams?wordsParams.wordCounts: 20,
    filter: wordsParams?wordsParams.filter: ''
  });

  const setSection = (sectionNum) => {
    setWordsOptions({
      page: Randomizers.getRandomInt(0, 20),
      section: sectionNum,
      wordCounts,
      filter
    });
  };

  const closePopup = () => {
    setPopupActive(false);
  };

  const startGame = async () => {
    const api = new Api(auth);
    const { words } = auth
      ? await api.getAggregatedWords(section, page, wordCounts, filter)
      : await api.getWords(section, page);
    if (words.length > 4) {
      setStateWords(words);
    } else {
      setPopupActive(true);
    }
  };

  return (
    <>
      <PopUp isOpen={popupIsActive} setActive={closePopup} children={'Необходимо больше 4х слов для старта игры'}></PopUp>
      <div className={styles["page__start-screen"]}>
        <GameInfo
          title={title}
          description={description}
        ></GameInfo>
        <div className={styles["page__btns-container"]}>
          <h2>Выбери уровень</h2>
          <div className={styles["page__level-btns"]}>
            {startScreensSectionBtns.map((btn) => (
              <button
                className={
                  btn.sectionNum === section
                    ? `${styles["page__level-btns__item"]} ${styles["page__level-btns__item--active"]}`
                    : styles["page__level-btns__item"]
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
                ? `${styles["page__start-game-btn"]} ${styles["page__start-game-btn--active"]}`
                : styles["page__start-game-btn"]
            }
          >
            Начать
          </button>
        </div>
      </div>
    </>
  );
};

export default GameStartPage;
