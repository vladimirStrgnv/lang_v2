import Hedaer from "./components/Header";
import Footer from "./components/Footer/index";
import styles from './index.module.scss'
import { Outlet } from "react-router";
import { useAppSelector } from "../../stores/types";

const Layout = () => {
  const auth = useAppSelector((store) => store.signIn.authData);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Hedaer isAuth={!!auth}/>
        <main >
            <Outlet></Outlet>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;