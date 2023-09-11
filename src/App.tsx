
import {  RouterProvider } from 'react-router';
import BrowserRouter from './router/browser-router-config';
import  './index.module.scss'


const App = () => {
  return (
    <RouterProvider router={BrowserRouter} ></RouterProvider>
  )
}

export default App;