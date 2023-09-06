import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/components/MainLayout";
import SignUp from "../pages/SignUp/index";
import SignIn from "../pages/SignIn";
import AudiocallPage from "../pages/AudiocallPage";
import SprintPage from "../pages/SprintPage";

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
      {
        path: "/statistics",
        lazy: () => import("../pages/Statistics/index"),
      }
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
    path: '/audiocall',
    element: (
      <AudiocallPage />
    ),
  },
  {
    path: '/audiocall',
    element: (
      <AudiocallPage />
    ),
  },
  {
    path: '/sprint',
    element: (
      <SprintPage />
    ),
  }

]);

export default BrowserRouter;