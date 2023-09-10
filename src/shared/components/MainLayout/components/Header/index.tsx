import styles from './index.module.scss';
import Nav from './components/Nav';
import Logo from '../../../Logo/index';
import BurgerIcon from '../../../BurgerIcon';
import { useState } from 'react';
import BurgerMenu from '../../../BurgerMenu';

const Hedaer = ({isAuth}) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__inner}>
          <Logo />
          <Nav />
          <div className={styles['header__burger-icon-wrapper']}>
            <BurgerIcon onClick={toggleMenuActive}></BurgerIcon>
          </div>
        </div>
      </div>
      <BurgerMenu isActive={menuActive} onClick={toggleMenuActive} isAuth={isAuth}></BurgerMenu>
    </header>
  )
}

export default Hedaer;