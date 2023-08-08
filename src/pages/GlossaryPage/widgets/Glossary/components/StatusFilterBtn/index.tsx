import styles from './index.module.scss';

const StatusFilterBtn = ({
  isCurrentFilter,
  title,
  abbreviation,
  setGlossaryFilter,
}) => {
  return (
    <div
      className={
        isCurrentFilter
          ? `${styles["filter-btn"]} ${styles["filter-btn__active"]}`
          : `${styles["filter-btn"]}`
      }
      onClick={() => {
        setGlossaryFilter("");
      }}
    >
      <p className={styles["filter-btn__abbreviation"]}>{abbreviation}</p>
      <div className={styles["filter-btn__info"]}>
        <p className={styles["filter-btn__title"]}>{title}</p>
        <p className={styles["filter-btn__words-info"]}>Слов: {0}</p>
      </div>
      <div className={styles["filter-btn__circle"]}></div>
    </div>
  );
};

export default StatusFilterBtn;