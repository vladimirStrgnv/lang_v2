import React from 'react';
import styles from './index.module.scss';

const Savannah = () => {
  return (
    <section className={styles.savannah}>
      <div className={`${styles.wrapper} ${styles.savannah__wrapper}`}>
        <div className={styles["savannah__start-screen"]}>
          <div className={styles.savannah__info}>
            <p className={styles.savannah__title}>Саванна</p>
            <p className={styles.savannah__description}>
              Тренировка Саванна развивает словарный запас, помогает не забыть
              выученные слова.
            </p>
          </div>
          <div className={styles["btns-container"]}>
            <h2>Выбери уровень</h2>
            <div className={styles["level-btns"]}>
              <div className={styles["level-btns__item"]}>A1</div>
              <div className={styles["level-btns__item"]}>A2</div>
              <div className={styles["level-btns__item"]}>B1</div>
              <div className={styles["level-btns__item"]}>B2</div>
              <div className={styles["level-btns__item"]}>C1</div>
              <div className={styles["level-btns__item"]}>C2</div>
            </div>
            <button className={styles['start-game-btn']}>Начать</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Savannah;