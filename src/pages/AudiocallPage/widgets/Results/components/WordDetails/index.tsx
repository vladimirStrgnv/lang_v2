import styles from './index.module.scss';
import SoundBtn from '../../../../../../shared/components/SoundBtn';

const WordDetails = () => {
  return <div className={styles["word-details"]}>
    <div className={`${styles["word-details__item"]}`}>1</div>
    <div className={`${styles["word-details__item"]}`}>Жопа</div>
    <div className={`${styles["word-details__item"]}`}>Jopa</div>
    <div className={`${styles["word-details__item"]}`}>ddddd</div>
    <div className={`${styles["word-details__item"]}`}><SoundBtn onClick={()=> {1}} /></div>
    <div className={`${styles["word-details__item"]}`}>result</div>

  </div>;
}

export default WordDetails;