import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PopUp from "../../../../shared/components/PopUp";
import { useState } from "react";
import ResultDetails from "./components/ResultDetails";
    
const Results = () => {
  const navigate = useNavigate();
  const [detatilStatsIsActive, setActive] = useState(false);
  const location = useLocation();

  const {gameHistory, combo, incorrectAnswers, correctAnswers, words} = location.state.gameResults;
  
  const showStats = () => {
    setActive(true);
  };

  const redirectToMain = () => {
    return navigate("/");
  };

  const repeateGame = () => {
    return navigate("/audiocall/play", {
      state: { words: words },
    });
  };

  return (
    <div className={styles["audiocall-results"]}>
      <PopUp
        children={<ResultDetails results={gameHistory}></ResultDetails>}
        isOpen={detatilStatsIsActive}
        setActive={setActive}
      ></PopUp>
      <div className={styles["audiocall-results__wrapper"]}>
        <div className={styles["audiocall-results__inner"]}>
          <h3 className={styles["audiocall-results__title"]}>Ваш результат</h3>
          <h4 className={styles["audiocall-results__statistic-title"]}>
            Правильных ответов: {correctAnswers}
          </h4>
          <h4 className={styles["audiocall-results__statistic-title"]}>
            Неправильных ответов: {incorrectAnswers}
          </h4>
          <h4 className={styles["audiocall-results__statistic-title"]}>
            Общая точность: {Math.ceil((correctAnswers / gameHistory.length)* 100)}%
          </h4>
          <h4 className={styles["audiocall-results__statistic-title"]}>
            Максимальное комбо: {combo}
          </h4>
          <div className={styles["audiocall-results__option-btns"]}>
            <button
              className={styles["audiocall-results__option-btns-item"]}
              onClick={() => repeateGame()}
            >
              Потворить
            </button>
            <button
              className={styles["audiocall-results__option-btns-item"]}
              onClick={() => showStats()}
            >
              Подробнее
            </button>
            <button
              className={styles["audiocall-results__option-btns-item"]}
              onClick={() => redirectToMain()}
            >
              Главное меню
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Component = Results;
