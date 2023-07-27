import styles from  './index.module.scss';
import Input from '../../../../shared/components/Input';
import { inputMail, inputUserName, inputPassword, inputrepeatPassword  } from './store';
import { useDispatch  } from 'react-redux';
import { useAppSelector } from '../../../../shared/stores/types/index';
import { Link } from 'react-router-dom';
import api from '../../../../shared/api';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {email, userName, password, repeatPassword } = useAppSelector((store) => store.signUp);

  const onChangeDispatch = (action) => {
    return (e: React.ChangeEvent<HTMLInputElement>):void => dispatch(action({value: e.target.value}))
  };

  const sendRequest =  async (event: React.FormEvent<EventTarget>): Promise<any> => {
    event.preventDefault()
    const creaeUserRequest = await api.createUser({email, name: userName, password});
    if (creaeUserRequest.ok) {
      navigate("/");
    }
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
              isValid={repeatPassword === password}
              noValidTxt={'пароли не совпадают'}
          ></Input>
          </div> 
          <button 
            className={styles['signup-form__btn']}
            onClick={sendRequest}
          >Зарегестрироваться</button>
      </form>
      <div className={styles['login-info']}>
          <span>Уже с нами? </span>
          <Link to='/login' className={styles['login-link']}>Да, Войти!</Link>
      </div>
    </>
  )
}

export default SignUpForm;