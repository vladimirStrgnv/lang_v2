import styles from './index.module.scss';

const GameInfo = ({ title, description }) => {
  return (
    <div className={styles.game__info}>
      <p className={styles.game__title}>{title}</p>
      <p className={styles.game__description}>{description}</p>
    </div>
  );
};

export default GameInfo;
