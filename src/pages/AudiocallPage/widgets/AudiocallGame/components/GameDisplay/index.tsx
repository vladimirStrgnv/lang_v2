import styles from './index.module.scss';
import AnswerCard from '../AnswerCard';
import SoundBtn from '../../../../../../shared/components/SoundBtn';
import OptionBtn from '../OptionBtn';

const GameDisplay = ({choosenWord, correctWord, playWord, answerOptions, sendAnswer, getNextStep, skipAnswer}) => {
  return (
    <div className={styles["game-display"]}>
      <div className={styles["game-display__wrapper"]}>
        <div className={styles["game-display__inner"]}>
          {choosenWord ? (
            <AnswerCard
              image={correctWord.image}
              word={correctWord.word}
              onClick={playWord.bind(null, `${correctWord.audio}`)}
            ></AnswerCard>
          ) : (
            <div className={styles["game-display__play-word-btn"]}>
              <SoundBtn
                onClick={playWord.bind(null, `${correctWord.audio}`)}
              ></SoundBtn>
            </div>
          )}
          <ul className={styles["game-display__answer-options"]}>
            {answerOptions.map((word) => {
              return (
                <li key={word.id}>
                  <OptionBtn
                    wordId={word.id}
                    isChoosenWord={choosenWord?.id === word.id}
                    choosenWord={choosenWord}
                    correctWordId={correctWord.id}
                    word={word.wordTranslate}
                    onClick={sendAnswer.bind(
                      null,
                      word,
                      word?.id === correctWord.id
                    )}
                  ></OptionBtn>
                </li>
              );
            })}
          </ul>
          {choosenWord ? (
            <button
              onClick={() => getNextStep()}
              className={styles["game-display__get-answer-btn"]}
            >
              Дальше
            </button>
          ) : (
            <button
              className={styles["game-display__get-answer-btn"]}
              onClick={() => skipAnswer()}
            >
              Пропустить
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameDisplay;