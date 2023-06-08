import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
    <div className="carousel w-full mb-10">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/vmRJJpF/signal-2023-06-06-210008-009.jpg"  className="w-full md:h-[100vh]" />
      <div className='absolute inset-0 opacity-40 bg-black w-full h-[100vh]'></div>
      <div className='absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white'>
      <Slide><p className='text-2xl md:text-6xl font-bold'>Get Ready to Feel <br /> Your Best</p></Slide>
      <Fade delay={1e3} cascade damping={2e-1}><p className=' md:text-xl font-bold'>Yoga, meditation, and mindful fitness to inspire your wellness goals. <br /> Fulfill your soul in this summer camp</p></Fade>
      <button className='btn glass font-bold text-white mx-auto btn-sm md:btn-md lg:btn-lg mt-3 md:mt-5'>Join Us Today</button>
      </div>
      <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
        <a href="#slide4" className="text-white md:btn md:btn-circle">❮</a> 
        <a href="#slide2" className="text-white md:btn md:btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/L0vHt93/signal-2023-06-06-210008-002.jpg" className="w-full md:h-[100vh]" />
      <div className='absolute inset-0 opacity-40 bg-black w-full h-[100vh]'></div>
      <div className='absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white'>
      <Slide><p className='text-2xl md:text-6xl font-bold'>Get Ready to Feel <br /> Your Best</p></Slide>
      <Fade delay={1e3} cascade damping={2e-1}><p className=' md:text-xl font-bold'>Yoga, meditation, and mindful fitness to inspire your wellness goals. <br /> Fulfill your soul in this summer camp</p></Fade>
      <button className='btn glass font-bold text-white mx-auto btn-sm md:btn-md lg:btn-lg mt-3 md:mt-5'>Join Us Today</button>
      </div>
      <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
        <a href="#slide1" className="text-white md:btn md:btn-circle">❮</a> 
        <a href="#slide3" className="text-white md:btn md:btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/3Wdq06L/signal-2023-06-06-210008-005.jpg" className="w-full md:h-[100vh]" />
      <div className='absolute inset-0 opacity-40 bg-black w-full h-[100vh]'></div>
      <div className='absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white'>
      <Slide><p className='text-2xl md:text-6xl font-bold'>Get Ready to Feel <br /> Your Best</p></Slide>
      <Fade delay={1e3} cascade damping={2e-1}><p className=' md:text-xl font-bold'>Yoga, meditation, and mindful fitness to inspire your wellness goals. <br /> Fulfill your soul in this summer camp</p></Fade>
      <button className='btn glass font-bold text-white mx-auto btn-sm md:btn-md lg:btn-lg mt-3 md:mt-5'>Join Us Today</button>
      </div>
      <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
        <a href="#slide2" className="text-white md:btn md:btn-circle">❮</a> 
        <a href="#slide4" className="text-white md:btn md:btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/PWjwypR/signal-2023-06-06-210008-004.jpg" className='w-full md:h-[100vh] '/>
    <div className='absolute inset-0 opacity-40 bg-black w-full h-[100vh]'></div>
    <div className='absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white'>
      <Slide><p className='text-2xl md:text-6xl font-bold'>Get Ready to Feel <br /> Your Best</p></Slide>
      <Fade delay={1e3} cascade damping={2e-1}><p className=' md:text-xl font-bold'>Yoga, meditation, and mindful fitness to inspire your wellness goals. <br /> Fulfill your soul in this summer camp</p></Fade>
      <button className='btn glass font-bold text-white mx-auto btn-sm md:btn-md lg:btn-lg mt-3 md:mt-5'>Join Us Today</button>
      </div>
      <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
        <a href="#slide3" className="text-white md:btn md:btn-circle">❮</a> 
        <a href="#slide1" className="text-white md:btn md:btn-circle">❯</a>
      </div>
    </div>
  </div>
    );
};

export default Banner;