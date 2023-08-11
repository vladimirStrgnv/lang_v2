import styles from "./index.module.scss";
import Logo from "../Logo";
import CrossSvg from './assets/Cross';
import { Link } from "react-router-dom";

const BurgerMenu = ({isActive, onClick}) => {
  return (
    <div className={isActive? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
      <div
        className={styles.menu__blur}
        onClick={() => onClick()}
      ></div>
      <div className={styles.menu__content}>
        <div className={styles.menu__header}>
          <CrossSvg
            setActive={onClick}
          ></CrossSvg>
          <Logo style={styles.menu__logo}></Logo>
        </div>
        <ul className={styles["menu__link-list"]}>
          <li className={styles["menu__link-list-item"]}>
            <Link to="/" className={styles["menu__link"]}>
              {"Главная"}
            </Link>
          </li>
          <li className={styles["menu__link-list-item"]}>
            <Link to="/teach/book" className={styles["menu__link"]}>
              {"Учебник"}
            </Link>
          </li>
          <li className={styles["menu__link-list-item"]}>
            <Link to="/games" className={styles["menu__link"]}>
              {"Игры"}
            </Link>
            <ul className={styles["menu__games-link-list"]}>
              <li className={styles["menu__games-link-list-item"]}>
                <Link
                  to="/games/audiocall"
                  state={{ data: [] }}
                  className={styles["menu__games-link"]}
                >
                  Аудиовызов
                </Link>
              </li>
              <li className={styles["menu__games-link-list-item"]}>
                <Link
                  to="/games/savannah"
                  className={styles["menu__games-link"]}
                >
                  Саванна
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles["menu__link-list-item"]}>
            <Link to="/stats" className={styles["menu__link"]}>
              {"Статистика"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;