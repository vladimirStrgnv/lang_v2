import styles from './index.module.scss';
import NavItemsValue from '../../../../utils/consts';
import NavItem from '../NavItem';
import NavButton from '../NavButton';

const Nav = () => {

  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        {NavItemsValue.map((itemValue, index) => (
          <li className={styles["nav__list-item"]} key={itemValue.text}>
            <NavItem
              path={itemValue.path}
              text={itemValue.text}
            ></NavItem>
          </li>
        ))}
      </ul>
      <NavButton text={'Войти'} path={'sign-up'}/>
    </nav>
  );
};

export default Nav;