import { Link, NavLink } from "react-router-dom";
import userProfile from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";



const Navbar = () => {
  const {user, nameUser, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
    <div className="navbar fixed z-10 bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-xl w-[350px] menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box ">
      <NavLink to='/' className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
      <li>
        <details>
          <summary>Properties</summary>
          <ul className="p-2 w-[350px] ">
            <li>
              <details >
                <summary className="text-blue-500 text-base font-medium">Office Buildings</summary>
                <ul>
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
      <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>Services</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>About Us</NavLink>
      <NavLink to='/updateProfile' className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>Update Profile</NavLink>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-2xl font-bold">ProfitPulse</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 items-center text-base text-slate-600 font-semibold">
      <NavLink to='/' className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
      <li>
        <details>
          <summary><a>Properties</a></summary>
          <ul className="p-2 w-[350px] bg-slate-500 bg-opacity-40">
            <li>
              <details className="">
                <summary className="text-blue-500 text-base font-medium">Office Buildings</summary>
                <ul className="bg-slate-500 bg-opacity-40 rounded-lg">
                  <li className="pt-2 text-base font-bold text-slate-500">1. High-rise office towers</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Low-rise office complexes</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Shared office spaces or coworking</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-blue-500 text-base font-medium">Retail Spaces</summary>
                <ul className="bg-slate-500 bg-opacity-40 rounded-lg">
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
                <ul className="bg-slate-500 bg-opacity-40 rounded-lg">
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
                <ul className="bg-slate-500 bg-opacity-40 rounded-lg">
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
                <ul className="bg-slate-500 bg-opacity-40 rounded-lg">
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
                <ul className="bg-slate-500 bg-opacity-40 rounded-lg">
                  <li className="pt-2 text-base font-bold text-slate-500">1. Movie theaters with multiple screens</li>
                  <li className="pt-2 text-base font-bold text-slate-500">2. Outdoor cinemas or drive-ins</li>
                  <li className="pt-2 text-base font-bold text-slate-500">3. Music festivals or event spaces</li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>Services</NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>About Us</NavLink>
      <NavLink to='/updateProfile' className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>Update Profile</NavLink>
    </ul>
  </div>
  <div className="navbar-end ">
  {nameUser && <div>
          <h1 className="text-lg font-bold">{nameUser?.displayName}</h1>
          </div>}
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details >
          <summary tabIndex={0} role="button" className="w-16 flex  rounded-full"><img alt="" src={userProfile} /></summary>
          <ul className="p-2 text-lg font-medium bg-slate-400 bg-opacity-30 text-white w-[300px]">
          {nameUser && <div>
          <li>{nameUser?.displayName}</li>
          </div>}
            <li>
              {
               user ? 
               <button onClick={handleSignOut} className="btn text-lg font-bold ">Sign Out</button>
               :
               <Link to='/login'><button className="btn text-lg font-bold ">Login</button></Link>}
               </li>
            <NavLink><a>Submenu 2</a></NavLink>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
</div>


    {
      user ? 
      <button onClick={handleSignOut} className="btn text-lg font-bold ">Sign Out</button>
      :
      <Link to='/login'><button className="btn text-lg font-bold ">Login</button></Link>
    }
  </div>
  
</div>
  );
};

export default Navbar;