import styles from './index.module.scss';

const StatusFilterBtn = ({
  isCurrentFilter,
  title,
  abbreviation,
  setGlossaryFilter,
  filter
}) => {
  return (
    <div
      className={
        isCurrentFilter
          ? `${styles["filter-btn"]} ${styles["filter-btn__active"]}`
          : `${styles["filter-btn"]}`
      }
      onClick={() => {
        setGlossaryFilter(filter);
      }}
    >
      <p className={styles["filter-btn__abbreviation"]}>{abbreviation}</p>
      <div className={styles["filter-btn__info"]}>
        <p className={styles["filter-btn__title"]}>{title}</p>
      </div>
      <div className={styles["filter-btn__circle"]}></div>
    </div>
  );
};

export default StatusFilterBtn;