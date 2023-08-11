import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/MainLayout";
import SignUp from "../pages/SignUp/index";
import SignIn from "../pages/SignIn";
import SavannahPage from "../pages/SavannahPage";

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
        path: "/book",
        lazy: () => import("../pages/BookPage"),
      },
      {
        path: "/glossary",
        lazy: () => import("../pages/GlossaryPage"),
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
  },
  {
    path: '/savannah',
    element: (
      <SavannahPage />
    )
  }
]);


export default BrowserRouter;