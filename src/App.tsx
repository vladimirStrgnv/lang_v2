import {  RouterProvider } from 'react-router';
import BrowserRouter from './router/browser-router-config';


const App = () => {
  return (
    <RouterProvider router={BrowserRouter} ></RouterProvider>
  )
}

export default App;