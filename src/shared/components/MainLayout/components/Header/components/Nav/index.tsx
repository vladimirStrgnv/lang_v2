import styles from "./index.module.scss";
import NavItem from "../NavItem";
import NavButton from "../NavButton";
import { useAppSelector } from "../../../../../../stores/types";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../../../../../../pages/SignIn/widgets/SignInForm/store";

const Nav = () => {
  const { authData } = useAppSelector((store) => store.signIn);
  const dicpatch = useDispatch();

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
          <a href="#" className={styles["nav__games-list-item"]}>Игры</a>
          <ul className={styles["nav__game-list"]}>
            <li className={styles["nav__game-list-item"]}>
              <NavItem path="/audiocall" text="Аудиовызов" state={{wordsParams: null}}></NavItem>
            </li>
            <li className={styles["nav__game-list-item"]}>
              <NavItem path="/sprint" text="Спринт "></NavItem>
            </li>
          </ul>
        </li>
        {authData && (
          <li className={styles["nav__list-item"]}>
            <NavItem path="/statistics" text="Статистика"></NavItem>
          </li>
        )}
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
