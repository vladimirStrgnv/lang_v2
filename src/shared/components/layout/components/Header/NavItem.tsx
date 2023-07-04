import React from 'react';
import styles from './NavItem.module.scss';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <Link to={props.path}>
        <li className={styles['links-list__item']}>
            {props.text}
        </li>
    </Link>
  )
}

export default NavItem;