// import { Carousel, Typography, Button } from "@material-tailwind/react";

const BannerSlider = () => {
    return (
    //     <Carousel className="rounded-xl">
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    //       alt="image 1"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    //       <div className="w-3/4 text-center md:w-2/4">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that quality
    //           of air that emanation from old trees, that so wonderfully changes
    //           and renews a weary spirit.
    //         </Typography>
    //         <div className="flex justify-center gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    //       alt="image 2"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
    //       <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that quality
    //           of air that emanation from old trees, that so wonderfully changes
    //           and renews a weary spirit.
    //         </Typography>
    //         <div className="flex gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    //       alt="image 3"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
    //       <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that quality
    //           of air that emanation from old trees, that so wonderfully changes
    //           and renews a weary spirit.
    //         </Typography>
    //         <div className="flex gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>

    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default BannerSlider;