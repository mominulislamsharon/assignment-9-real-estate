import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="bg-slate-800 border  border-slate-400 rounded-md p-8  shadow-lg sm:w-[500px]  md:w-[600px] lg:w-[500px] h-[600px] backdrop-filter backdrop-blur-sm  bg-opacity-30 relative">
      <form action="">
      <div>
        <h1 className="text-4xl sm:text-green-500  lg:text-white font-bold text-center mb-8">Creat a new account</h1>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="text" name="name" id="" placeholder="Your Name" /> 
        </div>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="email" name="email" id="" placeholder="Your Email" /> 
        </div>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="text" name="photo" id="" placeholder="Photo Url" /> 
        </div>
        <div>
        <input className="block sm:text-orange-500 sm:text-2xl sm:w-[400px] mb-8 md:w-[200px]  lg:w-[400px] py-2.3 px-0 lg:text-sm lg:text-white bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="email" name="email" id="" placeholder="Password" />
        
        </div>
        <button className="w-full mb-6 text-lg font-bold mt-6 rounded-full bg-white text-green-500 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Register</button>
        <div className="text-center">
          <p>Already Have an account? <Link className="ml-2 text-blue-500" to='/login'>Login</Link></p>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Register;