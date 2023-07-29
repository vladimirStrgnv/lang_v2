import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { NavBtnProps } from "./types";

const Button: React.FC<NavBtnProps> = ({path, text, callBack}) => {
  return (
    <Link to={path}>
      <button className={styles.nav__btn} onClick={callBack}>
        {text}
      </button>
    </Link>
  );
};

export default Button;