
import styles from './index.module.scss';
import Hedaer from './components/Header';
import SignUpForm from './widgets/SignUpForm';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const SignUp = () => {
  const animationOptions = { 
    hidden: {
      y: 140,
      opacity: 0,
      
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Hedaer />
        <main className={styles.main}>
          <motion.section
            className={styles.signup}
            initial="hidden"
            whileInView="visible"
          >
            <SignUpForm />
            <motion.img
              className={styles.signup__img}
              src={require("./assets/login.png")}
              alt="signup_img"
              variants={animationOptions}
            ></motion.img>
          </motion.section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;