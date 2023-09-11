import styles from './index.module.scss';

const LevelBtn = ({setBookSection, section, isCurrentSection, title, amount, level}) => {
  return (
    <div className={isCurrentSection? `${styles.card} ${styles.card__active}` : `${styles.card}`}  onClick={() => {setBookSection(section)}}>
        <div className={styles.card__descrpt}>
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__amount}>{amount}</p>
        </div >
        <div className={styles['card__level-wrapper']}>
            <h4 className={styles['card__level-title']}>{level}</h4>
        </div>
        <div className={styles.card__circle}></div>
    </div>
  )
}

export default LevelBtn;