import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Root;