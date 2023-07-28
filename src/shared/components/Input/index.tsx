import styles from './index.module.scss';
import { SignUpInputProps } from './types';

const Input: React.FC<SignUpInputProps> = ({labelText, type, onChange, value, isValid, noValidTxt, required}) => {

    return (
      <div className={`${styles.input__wrapper} `}>
        <input type={type}  className={styles.input} onChange={onChange} autoComplete="off" required={required}/>
        <label 
            className={value === ''?
            styles.input__label :
            `${styles.input__label} ${styles['input__label-active']}`} 
          >
            {labelText}
        </label>
        {!isValid && value && <p className={`${styles.input__warn}`}>{noValidTxt}</p>}

      </div>
    )
  }

export default Input;