import styles from './index.module.scss';
import GameCard from '../GameCard';

const GameList = ({words}) => {
  return (
    <div className={styles["games-section-wrapper"]}>
      <h2 className={styles["games-section-wrapper__title"]}>Игры</h2>
      <h3 className={styles["games-section-wrapper__subtitle"]}>Закрепи новые слова при помощи игр.</h3>
      <div className={styles["images-wrapper"]}>
        <GameCard
          words={words}
          link={"/games/savannah"}
          meaning={"Угадывания на скорость"}
          title={"Спринт"}
          descrpt={"Угадай как можно больше слов за 30 секунд"}
          imgLink={
            "https://res.cloudinary.com/travel-app/image/upload/v1617587319/rslang/33.png"
          }
        ></GameCard>
        <GameCard
          words={words}
          link={"/audiocall/play"}
          meaning={"Аудирование"}
          title={"Аудиовызов"}
          descrpt={"Попробуй понять, какое слово было произнесено."}
          imgLink={
            "https://res.cloudinary.com/travel-app/image/upload/v1617587319/rslang/44.png"
          }
        ></GameCard>
      </div>
    </div>
  );
};

export default GameList;