import styles from './index.module.scss';
import { Link } from 'react-router-dom';


const Logo = (props) => {
  return (
    <Link to='/' ><div className={`${styles.logo} ${props.style}`}>Lang.</div></Link>
  )
}

export default Logo;