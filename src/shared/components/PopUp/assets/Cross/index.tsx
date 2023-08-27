import styles from "./index.module.scss";

const CrossSvg = ({setActive}) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={()=> {setActive()}} className={styles.svg}>
      <line x1="0" x2="100" y1="0" y2="100" />
      <line x1="0" x2="100" y1="100" y2="0" />
    </svg>
  );
};

export default CrossSvg;
