import Login from "../../Login/Login";


const BannerLogRegister = () => {
  return (
    <div className="text-white  rounded-xl h-[100vh] overflow-hidden flex justify-center items-center bg-cover" style={{ backgroundImage: `url('../../../public/client-2.jpg')` }}>
       <Login></Login>
     </div>
  );
};

export default BannerLogRegister;