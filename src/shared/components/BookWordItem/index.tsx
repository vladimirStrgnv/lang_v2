import styles from './index.module.scss';

const BookWordItem = ({word, id,  translate, difficulty}) => {
  return (
    <div 
      className={id == 1 ? `${styles['word__container']} ${styles.active}` : `${styles['word__container']}`}
    >
        <div>{word}</div>
        <div>{translate}</div>
        <div className={difficulty?`${styles.word__circle}  ${styles[difficulty]}`: `${styles.word__circle} `}></div>
    </div>  
    )
}

export default BookWordItem;