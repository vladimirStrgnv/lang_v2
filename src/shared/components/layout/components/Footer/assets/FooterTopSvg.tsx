import React from 'react';
import styles from './FooterTopSvg.module.scss';

const FooterTopSvg = () => {
  return (
    <svg className={styles.svg__footer} viewBox="0 0 500 150" preserveAspectRatio="none">
        <path fill='white'
            d="M0.00,49.99 C277.31,153.25 209.59,-22.40 500.00,49.99 L500.00,0.00 L0.00,0.00 Z">
        </path>
    </svg>
  )
}

export default FooterTopSvg;