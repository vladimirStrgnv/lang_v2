import styles from './index.module.scss';
import BgAnimation from './components/BgAnimation';
import Header from './components/Header';
import { Outlet } from 'react-router';

const AudiocallPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Header></Header>
        <main className={styles.main}>
          <section className={styles.audiocall}>
            <div className={`${styles.audiocall__wrapper}`}>
              <div className={`${styles.audiocall__inner}`}>
                <Outlet />
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