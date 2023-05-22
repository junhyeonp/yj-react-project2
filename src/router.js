import Profile from "./Profile";
import Contact from "./Contact";
import { createBrowserRouter } from "react-router-dom";
import Home from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
