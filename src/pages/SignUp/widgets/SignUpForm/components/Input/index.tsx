import styles from './index.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Input = ({text, type, onChange}) => {

  const dispatch = useDispatch()
    return (
      <div className={`${styles.input__wrapper} `}>
        <label >
            {text}
        </label>
        <input type={type} required className={styles.input} onChange={(e)=> {dispatch(onChange({value: e.target.value}))}}/>
      </div>
    )
  }

export default Input;