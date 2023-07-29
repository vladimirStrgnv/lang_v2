import styles from './index.module.scss';

const SignInForm = () => {
  return (
    <form className={styles['signin-form']}>
      <h2 className={styles["signin-form__title"]}>Уже с нами?</h2>
      <h3 className={styles["signin-form__subtitle"]}> Войди в свой аккаунт Lang!</h3>
    </form>
  )
}

export default SignInForm;