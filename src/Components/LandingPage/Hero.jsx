import React from 'react'
import DashboardImage from './images/Admin.png'
function Hero() {
  return (
    <section name='Product' className='flex flex-col items-center'>
      
      <h1 className='capitalize text-3xl md:text-7xl font-semibold mt-32 text-center'>digital transformation made <br/>easy with <span className='text-main-color'>medfile</span></h1>
      <p className='font-normal text-lg md:text-2xl leading-7 pt-6 pb-10 text-center'>Introducing a new classification system that enhances clinical documentation and provides more efficient management of patient information </p>
   
      <div className='flex flex-row text-sm md:text-base '>
        <input type="text" placeholder='Enter your email address' className='w-[12rem] md:w-[25rem] lg:w-[30rem] h-12 text-main-color font-light placeholder-main-color border-2 border-main-color px-3 rounded-tl-lg rounded-bl-lg text-start' />
        <button type='submit' className='bg-main-color text-white
        w-[5rem] md:w-[10rem] h-12 rounded-tr-lg rounded-br-lg' >Request Demo</button>
      </div>

     


{/* REQUEST A DEMO */}







      <div className='mt-20 w-[1113px] h-[809px] border-main-color text-center overflow-hidden text-5xl'> 
<img src={DashboardImage} alt="" className='w-full '/>
        {/* <iframe src="" frameborder="0"></iframe> */}
      </div>

    </section>
  )
}

export default Hero
