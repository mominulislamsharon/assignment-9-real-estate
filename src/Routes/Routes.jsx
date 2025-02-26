import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import BannerLogRegister from "../Pages/Home/BannerLogRegister/BannerLogRegister";
import BannerLog from "../Pages/Home/BannerLog/BannerLog";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Details from "../components/OfficeDetails/Details";
import PrivateRoutes from "./PrivateRoutes";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Error from "./Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

export default router;