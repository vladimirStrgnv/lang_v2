import styles from './index.module.scss';
import Input from '../../../../shared/components/Input';
import { inputMail ,inputPassword, setAuthData } from './store/index';
import { useDispatch  } from 'react-redux';
import { useAppSelector } from '../../../../shared/stores/types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Api from '../../../../shared/api';
import PopUp from '../../../../shared/components/PopUp';

const SignInForm = () => {
  const { email, password, authData } = useAppSelector((store) => store.signIn);
  const [popUpOption, setPopUpOption] = useState({ isActive: false, text: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeDispatch = (action) => {
    return (e: React.ChangeEvent<HTMLInputElement>): void =>
      dispatch(action({ value: e.target.value }));
  };

  const sendRequest = async (
    event: React.FormEvent<EventTarget>
  ): Promise<void> => {
    event.preventDefault();
    const api = new Api(authData);
    const signInRequest = await api.signIn(email.value, password.value);
    if (signInRequest.ok) {
      const authData = await signInRequest.json();
      dispatch(setAuthData({ value: authData }));
      localStorage.setItem("authData", JSON.stringify(authData));
      navigate("/");
    } else {
      setPopUpOption({
        isActive: true,
        text: "Проблемы с сервером, пожалуйста, повторите попытку позже",
      });
    }
  };

  const setPopUpActive = () => {
    setPopUpOption({ ...popUpOption, isActive: !popUpOption.isActive });
  };

  return (
    <form className={styles["signin-form"]} onSubmit={sendRequest}>
      <PopUp
        children={popUpOption.text}
        isOpen={popUpOption.isActive}
        setActive={setPopUpActive}
      ></PopUp>
      <h2 className={styles["signin-form__title"]}>Уже с нами?</h2>
      <h3 className={styles["signin-form__subtitle"]}>
        Войди в свой аккаунт Lang!
      </h3>
      <div className={styles["signin-form__container-input"]}>
        <Input
          type="email"
          labelText="email *"
          onChange={onChangeDispatch(inputMail)}
          value={email.value}
          isValid={email.isValid}
          noValidTxt={"некорректная почта"}
          required={true}
        ></Input>
      </div>
      <div className={styles["signin-form__container-input"]}>
        <Input
          type="password"
          labelText="пароль *"
          onChange={onChangeDispatch(inputPassword)}
          value={password.value}
          isValid={password.isValid}
          noValidTxt={"некорректная почта"}
          required={true}
        ></Input>
      </div>
      <button className={styles["signin-form__btn"]}>Войти</button>
      <div className={styles["signin-form__login-info"]}>
        <span>Еще на с нами? </span>
        <Link to="/sign-up" className={styles["signin-form__login-link"]}>
          Зарегистрируйся!
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;