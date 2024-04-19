import { Link } from "react-router-dom";


const Error = () => (
    <div className=' h-[100vh] flex justify-center items-center'>
        <div>
            <h1 className='text-5xl font-semibold'>404</h1>
            <h1 className='text-4xl pt-3 font-bold'>Note Found</h1>
            <Link to="/"><button className='text-white mt-6  bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button></Link>
        </div>
    </div>
);

export default Error;