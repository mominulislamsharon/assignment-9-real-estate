import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className=''>
             <div className="text-white overflow-hidden  rounded-xl h-[500px] flex  bg-cover" style={{ backgroundImage: `url('../../../public/contactHeader.jpg')` }}>
            <div className="bg-black bg-opacity-70 w-full">
            <h1 className="text-2xl pl-52 pt-48 font-medium">Contact us</h1>
            <h2 className="text-5xl pl-52 pt-3 font bold">Get Helps & Friendly Support</h2>
            </div>
            </div>
            <div className='flex mt-24 gap-16 border-b-2 pb-16'>
            <div className=''>
                <div>
                    <h1 className='text-3xl font-semibold'>Send Us a Message</h1>
                </div>
                <div className='mt-6 w-[800px]'>
                    <form action="">
                    <input type="text" placeholder="Name" className="input mb-3 input-bordered  w-full " />
                    <br />
                    <input type="email" placeholder="Your Email" className="input mb-3 input-bordered  w-full " />
                    <br />
                    <textarea className="textarea  w-full h-[250px] textarea-primary" placeholder="Message"></textarea>
                    <button className='mt-6 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>Send a message</button>
                    </form>
                </div>
            </div>
            <div className='flex gap-56'>
                <div>
                <h1 className='text-2xl font-bold'>Conact Us</h1>
                <h2 className='text-xl font-bold pt-8'>Main office</h2>
                <p className='text-slate-400 font-medium pt-12'>Uttora-sector-1/6, Dhaka-1202</p>
                <p className='text-slate-400 font-medium pt-4'>+111 223 446 67</p>
                <p className='text-slate-400 font-medium pt-4'>+123 456 789 11</p>
                <p className='text-slate-400 font-medium pt-4'>profitpulse02@gmail.com</p>
                <div className='text-slate-400 font-medium mt-20'>
                    <p className='pb-3'>Monday – Friday 09:00 – 20:30</p>
                    <p>Saturday 09:00 – 18:00</p>
                </div>
                </div>
                <div>
                <h2 className='text-xl font-bold pt-8'>Second office</h2>
                <p className='text-slate-400 font-medium pt-12'>Mirpur-sector-1/10, Dhaka-1202</p>
                <p className='text-slate-400 font-medium pt-4'>+222 333 444 56</p>
                <p className='text-slate-400 font-medium pt-4'>+987 654 321 33</p>
                <p className='text-slate-400 font-medium pt-4'>profitpulse02@gmail.com</p>
                <div className='text-slate-400 font-medium mt-20'>
                    <p className='pb-3'>Monday – Friday 09:00 – 20:30</p>
                    <p>Saturday 09:00 – 18:00</p>
                </div>
                </div>
            </div>
            </div>
            <div className='flex mt-16 gap-8 pb-16'>
            <div className=' rounded-lg  border pt-12 pl-10 pb-10 bg-[#edf9f9]'>
                <div>
                <h1 className='text-3xl font-semibold'>Sign to newsletter</h1>
                <p className='text-slate-400 pt-6'>Save your time and easily rent or sell your property with the lowest commission on the real estate market.</p>
                </div>
                <div className='flex mt-10'>
                    <div className=''>
                        <input className='p-3 w-full' type="email" name="eimal" placeholder='Your Email' id="" />
                        </div>
                    <div>
                    <button className='bg-[#ffcc41] border-2 w-[150px] h-[50px] rounded-md'>SignUp</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#fbfbfb] rounded-lg  border pt-12 pl-10 pb-10'>
            <h1 className='text-3xl font-semibold'>Become a Real Estate Agent</h1>
            <p className='text-slate-400 pt-6'>Pri adhuc electram elaboraret at, et mei delicata iracundia adolescens, at ius dico eius his solum convenire ei nam.</p>
            <button className='bg-[#ffcc41] mt-10 border-2 w-[150px] h-[50px] rounded-md'>Join our team</button>
            </div>
            </div>
        </div>
    );
};

export default Contact;