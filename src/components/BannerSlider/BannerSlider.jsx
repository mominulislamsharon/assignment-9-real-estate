// import { Carousel, Typography, Button } from "@material-tailwind/react";
import sliderImg1 from '../../assets/slider-1.jpg'
import sliderImg2 from '../../assets/slider-2.jpg'
import sliderImg3 from '../../assets/slider-3.jpg'
import sliderImg4 from '../../assets/slider-4.jpg'
import sliderImg5 from '../../assets/slider-5.jpg'
import sliderImg6 from '../../assets/slider-6.jpg'
const BannerSlider = () => {
    return (

    <div className="carousel  w-full">
  <div id="slide1" className="carousel-item  relative w-full">
    <div className='relative w-full '>
    <img src={sliderImg1} className="w-full h-[600px] sm:h-[500px]" />
    <div className='absolute top-[25%] pl-[3rem] sm:top-[35%]'>
      <h1 className='text-3xl sm:text-3xl font-bold text-white '>Unlocking the Dream: <br className='sm:hidden' /> <span className='hidden sm:block'>Expert</span> Real Estate Tips and Insights</h1>
      <p className='text-white pt-6'>The industry involves the buying, selling, and managing of properties for investment or personal use. It includes residential homes, commercial buildings, and undeveloped land.</p>
      <button className='text-white mt-6 sm:mt-8  sm:ml-64 sm:w-[200px] sm:h-[60px] sm:text-lg  ml-48 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 sm:top-auto sm:bottom-5">
      <a href="#slide4" className="btn btn-circle sm:hidden">❮</a> 
      <a href="#slide2" className="btn btn-circle sm:hidden">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='relative w-full '>
    <img src={sliderImg2} className="w-full h-[600px]" />
    <div className='absolute top-[25%] pl-[3rem]'>
      <h1 className='text-3xl font-bold text-white '>Unlocking the Dream: <br /> Expert Real Estate Tips and Insights</h1>
      <p className='text-white pt-6'>The industry involves the buying, selling, and managing of properties for investment or personal use. It includes residential homes, commercial buildings, and undeveloped land.</p>
      <button className='text-white mt-6  ml-48 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='relative w-full '>
    <img src={sliderImg3} className="w-full h-[600px]" />
    <div className='absolute top-[25%] pl-[3rem]'>
      <h1 className='text-3xl font-bold text-white '>Unlocking the Dream: <br /> Expert Real Estate Tips and Insights</h1>
      <p className='text-white pt-6'>The industry involves the buying, selling, and managing of properties for investment or personal use. It includes residential homes, commercial buildings, and undeveloped land.</p>
      <button className='text-white mt-6  ml-48 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='relative w-full '>
    <img src={sliderImg4} className="w-full h-[600px]" />
    <div className='absolute top-[25%] pl-[3rem]'>
      <h1 className='text-3xl font-bold text-white '>Unlocking the Dream: <br /> Expert Real Estate Tips and Insights</h1>
      <p className='text-white pt-6'>The industry involves the buying, selling, and managing of properties for investment or personal use. It includes residential homes, commercial buildings, and undeveloped land.</p>
      <button className='text-white mt-6  ml-48 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='relative w-full '>
    <img src={sliderImg5} className="w-full h-[600px]" />
    <div className='absolute top-[25%] pl-[3rem]'>
      <h1 className='text-3xl font-bold text-white '>Unlocking the Dream: <br /> Expert Real Estate Tips and Insights</h1>
      <p className='text-white pt-6'>The industry involves the buying, selling, and managing of properties for investment or personal use. It includes residential homes, commercial buildings, and undeveloped land.</p>
      <button className='text-white mt-6  ml-48 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <div className='relative w-full '>
    <img src={sliderImg6} className="w-full h-[600px]" />
    <div className='absolute top-[25%] pl-[3rem]'>
      <h1 className='text-3xl font-bold text-white '>Unlocking the Dream: <br /> Expert Real Estate Tips and Insights</h1>
      <p className='text-white pt-6'>The industry involves the buying, selling, and managing of properties for investment or personal use. It includes residential homes, commercial buildings, and undeveloped land.</p>
      <button className='text-white mt-6  ml-48 bg-[#ffcc41] w-[150px] h-[50px] rounded-md font-medium'>More Option</button>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    );
};

export default BannerSlider;