import styles from './index.module.scss';
import { NavLink  } from 'react-router-dom';
import { NavItemProps } from './types';

const NavItem: React.FC<NavItemProps> = ({path, text, state={}}) => {
  return (
    <NavLink
      state={state}
      to={path}
      className={({ isActive, isPending }) =>
        isActive ? `${styles['nav__link-active']} ${styles['nav__link']}` : styles['nav__link']
      }
    >
      {text}
    </NavLink>
  );
};

export default NavItem;