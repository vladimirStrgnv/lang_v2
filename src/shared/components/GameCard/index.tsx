import styles from "./index.module.scss";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import PopUp from "../PopUp";

const GameCard = ({ link, imgLink, meaning, title, descrpt, words }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const redirectToGamePage = () => {
    if (words.length > 4) {
      navigate(link, { state: { words: words } });
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <PopUp
        isOpen={active}
        setActive={setActive}
        children={'Минимальное количество слов для запуска игры: 5 слов'}
      ></PopUp>
      <article className={styles.gamecard} onClick={() => redirectToGamePage()}>
        <img
          className={styles.gamecard__img}
          src={imgLink}
          alt="gamecard-img"
        ></img>
        <div className={styles.gamecard__text}>
          <div className={styles.gamecard__meaning}>{meaning}</div>
          <h2 className={styles.gamecard__title}>{title}</h2>
          <p className={styles.gamecard__descrpt}>{descrpt}</p>
        </div>
      </article>
    </>
  );
};

export default GameCard;