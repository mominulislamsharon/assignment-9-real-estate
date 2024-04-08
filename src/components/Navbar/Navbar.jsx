import { Link } from "react-router-dom";
import userProfile from "../../assets/user.png"



const Navbar = () => {

  return (
    <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-xl w-[350px] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
      <li><a>Home</a></li>
      <li>
        <details >
          <summary>Properties</summary>
          <ul className="p-2 w-[350px]">
            <li>
              <details className="">
                <summary className="text-blue-500 text-base font-medium">Office Buildings</summary>
                <ul className="">
                  <li className="pt-2 text-base font-bold text-slate-500">1. High-rise office towers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Low-rise office complexes</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Shared office spaces or coworking</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Retail Spaces</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Standalone retail stores</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Shopping malls or centers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Strip malls</li>
                  <li className="pt-2 text-base font-bold text-slate-500">4. Retail spaces within mixed-use</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Warehouses</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Distribution centers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Industrial warehouses</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Flex spaces (combination of office.)</li>
                  <li className="pt-2 text-base font-bold text-slate-500">4. Distribution centers</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Industrial Facilities</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Manufacturing plants</li>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Processing facilities</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Industrial parks</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Logistics and fulfillment centers</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Restaurants</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Standalone restaurants</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Bars and pubs</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Nightclubs</li>
                  <li className="pt-2 text-base font-bold text-slate-500">4. Theaters and cinemas</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Entertainment Venues</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Movie theaters with multiple screens</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Outdoor cinemas or drive-ins</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Music festivals or event spaces</li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><a>Services</a></li>
      <li><a>About Us</a></li>
      <li><a>Update Profile</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">ProfitPulse</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base text-slate-600 font-semibold">
      <li><Link to='/'>Home</Link></li>
      <li>
        <details >
          <summary>Properties</summary>
          <ul className="p-2 w-[350px]">
            <li>
              <details className="">
                <summary className="text-blue-500 text-base font-medium">Office Buildings</summary>
                <ul className="">
                  <li className="pt-2 text-base font-bold text-slate-500">1. High-rise office towers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Low-rise office complexes</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Shared office spaces or coworking</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Retail Spaces</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Standalone retail stores</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Shopping malls or centers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Strip malls</li>
                  <li className="pt-2 text-base font-bold text-slate-500">4. Retail spaces within mixed-use</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Warehouses</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Distribution centers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Industrial warehouses</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Flex spaces (combination of office.)</li>
                  <li className="pt-2 text-base font-bold text-slate-500">4. Distribution centers</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Industrial Facilities</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Manufacturing plants</li>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Processing facilities</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Industrial parks</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Logistics and fulfillment centers</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Restaurants</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Standalone restaurants</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Bars and pubs</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Nightclubs</li>
                  <li className="pt-2 text-base font-bold text-slate-500">4. Theaters and cinemas</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Entertainment Venues</summary>
                <ul>
                  <li className="pt-2 text-base font-bold text-slate-500">1. Movie theaters with multiple screens</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Outdoor cinemas or drive-ins</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Music festivals or event spaces</li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><a>Services</a></li>
      <li><a>About Us</a></li>
      <li><Link to='/login' >Update Profile</Link></li>
      {/* <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{ backgroundImage: `url('../../../public/pizarea.jpg')` }}>
      // <Login></Login>
      // <Register></Register>
    // </div> */}
    </ul>
  </div>
  <div className="navbar-end ">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 flex  rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userProfile} />
        </div>
      </div>
    <button className="btn text-lg font-bold ">Login</button>
  </div>
</div>
  );
};

export default Navbar;