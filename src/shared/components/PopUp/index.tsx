import styles from './index.module.scss';
import  ReactDOM  from 'react-dom';
import CrossSvg from './assets/Cross';
import { PopUpProps } from './types';

const PopUp: React.FC<PopUpProps> = ({ isOpen, setActive, children}) => {
  return ReactDOM.createPortal(
    <>
    <div className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`} >
        <div className={isOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
          <CrossSvg setActive={setActive}></CrossSvg>
            {children} 
        </div>
    </div>
    </>,
    document.getElementById('modal')
  )
}

export default PopUp;