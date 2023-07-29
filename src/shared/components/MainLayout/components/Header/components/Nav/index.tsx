import styles from './index.module.scss';
import NavItemsValue from '../../../../utils/consts';
import NavItem from '../NavItem';
import NavButton from '../NavButton';
import { useAppSelector } from '../../../../../../stores/types';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../../../../../../pages/SignIn/widgets/SignInForm/store';

const Nav = () => {
  const { authData } = useAppSelector((store) => store.signIn);
  const dicpatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("authData");
    dicpatch(setAuthData({value: null}));
  }
  
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
      {authData?<NavButton text={'Выйти'} path={'sign-in'} callBack={logOut}/> : <NavButton text={'Войти'} path={'sign-up'} />}
    </nav>
  );
};

export default Nav;