import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import { NavBtnProps } from "./types";

const Button: React.FC<NavBtnProps> = ({ path, text, callBack }) => {
  return (
    <NavLink
      to={path}
    >
      <button className={styles.nav__btn} onClick={callBack}>
        {text}
      </button>
    </NavLink>
  );
};

export default Button;