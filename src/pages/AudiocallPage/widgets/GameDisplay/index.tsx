import {useLocation} from 'react-router-dom';
import VolumeBtn from './components/VolumeBtn';
import styles from './index.module.scss';
import { useReducer } from 'react';
import { audiocallReducer, answerAction, getNextStepAction, skipAnswerAction } from './store/reducer';
import {initAudicallState } from './store/initState';
import OptionBtn from './components/OptionBtn';
import { playAudio } from '../../../../shared/utils/services/audio';

const GameDisplay = () => {
  const location = useLocation();
  const [state, dispatch] = useReducer(audiocallReducer,location.state.words, initAudicallState);

  function sendCorrectAnswer(id) {
    dispatch(answerAction(id));
    playAudio('files/correct.mp3')
  }
  console.log(state.correctWord)
  return (
    <div className={styles["game-display"]}>
      <div className={styles["game-display__wrapper"]}>
        <div className={styles["game-display__inner"]}>
          <VolumeBtn onClick={playAudio.bind(null, `${state.correctWord.audio}`)}></VolumeBtn>
          <ul className={styles["game-display__answer-options"]}>
            {state.answerOptions.map((word, index) => {
              return (
                <li key={index}>
                  <OptionBtn
                    wordId={word.id}
                    isAnswerSended={state.isAnswerSended}
                    correctWordId={state.correctWord.id}
                    word={word.wordTranslate}
                    onClick={sendCorrectAnswer.bind(null, word.id)}
                  ></OptionBtn>
                </li>
              );
            })}
          </ul>
          {state.isAnswerSended ? (
            <button onClick={()=> dispatch(getNextStepAction( state.currentStep + 1))} className={styles["game-display__get-answer-btn"]}>
              Дальше
            </button>
          ) : (
            <button className={styles["game-display__get-answer-btn"]} onClick={() => dispatch(skipAnswerAction(false))}>
              Не знаю
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Component =  GameDisplay;
