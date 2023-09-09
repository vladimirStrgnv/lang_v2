import styles from './index.module.scss';
import Nav from './components/Nav';
import Logo from '../../../Logo/index';
import BurgerIcon from '../../../BurgerIcon';

const Hedaer = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__inner}>
          <Logo />
          <Nav />
          <BurgerIcon onClick={()=> {}}></BurgerIcon>
        </div>
      </div>
    </header>
  )
}

export default Hedaer;