import styles from './index.module.scss';
import Logo from '../../../logo/index';
import FooterTopSvg from './assets/FooterTopSvg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTopSvg />
      <div className={`${styles.footer__wrapper}`}>
        <Logo />
        <nav className={styles.footer__nav}>
          <h2 className={styles.footer__title}>Меню</h2>
          <ul>
            <li className={styles['footer__nav-item']}>Главная</li>
            <li className={styles['footer__nav-item']}>Учебник</li>
            <li className={styles['footer__nav-item']}> Статистика</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer