import styles from  './index.module.scss';
import Input from './components/Input';
import { inputMail } from './store';

const SignUpForm = () => {

  return (
    <form className={styles['reg-form']}>
        <h2 className={styles.reg__title}>Зарегистрируйся в Ulearning</h2>
        <h3 className={styles.reg__subtitle}>и изучай английский, используя все возможности приложения!</h3>    
        <Input type='email' text='email*' onChange={inputMail}></Input>
    </form>
  )
}

export default SignUpForm;