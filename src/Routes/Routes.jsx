import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import BannerLogRegister from "../Pages/Home/BannerLogRegister/BannerLogRegister";
import BannerLog from "../Pages/Home/BannerLog/BannerLog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <BannerLogRegister></BannerLogRegister>,
      },
      {
        path: '/register',
        element: <BannerLog></BannerLog>
      }
    ]
  },
]);

export default router;