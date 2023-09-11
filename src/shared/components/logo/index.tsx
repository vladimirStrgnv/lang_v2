import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({style}) => {
  return (
    <Link to='/' ><div className={`${styles.logo} ${style}`}>Lang.</div></Link>
  )
}

export default Logo;