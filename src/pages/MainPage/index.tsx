import styles from './style.module.scss';
import Greeting from './components/Greeting';
import Advantages from './components/Advantages';

const MainPage = () => {
  return (
    <>
      <Greeting />
      <Advantages />  
    </>
  )
}

export const Component =  MainPage;