import styles from './index.module.scss';

const BookWordItem = ({word, id,  translate, difficulty, isChoosen, onClick}) => {
  return (
    <button
      className={
        isChoosen
          ? `${styles["word__container"]} ${styles.active}`
          : `${styles["word__container"]}`
      }
      onClick={() => onClick(id)}
    >
      <div>{word}</div>
      <div>{translate}</div>
      <div
        className={
          difficulty
            ? `${styles.word__circle}  ${styles[difficulty]}`
            : `${styles.word__circle} `
        }
      ></div>
    </button>
  );
}

export default BookWordItem;