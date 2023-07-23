import styles from './style.module.scss';
import Greeting from './Greeting';
import Advantages from './Advantages';

const MainPage = () => {
  return (
    <section className={styles.main__wrapper}>
      <Greeting />
      <Advantages />  
    </section>
  )
}

export  default MainPage;