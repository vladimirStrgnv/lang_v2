import styles from './index.module.scss'

const BurgerIcon = ({onClick}) => {
  return (
    <svg viewBox="0 0 100 70" width="40" height="25" fill="white" className={styles.svg} onClick={onClick}>
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );
};

export default BurgerIcon;