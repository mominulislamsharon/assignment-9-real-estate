import Register from "../Register/Register";

const BannerLog = () => {
  return (
    <div className="text-white rounded-xl overflow-hidden h-[100vh] flex justify-center items-center bg-cover" style={{ backgroundImage: `url('../../../public/client-2.jpg')` }}>
       <Register></Register>
     </div>
  );
};

export default BannerLog;