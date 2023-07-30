import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const GameCard = (props) => {
  return (
    <Link to={props.link}>
        <article className={styles.gamecard}>
        <img
            className={styles.gamecard__img}
            src={props.imgLink}
            alt="gamecard-img"
        ></img>
        <div className={styles.gamecard__text}>
            <div className={styles.gamecard__descrpt}>{props.meaning}</div>
            <h2>{props.title}</h2>
            <p>{props.descrpt}</p>
        </div>
        </article>
    </Link>
  );
};

export default GameCard;