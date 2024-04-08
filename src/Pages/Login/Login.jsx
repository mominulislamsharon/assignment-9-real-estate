import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="bg-slate-800 border   border-slate-400 rounded-md p-8  shadow-lg sm:w-[500px]  md:w-[600px] lg:w-[500px] lg:h-[500px] backdrop-filter backdrop-blur-sm  bg-opacity-30 relative">
      <form action="">
      <div>
        <h1 className="text-4xl sm:text-green-500  lg:text-white font-bold text-center mb-8">Login</h1>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="email" name="email" id="" placeholder="Your Email" /> 
        <label className="text-white absolute lg:text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 sm:text-2xl">Your Email</label>
        </div>
        <div>
        <input className="block sm:text-orange-500 sm:text-2xl sm:w-[400px] mb-12 md:w-[200px]  lg:w-[400px] py-2.3 px-0 lg:text-sm lg:text-white bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="email" name="email" id="" placeholder="Password" />
        
        </div>
        <button className="w-full mb-12 text-lg font-bold mt-6 rounded-full bg-white text-green-500 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Login</button>
        <div className="text-center">
          <p className="mt-4 ">New Here? <Link className="ml-2 text-blue-500" to='/register'>Create an account</Link></p>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Login;