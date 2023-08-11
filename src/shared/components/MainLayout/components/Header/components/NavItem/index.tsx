import styles from './index.module.scss';
import { NavLink  } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink
      to={props.path}
      className={({ isActive, isPending }) =>
        isActive ? `${styles['nav__link-active']} ${styles['nav__link']}` : styles['nav__link']
      }
    >
      {props.text}
    </NavLink>
  );
};

export default NavItem;