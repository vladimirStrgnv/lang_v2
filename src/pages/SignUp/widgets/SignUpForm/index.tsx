import styles from  './index.module.scss';
import Input from '../../../../shared/components/Input';
import { inputMail, inputUserName, inputPassword, inputrepeatPassword  } from './store';
import { useDispatch  } from 'react-redux';
import { useAppSelector } from '../../../../shared/stores/types/index';
import { Link } from 'react-router-dom';
import Api from '../../../../shared/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PopUp from '../../../../shared/components/PopUp';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [popUpOption, setPopUpOption] = useState({isActive: false, text: ''});
  const {email, userName, password, repeatPassword } = useAppSelector((store) => store.signUp);
  const { authData } = useAppSelector((store) => store.signIn);

  const onChangeDispatch = (action) => {
    return (e: React.ChangeEvent<HTMLInputElement>):void => dispatch(action({value: e.target.value}))
  };

  const sendRequest =  async (event: React.FormEvent<EventTarget>): Promise<void> => {
    event.preventDefault()
    const api = new Api(authData);
    const creaeUserRequest = await api.createUser(userName.value, email.value, password.value);
    if (creaeUserRequest.ok) {
      navigate("/sign-in");
    } else if (creaeUserRequest.status === 417) {
      setPopUpOption({isActive: true, text: 'Данный электронный ящик уже использовался при регистрации'})
    } else {
      setPopUpOption({isActive: true, text: 'Проблемы с сервером, пожалуйста, повторите попытку позже'})
    }
  };

  const setPopUpActive = () => {
    setPopUpOption({...popUpOption, isActive: !popUpOption.isActive});
  };
  
  return (
    <form className={styles['signup-form']} onSubmit={sendRequest}>
      <PopUp children={popUpOption.text} isOpen={popUpOption.isActive} setActive={setPopUpActive}></PopUp>
      <h2 className={styles['signup-form__title']}>Зарегистрируйся в Ulearning</h2>
      <h3 className={styles['signup-form__subtitle']}>и изучай английский, используя все возможности приложения!</h3>
      <div className={styles['signup-form__container-input']}>
        <Input
          type='email'
          labelText='email *'
          onChange={onChangeDispatch(inputMail)}
          value={email.value}
          isValid={email.isValid}
          noValidTxt={'некорректная почта'}
          required={true}
        ></Input>
      </div>
      <div className={styles['signup-form__container-input']}>
        <Input
          type='text'
          labelText='имя *'
          onChange={onChangeDispatch(inputUserName)}
          value={userName.value}
          isValid={userName.isValid}
          noValidTxt={'необходимая длинна не менее 6 символов'}
          required={true}
        ></Input>
      </div>
      <div className={styles['signup-form__container-input']}>
        <Input
          type='password'
          labelText='пароль *'
          onChange={onChangeDispatch(inputPassword)}
          value={password.value}
          isValid={password.isValid}
          noValidTxt={'необходимая длинна не менее 6 символов'}
          required={true}
        ></Input>
      </div>
      <div className={styles['signup-form__container-input']}>
        <Input
          type='password'
          labelText='повторите пароль *'
          onChange={onChangeDispatch(inputrepeatPassword)}
          value={repeatPassword.value}
          isValid={repeatPassword.isValid}
          noValidTxt={'пароли не совпадают'}
          required={true}
        ></Input>
      </div>
      <button
        className={styles['signup-form__btn']}
      >Зарегестрироваться</button>
      <div className={styles['signup-form__login-info']}>
        <span>Уже с нами? </span>
        <Link to='/sign-in' className={styles['signup-form__login-link']}>Да, Войти!</Link>
      </div>
    </form>
  )
}

export default SignUpForm;