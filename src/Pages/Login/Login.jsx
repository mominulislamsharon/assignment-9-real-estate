import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthProvider";
import { FaFacebook, FaGoogle, FaGithub,FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedNameUser = localStorage.getItem('nameUser');
    if (storedNameUser) {
      setNameUser(JSON.parse(storedNameUser));
    }
  }, []);

  const {loginUser, nameUser, setNameUser, googleLogin} = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // Validate email and password
    if (!email || !password) {
      toast.warning('Please enter both email and password.');
      return;
    }

    loginUser(email, password)
    .then(result => {
      const loggedInUser = result.user;
      setNameUser(loggedInUser);
      localStorage.setItem('nameUser', JSON.stringify(loggedInUser));
      toast.success('Login successful!');
    })
    .catch(error => {
      console.error(error);
      toast.warning('Invalid email or password.');
    })
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const loggedGoogleUser = result.user;
      setNameUser(loggedGoogleUser);
      localStorage.setItem('nameUser', JSON.stringify(loggedGoogleUser));
      toast.success('Login successful!');
    })
    .catch(error => {
      console.log(error.message);
      toast.warning('Login failed. Please try again.');
    })
  }

  useEffect(() => {
    if (nameUser) {
      localStorage.setItem('nameUser', JSON.stringify(nameUser));
    }
  }, [nameUser]);



  return (
    <div className="bg-slate-800 border   border-slate-400 rounded-md p-8  shadow-lg sm:w-[500px]  md:w-[600px] lg:w-[500px] lg:h-[600px] backdrop-filter backdrop-blur-sm  bg-opacity-30 relative">
      <form onSubmit={handleLogin}>
      <div>
        <h1 className="text-4xl sm:text-green-500  lg:text-white font-bold text-center mb-8">Login</h1>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="email" name="email"  placeholder="Your Email" required /> 
        <label className="text-white absolute lg:text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 sm:text-2xl">Your Email</label>
        </div>
        <div>
        <input className="block relative sm:text-orange-500 sm:text-2xl sm:w-[400px] mb-12 md:w-[200px]  lg:w-[400px] py-2 px-0 lg:text-sm lg:text-white bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type={showPassword? 'text' : 'password'} name="password"  placeholder="Password"   />
        <span
            className="text-white absolute right-3  -mt-20 mr-16  "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button className="w-full mb-6 text-lg font-bold mt-3 rounded-full bg-white text-green-500 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Login</button>
        <ToastContainer></ToastContainer>
      </div>
      </form>
      <div className="p-4 space-y-3">
        <button onClick={handleGoogleLogin} className="btn  font-bold  w-full">
          <FaGoogle className="text-red-600 "></FaGoogle>
          Login With Google
        </button>
        <button className="btn font-bold w-full">
          <FaGithub></FaGithub>
          Login With GitHub
        </button>
        <button className="btn font-bold  w-full">
          <FaFacebook className="text-blue-600"></FaFacebook>
          Login Facebook
        </button>
        <div className="text-center">
          <p className="mt-4 ">New Here? <Link className="ml-2 text-blue-500" to='/register'>Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;