import styles from './index.module.scss';

const WordCardBtn = ({ btnIsActive, onClick }) => {
  return (
    <button
      className={
        btnIsActive
          ? styles["wordcard__btn"]
          : `${styles.inactive} ${styles["wordcard__btn"]}`
      }
      onClick={() => {
      }}
    >
      Отметить как сложное
    </button>
  );
};

export default WordCardBtn;