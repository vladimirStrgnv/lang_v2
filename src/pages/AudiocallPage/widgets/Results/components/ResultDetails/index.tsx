import styles from './index.module.scss';
import WordDetails from '../WordDetails';

const ResultDetails = () => {
  return (
    <div className={styles['audiocall-results__details']}>
        <h3>Подробности</h3>
        <ul className={styles['audiocall-results__details-list']}>
            <WordDetails></WordDetails>
            <WordDetails></WordDetails>

        </ul>
    </div>
  )
}

export default ResultDetails;