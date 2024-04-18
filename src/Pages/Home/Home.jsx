import { useEffect, useState } from "react";
import OfficeBulding from "../../components/OfficeBulding/OfficeBulding";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import OfficB from "../../assets/skyline.png"
import warehouse from "../../assets/warehouse.png"
import restaurent from "../../assets/food.png"
import entertainments from "../../assets/cinema.png"
import industrial from "../../assets/factory.png"
const Home = () => {
  const [officeBulding, setOfficeBulding] = useState([]);
  

  useEffect(() => {
    fetch('officeBuldingData.json')
    .then(res => res.json())
    .then(data => setOfficeBulding(data))
  },[])
  return (
    <div>
      <BannerSlider></BannerSlider>
      <div>
          <div className="mt-20 bg-[#e8ebf4] h-[350px] ">
             <div className="text-center">
              <h1 className="text-3xl font-bold ">Featured Property Types</h1>
              <p className="text-slate-400 font-medium">Find All Type of Property.</p>
             </div>
             <div className="flex gap-6 justify-center">
             <div className="bg-white mt-6 rounded-lg cursor-pointer shadow-lg w-[200px] h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]   bg-green-300  rounded-full" src={OfficB} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Office & Studio</h1>
              <p className="text-slate-400 font-medium text-center pt-2">80 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg w-[200px] h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]" src={warehouse} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Warehouses</h1>
              <p className="text-slate-400 font-medium text-center pt-2">120 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg w-[200px] h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]" src={restaurent} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Restaurants</h1>
              <p className="text-slate-400 font-medium text-center pt-2">90 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg w-[200px] h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]" src={entertainments} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold"> Entertainment</h1>
              <p className="text-slate-400 font-medium text-center pt-2">80 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg w-[200px] h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]   " src={industrial} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Industrial Facilities</h1>
              <p className="text-slate-400 font-medium text-center pt-2">140 Property</p>
             </div>
             </div>
          </div>
          <div>
          <h1 className="text-center mt-7 text-3xl font-bold">Recent Property Listed</h1>
          <p className="text-center text-slate-500 font-medium pt-2">Unlock your potential, seize opportunities, embrace challenges. Fuel your passion and inspire greatness within yourself</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6">
          {
            officeBulding.map(office => <OfficeBulding key={office.id} office={office}></OfficeBulding>)
          }
          </div>
      </div>
    </div>
  );
};

export default Home;