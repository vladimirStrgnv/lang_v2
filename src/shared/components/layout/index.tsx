import Hedaer from "./components/Header";
import Footer from "./components/Footer/index";
import styles from './index.module.scss'
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Hedaer />
        <main >
            <Outlet></Outlet>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;