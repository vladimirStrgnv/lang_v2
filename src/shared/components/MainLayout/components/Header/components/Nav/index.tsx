import styles from "./index.module.scss";
import NavItem from "../NavItem";
import NavButton from "../NavButton";
import { useAppSelector } from "../../../../../../stores/types";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../../../../../../pages/SignIn/widgets/SignInForm/store";
import { useState} from 'react';
import { NavLink  } from 'react-router-dom';
const Nav = () => {
  const { authData } = useAppSelector((store) => store.signIn);
  const dicpatch = useDispatch();
  const [isGameListOpen, setGameListVision] = useState(false);

  const logOut = () => {
    localStorage.removeItem("authData");
    dicpatch(setAuthData({ value: null }));
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        <li className={styles["nav__list-item"]}>
          <NavItem path="/" text="Главная"></NavItem>
        </li>
        <li className={styles["nav__list-item"]}>
          <NavItem path="/book" text="Учебник"></NavItem>
        </li>
        {authData && (
          <li className={styles["nav__list-item"]}>
            <NavItem path="/glossary" text="Словарь"></NavItem>
          </li>
        )}
        <li className={styles["nav__list-item"]}>
          <NavItem path="/stats" text="Статистика"></NavItem>
        </li>
        <li
          className={styles["nav__list-item"]}
          onMouseEnter={() => setGameListVision(true)}
          
        >
          <NavItem path="/games" text="Игры"></NavItem>
          <p>
            <i className={`${styles.arrow} ${styles.down}`}></i>
          </p>
          {isGameListOpen && (
            <ul className={styles["nav__game-list"]} onMouseLeave={() => console.log(1)}>
              <li className={styles["nav__game-list-item"]}>
                <NavLink to="audiocall">audiocall</NavLink>
              </li>
              <li className={styles["nav__game-list-item"]}>
                <NavLink to="savanaah">savanaah</NavLink>
              </li>
              <li className={styles["nav__game-list-item"]}>
                <NavLink to="savanaah">savanaah</NavLink>
              </li>
              <li className={styles["nav__game-list-item"]}>
                <NavLink to="savanaah">savanaah</NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {authData ? (
        <NavButton text={"Выйти"} path={"sign-in"} callBack={logOut} />
      ) : (
        <NavButton text={"Войти"} path={"sign-up"} />
      )}
    </nav>
  );
};

export default Nav;
