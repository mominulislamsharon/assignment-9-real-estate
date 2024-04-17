import { useEffect, useState } from "react";
import OfficeBulding from "../../components/OfficeBulding/OfficeBulding";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
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
          <h1 className="text-center mt-7 text-3xl font-bold">Recent Property Listed</h1>
          <p className="text-center text-slate-500 font-medium pt-2">Unlock your potential, seize opportunities, embrace challenges. Fuel your passion and inspire greatness within yourself</p>
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