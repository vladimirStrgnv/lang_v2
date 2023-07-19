import React from 'react';
import styles from './style.module.scss';

const Greeting = () => {
  return (
    <section className={styles.greeting}>
        <div className={`${styles.greeting__wrapper} `}>
          <div className={`${styles.greeting__inner} `}>
            <div className={styles.greeting__description}>
                <h1 className={styles.greeting__title}>
                  Изучай английский c <br/>Lang.
                </h1>
                <p className={styles.greeting__text}>
                  Приложение для эффективного изучения иностранных слов в игровой форме. Всегда под рукой. На любом устройстве.
                </p>
            </div>
            <img className={styles.greeting__img} src={require('../../assets/greeting.png')} alt="greeting-img" />
          </div>
        </div>
    </section>
  )
}

export default Greeting