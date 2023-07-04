import styles from './Nav.module.scss';
import NavItemsValue from '../../utils/consts';
import NavItem from './NavItem';
import NavButton from './NavButton';

const Nav = () => {

  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        {NavItemsValue.map((itemValue, index) => (
          <NavItem
            key={index}
            path={itemValue.path}
            text={itemValue.text}
          ></NavItem>
        ))}
      </ul>
      <NavButton />
    </nav>
  );
};

export default Nav;