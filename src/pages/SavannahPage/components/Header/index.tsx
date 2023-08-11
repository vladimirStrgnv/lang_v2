import styles from './index.module.scss';
import Logo from '../../../../shared/components/Logo';
import BurgerIcon from '../BurgerIcon';
import {useState} from "react";
import BurgerMenu from '../../../../shared/components/BurgerMenu';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__inner}>
          <nav className={styles.header__nav}>
            <BurgerIcon onClick={toggleMenuActive}></BurgerIcon>
            <Logo></Logo>
          </nav>
        </div>
      </div>
      <BurgerMenu isActive={menuActive} onClick={toggleMenuActive}></BurgerMenu>
    </header>
  );
};

export default Header;