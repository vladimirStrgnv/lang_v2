import {useLocation} from 'react-router-dom';
import SoundBtn from '../../../../shared/components/SoundBtn';
import styles from './index.module.scss';
import { useReducer } from 'react';
import { audiocallReducer, answerAction, getNextStepAction, skipAnswerAction } from './store/reducer';
import {initAudicallState } from './store/initState';
import OptionBtn from './components/OptionBtn';
import { playWord, playCorrectSound, playIncorrectSound } from '../../../../shared/utils/services/audio';
import { STEP} from './utils/consts';
import { Navigate } from "react-router-dom";
import AnswerCard from './components/AnswerCard';

const GameDisplay = () => {
  const location = useLocation();
  const [state, dispatch] = useReducer(audiocallReducer,location.state.words, initAudicallState);

  function sendCorrectAnswer(id) {
    dispatch(answerAction(id));
    playCorrectSound();
  }

  function sendIncorrectAnswer(id) {
    dispatch(answerAction(id));
    playIncorrectSound();
  }

  return (
    <div className={styles["game-display"]}>
      {state.gameIsEnd && (
        <Navigate
          to="/audiocall/results"
          state={{
            gameResults: {
              gameHistory: state.gameHistory,
              combo: state.maxCombo,
              incorrectAnswers: state.incorrectAnswers,
              correctAnswers: state.correctAnswers,
              words: state.words
            },
          }}
        />
      )}
      <div className={styles["game-display__wrapper"]}>
        <div className={styles["game-display__inner"]}>
          {state.choosenWord ? (
            <AnswerCard
              image={state.correctWord.image}
              word={state.correctWord.word}
              onClick={playWord.bind(null, `${state.correctWord.audio}`)}
            ></AnswerCard>
          ) : (
            <div className={styles["game-display__play-word-btn"]}>
              <SoundBtn
                onClick={playWord.bind(null, `${state.correctWord.audio}`)}
              ></SoundBtn>
            </div>
          )}
          <ul className={styles["game-display__answer-options"]}>
            {state.answerOptions.map((word) => {
              return (
                <li key={word.id}>
                  <OptionBtn
                    wordId={word.id}
                    isChoosenWord={state.choosenWord?.id === word.id}
                    choosenWord={state.choosenWord}
                    correctWordId={state.correctWord.id}
                    word={word.wordTranslate}
                    onClick={
                      word?.id === state.correctWord.id
                        ? sendCorrectAnswer.bind(null, word)
                        : sendIncorrectAnswer.bind(null, word)
                    }
                  ></OptionBtn>
                </li>
              );
            })}
          </ul>
          {state.choosenWord ? (
            <button
              onClick={() => dispatch(getNextStepAction(STEP))}
              className={styles["game-display__get-answer-btn"]}
            >
              Дальше
            </button>
          ) : (
            <button
              className={styles["game-display__get-answer-btn"]}
              onClick={() => dispatch(skipAnswerAction(false))}
            >
              Не знаю
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Component =  GameDisplay;
