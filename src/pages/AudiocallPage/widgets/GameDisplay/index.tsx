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
import { useAppSelector } from '../../../../shared/stores/types';
import Api from '../../../../shared/api';

const GameDisplay = () => {
  const location = useLocation();
  const [state, dispatch] = useReducer(audiocallReducer,location.state.words, initAudicallState);
  const auth = useAppSelector((store) => store.signIn.authData);
  console.log(location.state.words)
  async function sendAnswer(word, isCorrect) {
    dispatch(answerAction(word));

    if (isCorrect) {
      playCorrectSound();
      if (auth) {
        const api = new Api(auth);
        if (!state.correctWord.userWord.optional) {
          await api.updateUserWord(state.correctWord.id, {
            optional: {
              correctInRow: 1,
              incorrectInRow: 0,
              totalCorrect: 1,
              totalIncorrect: 0,
            },
          });
        } else {
          await api.updateUserWord(state.correctWord.id, {
            optional: {
              ...state.correctWord.userWord.optional,
              incorrectInRow: 0,
              correctInRow: state.correctWord.userWord.optional.correctInRow + 1,
              totalCorrect: state.correctWord.userWord.optional.totalCorrect + 1,
            },
          });
        }
      }
    } else {
      playIncorrectSound();
      if (auth) {
        const api = new Api(auth);
        if (!state.correctWord.userWord.optional) {
          await api.updateUserWord(state.correctWord.id, {
            optional: {
              correctInRow: 0,
              incorrectInRow: 1,
              totalCorrect: 0,
              totalIncorrect: 1,
            },
          });
        } else {
          console.log(state.correctWord.id)
          await api.updateUserWord(word.id, {
            optional: {
              ...state.correctWord.userWord.optional,
              correctInRow: 0,
              incorrectInRow: state.correctWord.userWord.optional.incorrectInRow + 1,
              totalIncorrect: state.correctWord.userWord.optional.totalIncorrect + 1,
            },
          });
        }
      }
    }
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
                      sendAnswer.bind(null, word, word?.id === state.correctWord.id)
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
              Пропустить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Component =  GameDisplay;
