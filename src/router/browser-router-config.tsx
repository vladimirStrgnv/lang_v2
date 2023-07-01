import { createBrowserRouter } from "react-router-dom";
import Header from '../components/layouts/Header/index';

 const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header />
    ),
    children: [
     
    ]
  }
]);


export default BrowserRouter;