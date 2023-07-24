import styles from './index.module.scss';

const Input = (props) => {
    return (
      <div className={`${styles.input__wrapper} `}>
        <label >
            {props.text}
        </label>
        <input type={props.type} required className={styles.input} />
      </div>
    )
  }

export default Input;