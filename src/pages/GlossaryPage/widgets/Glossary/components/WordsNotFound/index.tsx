import styles from './index.module.scss';

const WordsNotFound = () => {
  return (
    <div className={styles['glossary__no-word-page']}>
        <p>Не найдено слов по вашему запросу</p>
    </div>
  )
}

export default WordsNotFound;