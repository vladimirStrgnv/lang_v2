import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/MainLayout";
import SignUp from "../pages/SignUp/index";
import SignIn from "../pages/SignIn";

 const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        index: true,
        lazy: () => import("../pages/MainPage/index"),
      },
      {
        path: "/teach",
        lazy: () => import("../pages/BookPage"),
      },
    ]
  },
  {
    path: '/sign-up',
    element: (
      <SignUp />
    )
  },
  {
    path: '/sign-in',
    element: (
      <SignIn />
    )
  }
]);


export default BrowserRouter;