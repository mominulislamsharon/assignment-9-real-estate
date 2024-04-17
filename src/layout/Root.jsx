import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  );
};

export default Root;