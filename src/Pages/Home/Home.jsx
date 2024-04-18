import { useEffect, useState } from "react";
import OfficeBulding from "../../components/OfficeBulding/OfficeBulding";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import OfficB from "../../assets/skyline.png"
import warehouse from "../../assets/warehouse.png"
import restaurent from "../../assets/food.png"
import entertainments from "../../assets/cinema.png"
import industrial from "../../assets/factory.png"
import { NavLink } from "react-router-dom";

import agentProfile1 from "../../assets/agent-1.jpg"
import agentProfile2 from "../../assets/agent-2.jpg"
import agentProfile3 from "../../assets/agent-3.jpg"
import agentProfile4 from "../../assets/agent-4.jpg"




const Home = () => {
  const [officeBulding, setOfficeBulding] = useState([]);
  

  useEffect(() => {
    fetch('officeBuldingData.json')
    .then(res => res.json())
    .then(data => setOfficeBulding(data))
  },[]);
  return (
    <div>
      <BannerSlider></BannerSlider>
      <div>
          <div className="mt-20 pt-8 md:pl-16 rounded-md bg-[#e8ebf4] md:h-[350px] ">
             <div className="text-center">
              <h1 className="text-3xl font-bold ">Featured Property Types</h1>
              <p className="text-slate-400  pt-4 font-medium">Find All Type of Property.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-center">
             <div className="bg-white mt-6 rounded-lg cursor-pointer shadow-lg  h-[200px] md:w-[200px] md:h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]   bg-green-300  rounded-full" src={OfficB} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Office & Studio</h1>
              <p className="text-slate-400 font-medium text-center pt-2">80 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg h-[200px] md:w-[200px] md:h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]" src={warehouse} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Warehouses</h1>
              <p className="text-slate-400 font-medium text-center pt-2">120 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg h-[200px] md:w-[200px] md:h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]" src={restaurent} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Restaurants</h1>
              <p className="text-slate-400 font-medium text-center pt-2">90 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg h-[200px] md:w-[200px] md:h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]" src={entertainments} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold"> Entertainment</h1>
              <p className="text-slate-400 font-medium text-center pt-2">80 Property</p>
             </div>
             <div className="bg-white mt-6 cursor-pointer rounded-lg shadow-lg h-[200px] md:w-[200px] md:h-[180px]">
              <div className="ml-16 pt-5 "><img className="w-[60px]   " src={industrial} alt="" /></div>
              <h1 className="text-center pt-2 text-lg font-bold">Industrial Facilities</h1>
              <p className="text-slate-400 font-medium text-center pt-2">140 Property</p>
             </div>
             </div>
          </div>
          <div>
          <h1 className="text-center md:mt-12 text-3xl font-bold">Recent Property Listed</h1>
          <p className="text-center pt-6 text-slate-500 font-medium ">Unlock your potential, seize opportunities, embrace challenges. Fuel your passion and inspire greatness within yourself</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            officeBulding.map(office => <OfficeBulding key={office.id} office={office}></OfficeBulding>)
          }
          </div>
      </div>
      <div className="mt-16">
        <h1 className="text-5xl font-semibold">See what others <br />
           said <NavLink to='/about' className='text-blue-600'>about us</NavLink></h1>
      </div>
      <div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mt-16">
      <div className="avatar">
  <div className="w-24  rounded-full">
    <img src={agentProfile1} />
  </div>
</div>
        <div>
        <h1 className="text-2xl font-semibold">Tania Rutta <span className="text-lg font-medium"><sub>HOME INSPECTIOR</sub></span></h1>
        <p className="pt-6 text-slate-400">An inspector evaluates operations and products to ensure compliance with standards, regulations, and quality criteria. They conduct assessments, identify issues, and recommend corrective actions for improvement.</p>
        </div>
      <div className="avatar">
  <div className="w-24  rounded-full">
    <img src={agentProfile2} />
  </div>
</div>
        <div>
        <h1 className="text-2xl font-semibold">Miraj Hossain <span className="text-lg font-medium"><sub>MANAGER</sub></span></h1>
        <p className="pt-6 text-slate-400">A manager oversees teams and projects, ensuring goals are met efficiently. They plan, organize, and lead, while also coordinating resources, motivating employees, and making strategic decisions.</p>
        </div>
      </div>
      </div>
      <div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mt-16">
      <div className="avatar">
  <div className="w-24  rounded-full">
    <img src={agentProfile3} />
  </div>
</div>
        <div>
        <h1 className="text-2xl font-semibold">Tubby Ina <span className="text-lg font-medium"><sub>AGENT</sub></span></h1>
        <p className="pt-6 text-slate-400">AAn agent represents and acts on behalf of clients in various transactions, providing expertise, guidance, and advocacy. They facilitate deals, negotiate terms, and manage client relationships.</p>
        </div>
      <div className="avatar">
  <div className="w-24  rounded-full">
    <img src={agentProfile4} />
  </div>
</div>
        <div>
        <h1 className="text-2xl font-semibold">Ella Smith <span className="text-lg font-medium"><sub>SALES ADVISOR</sub></span></h1>
        <p className="pt-6 text-slate-400">A sales advisor guides customers through purchasing decisions, offering product knowledge and personalized recommendations. They identify customer needs, resolve queries, and aim to achieve sales targets.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;