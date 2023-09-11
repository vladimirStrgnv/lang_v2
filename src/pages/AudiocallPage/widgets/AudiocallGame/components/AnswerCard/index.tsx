import styles from './index.module.scss';
import SoundBtn from '../../../../../../shared/components/SoundBtn';
import { BASE_SERVER_URL } from '../../../../../../shared/const';

const AnswerCard = ({image, word, onClick}) => {
  return (
    <div className={styles['game-display__card-asnwer']}>
      <div className={styles['game-display__card-asnwer-img-container']}>
        <img
          src={`${BASE_SERVER_URL}${image}`}
          className={styles['game-display__card-asnwer-img']}
          alt="answer_img"
        />
      </div>
      <div className={styles['game-display__card-asnwer-value-container']}>
        <h3 className={styles['game-display__card-asnwer-value-container-title']}>{word}</h3>
        <div className={styles['game-display__card-asnwer-sound-btn-container']}>
            <SoundBtn onClick={onClick}></SoundBtn>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
