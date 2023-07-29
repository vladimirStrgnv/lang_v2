import styles from './index.module.scss';
import Hedaer from './components/Header';
import SignInForm from './widgets/SignInForm';

const SignIn = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
        <Hedaer />
        <main className={styles.main}>
            <section className={styles.signin}>
                <SignInForm />
            </section>
        </main>
    </div>
  </div>
  )
}

export default SignIn;