import React from 'react';
import styles from './index.module.scss';

const AdvantagesItem = ({img, title, text}) => {
  return (
    <div className={styles['advantages-item']}>
        <img src={require(`../../assets/${img}`)} className={styles['advantages-item__img']} alt="advantages img" />
        <h3 className={styles['advantages-item__title']}>{title}</h3>
        <p className={styles['advantages-item__text']}>{text}</p>
    </div>
  )
}

export default AdvantagesItem;