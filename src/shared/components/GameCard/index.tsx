import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const GameCard = ({link, imgLink, meaning, title, descrpt, words}) => {
  return (
    <Link to={link} state={{words:words}}>
        <article className={styles.gamecard}>
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
    </Link>
  );
};

export default GameCard;