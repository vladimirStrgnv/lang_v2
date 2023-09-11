import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import PopUp from "../PopUp";
import { useState } from "react";
import ResultDetails from "./components/ResultDetails";
import { GameResultsProps } from "./types";
    
const GameResults: React.FC<GameResultsProps> = ({gameHistory, maxCombo, incorrectAnswers, correctAnswers, restartGame }) => {
  const navigate = useNavigate();
  const [detatilStatsIsActive, setActive] = useState(false);

  const showStats = () => {
    setActive(true);
  };

  const redirectToMain = () => {
    return navigate("/");
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
            Общая точность: {gameHistory.length?Math.ceil((correctAnswers / gameHistory.length)* 100):0}%
          </h4>
          <h4 className={styles["audiocall-results__statistic-title"]}>
            Максимальное комбо: {maxCombo}
          </h4>
          <div className={styles["audiocall-results__option-btns"]}>
            <button
              className={styles["audiocall-results__option-btns-item"]}
              onClick={() => restartGame()}
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

export default GameResults;
