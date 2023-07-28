
import styles from './index.module.scss';
import Hedaer from './components/Header';
import SignUpForm from './widgets/SignUpForm';
import Footer from './components/Footer';

const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Hedaer />
        <main className={styles.main}>
          <section className={styles.signup}>
            <SignUpForm />
            <img
              className={styles.signup__img}
              src={require("./assets/login.png")}
              alt="signup_img"
            ></img>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default SignUp;