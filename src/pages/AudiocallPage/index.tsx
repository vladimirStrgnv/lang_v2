import styles from './index.module.scss';
import BgAnimation from './components/BgAnimation';
import Header from './components/Header';
import StartPage from './widgets/StartPage';
import AudiocallGame from './widgets/AudiocallGame';
import { useState } from 'react';
import { useAppSelector } from '../../shared/stores/types';
import { useLocation } from 'react-router-dom';

const AudiocallPage = () => {
  const [words, setStateWords] = useState([]);
  const auth = useAppSelector((store) => store.signIn.authData);
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Header></Header>
        <main className={styles.main}>
          <section className={styles.audiocall}>
            <div className={`${styles.audiocall__wrapper}`}>
              <div className={`${styles.audiocall__inner}`}>
                {words.length ? (
                  <AudiocallGame words={words} ></AudiocallGame>
                ) : (
                  <StartPage setStateWords={setStateWords} auth={auth} wordsParams={location.state.wordsParams}></StartPage>
                )}
              </div>
            </div>
          </section>
        </main>
        <BgAnimation></BgAnimation>
      </div>
    </div>
  );
};

export default AudiocallPage;    