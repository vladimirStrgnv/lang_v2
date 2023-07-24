import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/MainLayout";
import Registration from "../pages/SignUp/index";

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
      <Registration />
    )
  }
]);


export default BrowserRouter;