import Login from "../../Login/Login";


const BannerLogRegister = () => {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{ backgroundImage: `url('../../../public/pizarea.jpg')` }}>
       <Login></Login>
     </div>
  );
};

export default BannerLogRegister;