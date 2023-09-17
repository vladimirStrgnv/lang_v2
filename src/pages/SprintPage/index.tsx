import styles from './index.module.scss';
import Header from './components/Header';
import { useState } from 'react';
import { useAppSelector } from '../../shared/stores/types';
import { useLocation } from 'react-router';
import GameStartPage from '../../shared/components/GameStartPage';
import BgAnimation from './components/BgAnimation';
import { sprintTitle, sprintDescription, startScreensSectionBtns } from './utils/consts';
import SprintGame from './widgets/SprintGame';

const SprintPage = () => {
  const [words, setStateWords] = useState([]);
  const auth = useAppSelector((store) => store.signIn.authData);
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Header isAuth={!!auth}></Header>
        <main className={styles.main}>
          <section className={styles.sprint}>
            <div className={`${styles.sprint__wrapper}`}>
              <div className={`${styles.sprint__inner}`}>
                {words.length ? (
                  <SprintGame words={words}></SprintGame>
                ) : (
                  <GameStartPage
                    setStateWords={setStateWords}
                    auth={auth}
                    wordsParams={location.state?.wordsParams}
                    title={sprintTitle}
                    description={sprintDescription}
                    startScreensSectionBtns={startScreensSectionBtns}
                  ></GameStartPage>
                )}
              </div>
            </div>
          </section>
        </main>
        <BgAnimation></BgAnimation>
      </div>
    </div>
  );
}

export default SprintPage;