import { FaShareSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OfficeBulding = ({ office }) => {
    const{estate_title, image, price, segment_name, status, area, description, location ,id} = office || {};


    const handleViewDetails = () => {
      
    }
  return (
    <div className="card bg-[#fafafa]  shadow-xl">
      <figure>
        <img data-aos="zoom-in-up" data-aos-duration="1000" className="h-[350px] w-[480px] rounded-lg"
          src={image}
          alt="Shoes"
        />
        <div data-aos="fade-left" data-aos-duration="1000" className="absolute text-xl font-medium top-2 left-3  text-black bg-[#fffef8] bg-opacity-75 p-2 rounded-md">
            <p>{status}</p>
          </div>
      </figure>
      <div className="card-body">
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="1000" className="flex items-center font-medium gap-2">
        <FaLocationDot className="text-[#dbe61d]"></FaLocationDot>
        <p>{location}</p>
        </div>
        <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="1200" className="text-lg font-semibold pt-3">{segment_name}</p>
        <h2 data-aos="fade-left" data-aos-duration="800" data-aos-delay="1400" className="text-2xl pt-3 font-bold">{estate_title}</h2>
        <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="1600" className="text-base font-medium text-slate-500 pt-3 border-b-2 pb-6">{description}</p>
        <h2 data-aos="fade-left" data-aos-duration="800" data-aos-delay="1800" className="text-lg bg-[#dbe61d] w-48 h-10 mt-3 pl-3 pt-1.5 rounded-full  font-medium">{price}</h2>
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="2000" className="flex  mt-3 items-center gap-3 bg-[#ffcc41] bg-opacity-30 h-10 w-36 rounded-2xl pl-2">
            <FaShareSquare></FaShareSquare>
            <p className="text-lg font-semibold ">{area}</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="2200" className="card-actions border-t-2 pt-3  mt-3">
            <Link to={`/OfficeDetails/${id}`}><button onClick={handleViewDetails} className="btn w-56 bg-[#dbe61d] bg-opacity-50">All Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default OfficeBulding;
