import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home/home";
import User from "../pages/user";
import Mall from "../pages/mall";
import PageOne from "../pages/otherpage/pageOne";
import PageTwo from "../pages/otherpage/pageTwo";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace={true} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "mall",
        element: <Mall />,
      },
      {
        path: "other",
        children: [
          {
            path: "pageone",
            element: <PageOne />,
          },
          {
            path: "pagetwo",
            element: <PageTwo />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default router;
