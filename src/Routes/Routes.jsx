import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import BannerLogRegister from "../Pages/Home/BannerLogRegister/BannerLogRegister";
import BannerLog from "../Pages/Home/BannerLog/BannerLog";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Details from "../components/OfficeDetails/Details";
import PrivateRoutes from "./PrivateRoutes";


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
        path:'/officeDetails/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
      },
      {
        path:'/login',
        element: <BannerLogRegister></BannerLogRegister>,
      },
      {
        path: '/register',
        element: <BannerLog></BannerLog>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
      }
    ]
  },
]);

export default router;