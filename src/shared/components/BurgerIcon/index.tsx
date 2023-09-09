import styles from './index.module.scss'

const BurgerIcon = ({onClick}) => {
  return (
    <svg viewBox="0 0 100 40" width="40" height="25" fill="white" className={styles.svg} onClick={()=> onClick()}>
      <rect width="80" height="7"></rect>
      <rect y="20" width="80" height="7"></rect>
      <rect y="40" width="80" height="7"></rect>
    </svg>
  );
};

export default BurgerIcon;