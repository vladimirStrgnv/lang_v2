import styles from './index.module.scss';
import  ReactDOM  from 'react-dom';

const PopUp = ({children, isOpen, setActive}) => {
  return ReactDOM.createPortal(
    <>
    <div className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={()=> setActive()}>
        <div className={isOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
            {children} 
        </div>
    </div>
    </>,
    document.getElementById('modal')
  )
}

export default PopUp;