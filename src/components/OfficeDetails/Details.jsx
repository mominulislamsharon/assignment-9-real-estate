
import {  useParams } from 'react-router-dom';
import officeData from '../../../public/officeBuldingData.json'
import { FaShareSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {
  const { id } = useParams();
  const officeDetails = officeData.find((building) => building.id === parseInt(id));

  if(!officeDetails){
    return <div>Office Building</div>
  }
  return (
    <div className='flex gap-10  bg-[#edf9f9] rounded-xl'>
      <div className='relative'>
        <img className='w-[600px] h-[750px] rounded-xl' src={officeDetails.image} alt="" />
        <div className="absolute text-xl font-medium top-2 left-3  text-black bg-[#fffef8] bg-opacity-75 p-2 rounded-md">
            <p>{officeDetails.status}</p>
          </div>
      </div>
      <div>
        <h2 className='text-2xl pt-24 font-bold'>{officeDetails.estate_title}</h2>
        <p className="text-lg text-slate-500 font-medium pt-6">{officeDetails.description}</p>
        <p className='text-xl font-bold pt-6'>{officeDetails.segment_name}</p>
        <p className="text-lg bg-[#dbe61d] w-48 h-10 mt-6 pl-3 pt-1.5 rounded-full  font-medium">{officeDetails.price}</p>
        <div className="flex  mt-6 items-center gap-3 bg-[#ffcc41] bg-opacity-30 h-10 w-36 rounded-2xl pl-2">
            <FaShareSquare></FaShareSquare>
            <p className="text-lg font-semibold  ">{officeDetails.area}</p>
        </div>
        <p className='text-lg font-medium pt-6 text-slate-500'>{officeDetails.facilities}</p>
        <p className='text-base font-medium text-slate-500 pt-6'>{officeDetails.view_property_button}</p>
        <p className='text-base font-medium pt-6 text-slate-500'>
          {officeDetails.facilities.map((facility, index) => (
            <span key={index}>
              <span className="font-bold">#{facility}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Details;