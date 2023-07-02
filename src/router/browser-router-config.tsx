import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/layout";

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
  }
]);


export default BrowserRouter;