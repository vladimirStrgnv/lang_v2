import styles from './index.module.scss';

const LevelBtn = ({setBookSection, section, isCurrentSection, title, amount, level}) => {
  return (
    <div className={isCurrentSection? `${styles.card} ${styles.card__active}` : `${styles.card}`}  onClick={() => {setBookSection(section)}}>
        <div className={styles.card__descrpt}>
            <h3>{title}</h3>
            <p>{amount}</p>
        </div >
        <div className={styles.card__level}>
            <h3>{level}</h3>
        </div>
        <div className={styles.card__circle}></div>
    </div>
  )
}

export default LevelBtn;