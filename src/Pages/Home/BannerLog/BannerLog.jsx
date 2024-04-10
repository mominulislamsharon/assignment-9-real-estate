import Register from "../Register/Register";

const BannerLog = () => {
  return (
    <div className="text-white overflow-hidden h-[100vh] flex justify-center items-center bg-cover" style={{ backgroundImage: `url('../../../public/pizarea.jpg')` }}>
       <Register></Register>
     </div>
  );
};

export default BannerLog;