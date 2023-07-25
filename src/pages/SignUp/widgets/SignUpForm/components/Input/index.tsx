import styles from './index.module.scss';


const Input = ({text, type, onChange}) => {

    return (
      <div className={`${styles.input__wrapper} `}>
        <label >
            {text}
        </label>
        <input type={type} required className={styles.input} onChange={onChange}/>
      </div>
    )
  }

export default Input;