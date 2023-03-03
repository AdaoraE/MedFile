import React, { useEffect, useState } from 'react'
import PopUpCard from './PopUpCard';
import DashboardImage1 from '../images/Dashboard-img1.png'
import DashboardImage2 from '../images/Dashboard-img2.png'

function Hero() {
  const images = [DashboardImage1, DashboardImage2];
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])


  




  return (
    
    <section name='Product' className='flex flex-col items-center'>

      <h1 className='capitalize text-3xl md:text-7xl font-semibold mt-32 text-center'>digital transformation made <br />easy with <span className='text-main-color'>medfile</span></h1>
      <p className='font-normal text-lg md:text-2xl leading-7 pt-6 pb-10 text-center'>Introducing a new classification system that enhances clinical documentation and provides more efficient management of patient information </p>


      {/* DEMO CLICK */}
      <div className='relative'>
        
          <PopUpCard/>
          {/* <input disabled placeholder='Enter your email address' className='w-[12rem] md:w-[25rem] lg:w-[30rem] h-12 text-main-color font-light placeholder-main-color border-2 border-main-color px-3 rounded-tl-lg rounded-bl-lg text-start' /> */}
        {/* <button type='submit' className='bg-main-color text-white
        w-[5rem] md:w-[20rem] h-12 rounded-tr-lg rounded-br-lg' >Request Demo</button> */}
          <button type='submit' className='bg-main-color text-white
        w-[15rem] md:w-[30rem] h-12 rounded-lg font-semibold text-xl ' >Request Demo</button>
        </div>

      <div className='mt-20 w-[1113px] h-[809px] border-main-color text-center overflow-hidden text-5xl'>
        <img src={currentImage} alt="" className='w-full ' />

      </div>

    </section>
  )
}

export default Hero





      