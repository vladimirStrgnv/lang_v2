import Hedaer from "./components/Header";
import Footer from "./components/Footer/index";
import styles from './index.module.scss'
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
        <Hedaer />
        <main >
            <Outlet></Outlet>
        </main>
        <Footer />
    </div>
  )
}

export default Layout;