import styles from './style.module.scss';
import Greeting from '../Greeting';

const MainPage = () => {
  return (
    <section className={styles.main__wrapper}>
      <Greeting />
    </section>
  )
}

export  default MainPage;