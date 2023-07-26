import styles from './index.module.scss';
import { SignUpInputProps } from './types';

const Input: React.FC<SignUpInputProps> = ({labelText, type, onChange, value}) => {

    return (
      <div className={`${styles.input__wrapper} `}>
        <input type={type} required className={styles.input} onChange={onChange}/>
        <label 
            className={value === ''?
            styles.input__label :
            `${styles.input__label} ${styles['input__label-active']}`} 
          >
            {labelText}
        </label>
      </div>
    )
  }

export default Input;