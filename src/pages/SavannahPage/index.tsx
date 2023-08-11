import styles from './index.module.scss';
import BgAnimation from './components/BgAnimation';
import Header from './components/Header';
import Savannah from './widgets/Savannah';

const SavannahPage = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Header></Header>
        <main>
          <Savannah />
        </main>
        <BgAnimation></BgAnimation>
      </div>
    </div>  
  )
}

export default SavannahPage;    