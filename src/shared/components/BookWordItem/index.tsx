import styles from './index.module.scss';
import { BookWordItemProps } from './types'; 

const BookWordItem: React.FC<BookWordItemProps> = ({word, id,  translate, difficulty, isChoosen, onClick}) => {
  return (
    <button
      className={
        isChoosen
          ? `${styles["word__container"]} ${styles[`word__circle--active`]}`
          : `${styles["word__container"]}`
      }
      onClick={() => onClick(id)}
    >
      <div>{word}</div>
      <div>{translate}</div>
      <div
        className={
          difficulty
            ? `${styles.word__circle}  ${styles[`word__circle--${difficulty}`]}`
            : `${styles.word__circle} `
        }
      ></div>
    </button>
  );
}

export default BookWordItem;