import styles from './index.module.scss';
import {  CircularProgress } from "@mui/material";

const Preload = () => {
  return (
    <div className={styles['preload__page']}>
        <CircularProgress />
    </div>
  )
}

export default Preload;