import styles from './style.module.scss';
import { motion } from 'framer-motion';
import SvgBottom from './assets/SvgBottom';

const animationOptions = { 
  hidden: {
    y: 120,
    opacity: 0,
    
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

const Greeting = () => {
  return (
    <motion.section 
      className={styles.greeting}
      initial='hidden'
      whileInView='visible'
      >
        <div className={`${styles.greeting__wrapper} `}>
          <div className={`${styles.greeting__inner} `}>
            <div className={styles.greeting__description}>
                <motion.h1 
                  className={styles.greeting__title}
                  variants={animationOptions}
                >
                  Изучай английский c <br/>Lang.
                </motion.h1>
                <motion.p 
                  className={styles.greeting__text}
                  variants={animationOptions}
                >
                  Приложение для эффективного изучения иностранных слов в игровой форме. Всегда под рукой. На любом устройстве.
                </motion.p>
            </div>
            <motion.img className={styles.greeting__img} variants={animationOptions} src={require('../../assets/greeting.png')} alt="greeting-img" />
          </div>
        </div>
        <SvgBottom />
    </motion.section>
  )
}

export default Greeting