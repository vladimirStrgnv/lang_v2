import styles from './index.module.scss';

const BgAnimation = () => {
  return (
    <div className={`${styles.anim} ${styles['bg-game']}`}>
        <div className={styles.inner}>
            <div className={styles.bg__img}></div>
            <div className={`${styles.bg__img} ${styles.bg2}`}></div>
            <div className={`${styles.bg__img} ${styles.bg3}`}></div>
        </div>
    </div>
  )
}

export default BgAnimation;