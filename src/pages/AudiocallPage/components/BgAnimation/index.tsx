import styles from './index.module.scss';

const BgAnimation = () => {
  return (
    <div className={`${styles.anim}`}>
        <div className={styles.anim__inner}>
            <div className={styles['anim__bg-img']}></div>
            <div className={`${styles['anim__bg-img']} ${styles.anim__bg2}`}></div>
            <div className={`${styles['anim__bg-img']} ${styles.anim__bg3}`}></div>
        </div>
    </div>
  )
}

export default BgAnimation;