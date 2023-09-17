import styles from "./index.module.scss";
import { BookWordCardProps } from "./types";
import { BASE_SERVER_URL } from "../../const";
import { motion } from 'framer-motion';

const animationOptions = { 
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    }
  }
}

function createMarkup(text) {
  return { __html: text };
}

const BookWordCard: React.FC<BookWordCardProps> = ({
  image,
  word,
  wordTranslate,
  transcription,
  textMeaning,
  textMeaningTranslate,
  textExample,
  textExampleTranslate,
  audio,
  isAuth,
  btnsConfig
}) => {
  return (
    <motion.article 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    key={word}
    className={styles.wordcard}>
      <div className={styles.wordcard__container}>
        <img
          src={`${BASE_SERVER_URL}${image}`}
          className={styles["wordcard__img"]}
          alt="advantages_img"
        />
        <div className={styles.wordcard__info}>
          <h2 className={styles.wordcard__word}>{word}</h2>
          <p>{wordTranslate}</p>
          <div className={styles["wordcard__transcription-container"]}>
            <p>{transcription}</p>
            <img
              src={require("./assets/volume.png")}
              alt="volume_icon"
              className={styles.wordcard__volume}
              onClick={() => {
                new Audio(`${BASE_SERVER_URL}${audio}`).play();
              }}
            />
          </div>
          <h3 className={styles.wordcard__meaning}>Значение</h3>
          <p dangerouslySetInnerHTML={createMarkup(textMeaning)}></p>
          <p dangerouslySetInnerHTML={createMarkup(textMeaningTranslate)}></p>
          <h3>Пример</h3>
          <p dangerouslySetInnerHTML={createMarkup(textExample)}></p>
          <p dangerouslySetInnerHTML={createMarkup(textExampleTranslate)}></p>
          {isAuth && (
            <div className={styles["wordcard__btns-container"]}>
              
              {btnsConfig.map((btnConfig, index) => (
                <button
                  key={index}
                  className={
                    btnConfig.isActive
                      ? styles["wordcard__btn"]
                      : `${styles["wordcard__btn--inactive"]} ${styles["wordcard__btn"]}`
                  }
                  onClick={() => {
                    btnConfig.onClick()
                  }}
                >
                  {btnConfig.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default BookWordCard;
