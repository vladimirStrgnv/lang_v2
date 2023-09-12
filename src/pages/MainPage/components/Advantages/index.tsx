import styles from "./index.module.scss";
import AdvantagesItem from "../AdvantagesItem";
import { cardsInfo } from "../../utils/consts/index";
import { motion } from "framer-motion";

const Advantages = () => {
  const listAnimationConfig = {
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0, x:100 },
  };
  return (
    <section className={`${styles.advantages}`}>
      <div className={`${styles.advantages__wrapper}`}>
        <h2 className={styles.advantages__title}>
          Оцените преимущества <br />
          приложения.
        </h2>
        <h3 className={styles.advantages__subtitle}>
          Зарегистрируйтесь, чтобы использовать все возможности.
        </h3>
        <ul className={styles.advantages__list}>
          {cardsInfo.map((cardsInfo, index) => (
            <motion.li key={cardsInfo.title}
            variants={listAnimationConfig}
            initial='hidden'
            animate='visible'
            custom={index}
            >
              
              <AdvantagesItem
                key={index}
                img={cardsInfo.img}
                title={cardsInfo.title}
                text={cardsInfo.text}
              ></AdvantagesItem>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
