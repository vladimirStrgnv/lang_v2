import styles from './index.module.scss';
import Logo from '../../../Logo/index';
import FooterTopSvg from './assets/FooterTopSvg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTopSvg />
      <div className={`${styles.footer__wrapper}`}>
        <Logo />
        <nav className={styles.footer__nav}>
          <h2 className={styles.footer__title}>Меню</h2>
          <ul>
            <li className={styles["footer__nav-item"]}>
              <NavLink to="/">Главная </NavLink>
            </li>
            <li className={styles["footer__nav-item"]}>
              <NavLink to="/book">Учебник</NavLink>
            </li>
            <li className={styles["footer__nav-item"]}>
              <NavLink to="/sign-in"> Войти</NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.footer__dev}>
          <h2 className={styles.footer__title}>Разработчик</h2>
          <ul>
            <li className={styles["footer__nav-item"]}>
              <a href="https://vladimirstrgnv.github.io/cv/">Владимир Строгонов </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer