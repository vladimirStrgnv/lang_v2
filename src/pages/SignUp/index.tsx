
import styles from './index.module.scss';
import Hedaer from './components/Header';
import SignUpForm from './widgets/SignUpForm';

const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Hedaer />
        <main className={styles.main}>
          <SignUpForm />
        </main>
      </div>
    </div>
  )
}

export default SignUp;