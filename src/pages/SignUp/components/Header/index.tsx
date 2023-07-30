import styles from './index.module.scss';
import Logo from '../../../../shared/components/Logo';

const Hedaer = () => {
  return (
    <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <div className={styles.header__inner}>
        <Logo />
      </div>
    </div>
  </header>
  )
}

export default Hedaer;