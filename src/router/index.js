import Main from "../pages/main";
import Home from "../pages/home/home";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default router;