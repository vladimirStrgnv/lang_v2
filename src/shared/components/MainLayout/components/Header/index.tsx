import styles from './index.module.scss';
import Nav from './Nav';
import Logo from '../../../logo/index';

const Hedaer = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__inner}>
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Hedaer;