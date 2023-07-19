import React from 'react';
import styles from './AdvantagesItem.module.scss';

const AdvantagesItem = (props) => {
  return (
    <div className={styles['advantages-item']}>
        <img src={require(`../../assets/${props.img}`)} className={styles['advantages-item__img']} alt="advantages img" />
        <h3 className={styles['advantages-item__title']}>{props.title}</h3>
        <p className={styles['advantages-item__text']}>{props.text}</p>
    </div>
  )
}

export default AdvantagesItem;