import styles from './index.module.scss';
import GameInfo from '../../../../shared/components/GameInfo';
import { audiocallDescription, audiocallTitle, startScreensSectionBtns } from './utils/consts';
import { useState } from 'react';
import { Randomizers } from "../../../../shared/utils/services/randomizers";
import { useNavigate } from 'react-router-dom';
import Api from '../../../../shared/api';
  
const StartPage = () => {
  const [{section, page}, setWordsOptions] = useState({section: null, page: null});
  const navigate = useNavigate();
  const setSection = (sectionNum) => {
    setWordsOptions({page: Randomizers.getRandomInt(0, 20), section: sectionNum})
  };

  const redirectToGameDisplay = async () => {
    const api = new Api({});
    const {words} = await api.getWords(section, page);
    return navigate("play",{state:{words}});
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
        onClick={()=> redirectToGameDisplay()}
        className={
          section !== null
            ? `${styles["audiocall__start-game-btn"]} ${styles["audiocall__start-game-btn--active"]}`
            : styles["audiocall__start-game-btn"] 
        }
      >
        Начать
      </button>
    </div>
  </div>  )
}

export const Component = StartPage;
