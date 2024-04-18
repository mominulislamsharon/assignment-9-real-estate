import descriptionImage from "../../assets/description.jpg"


const About = () => {
    return (
        <div className="">
            <div className="text-white overflow-hidden  rounded-xl h-[500px] flex  bg-cover" style={{ backgroundImage: `url('../../../public/header.jpg')` }}>
            <div className="bg-black bg-opacity-70 w-full">
            <h1 className="text-2xl pl-52 pt-48 font-medium">about us</h1>
            <h2 className="text-5xl pl-52 pt-3 font bold">About Us - Who We Are?</h2>
            </div>
        </div>
        <div className="flex mt-12 gap-6">
            <div>
            <h1 className="text-4xl font-bold text-[#323750]">Our Agency Story</h1>
            <p className="text-slate-400 pt-3">Cheak out company story and work process</p>
            <p className="text-md pt-5  font-medium text-slate-400">ProfilPulse is a dynamic commercial company specializing in providing tailored business solutions to clients across various industries. Our focus is on delivering innovative products and services that enhance our clients competitive edge. We offer a wide range of services, including strategic consulting, market research, and product distribution, all designed to help businesses grow and thrive. Our team of experienced professionals is dedicated to understanding each client unique needs and offering personalized solutions to achieve their goals.</p>
            <p className="text-md pt-6 text-slate-400 font-medium ">Specializing in strategic consulting, market research, and product distribution, we help businesses enhance their competitive edge and achieve growth. Our experienced team provides personalized services, focusing on quality, efficiency, and customer satisfaction. Committed to delivering innovative and effective solutions, ProfilPulse is a trusted partner for businesses seeking success.</p>
            <button className="bg-[#ff7676] mt-6  text-white text-lg font-bold p-3 rounded-full ">More About Us</button>
            </div>
            <div>
                <img className="rounded-lg" src={descriptionImage} alt="" />
            </div>
        </div>
        <div className="flex bg-[#f8f5f0] h-[200px] mt-6 pt-10 rounded-md justify-around">
            <div>
                <h1 className="text-5xl font-bold">Do You Have Questions?</h1>
                <p className="text-md font-medium pt-6">Well help you to grow your career and growth.</p>
            </div>
            <div className="pt-10">
                <button className="bg-[#ff7676]  text-white text-lg font-bold p-3 rounded-full ">Contact Us Today</button>
            </div>
        </div>
        </div>
    );
};

export default About;