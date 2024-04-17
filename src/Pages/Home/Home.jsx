import { useEffect, useState } from "react";
import OfficeBulding from "../../components/OfficeBulding/OfficeBulding";

const Home = () => {
  const [officeBulding, setOfficeBulding] = useState([]);
  

  useEffect(() => {
    fetch('officeBuldingData.json')
    .then(res => res.json())
    .then(data => setOfficeBulding(data))
  },[])
  return (
    <div>
      <h1 className=' text-black text-5xl'>this is slider </h1>
      <div>
          <h1 className="text-center mt-7 text-3xl font-bold">Office Building</h1>
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