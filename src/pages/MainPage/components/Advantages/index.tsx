import styles from './styels.module.scss';
import AdvantagesItem from './AdvantagesItem';
import { cardsInfo } from '../../consts/index';

const Advantages = () => {
  return (
    <section className={`${styles.advantages}`}>
        <div className={`${styles.advantages__wrapper}`}>
            <h2 className={styles.advantages__title}>Оцените преимущества <br/>приложения.</h2>
            <h3 className={styles.advantages__subtitle}>Зарегистрируйтесь, чтобы использовать все возможности.</h3>
            <ul className={styles.advantages__list}>
                {cardsInfo.map((cardsInfo, index) => 
                <li>
                    <AdvantagesItem
                        key={index}
                        img={cardsInfo.img}
                        title={cardsInfo.title}
                        text={cardsInfo.text}
                    ></AdvantagesItem>
                </li>
                )}
            </ul>
        </div>
    </section>  )
}

export default Advantages;