import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/layout";
import Registration from "../pages/Registration/components/index";

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
    path: '/registration',
    element: (
      <Registration />
    )
  }
]);


export default BrowserRouter;