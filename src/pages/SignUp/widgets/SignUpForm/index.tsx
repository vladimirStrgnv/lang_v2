import styles from  './index.module.scss';
import Input from './components/Input';
import { inputMail, inputUserName, inputPassword, inputrepeatPassword  } from './store';
import { useDispatch  } from 'react-redux';
import { useAppSelector } from '../../../../shared/stores/types/index';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const {email, userName, password, repeatPassword } = useAppSelector((store) => store.signUp);

  const onChangeDispatch = (action) => {
    return (e: React.ChangeEvent<HTMLInputElement>):void => dispatch(action({value: e.target.value}))
  };

  return (
    <>
      <form className={styles['signup-form']}>
          <h2 className={styles['signup-form__title']}>Зарегистрируйся в Ulearning</h2>
          <h3 className={styles['signup-form__subtitle']}>и изучай английский, используя все возможности приложения!</h3>  
          <div className={styles['signup-form__container-input']}>
            <Input 
              type='email' 
              labelText='email *' 
              onChange={onChangeDispatch(inputMail)} 
              value={email}
            ></Input>
          </div>  
          <div className={styles['signup-form__container-input']}>
            <Input 
            type='text' 
            labelText='имя *' 
            onChange={onChangeDispatch(inputUserName)} 
            value={userName}
          ></Input>
          </div> 
          <div className={styles['signup-form__container-input']}>
            <Input 
            type='password' 
            labelText='пароль *' 
            onChange={onChangeDispatch(inputPassword)} 
            value={password}
          ></Input>
          </div> 
          <div className={styles['signup-form__container-input']}>
            <Input 
            type='password' 
            labelText='повторите пароль *' 
            onChange={onChangeDispatch(inputrepeatPassword)} 
            value={repeatPassword}
          ></Input>
          </div> 
          <button className={styles['signup-form__btn']}>Зарегестрироваться</button>
      </form>
      <div className={styles['login-info']}>
          <span>Уже с нами? </span>
          <Link to='/login' className={styles['login-link']}>Да, Войти!</Link>
      </div>
    </>
  )
}

export default SignUpForm;