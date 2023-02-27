import React from 'react'

function Hero() {
  return (
    <section className='flex flex-col justify-center items-center mt-[4.5rem]  text-center'>
      <h1 className='capitalize text-4xl md:text-7xl font-semibold border-2'>digital transformation made easy with <span className='text-main-color'>medfile</span></h1>
      <p className='font-normal text-2xl leading-7 pt-6 pb-10'>Introducing a new classification system that enhances clinical documentation and provides more efficient management of patient information </p>
      <div>
        <input type="text" placeholder='Enter your email address' className='w-[30rem] h-12 text-main-color  font-light placeholder-main-color border-2 border-main-color px-3 rounded-tl-lg rounded-bl-lg text-start' />
        <button type='submit' className='bg-main-color text-white
        w-36 h-12 rounded-tr-lg rounded-br-lg ' >Request Demo</button>
      </div>

     
      <div className='text-6xl m-10 p-20 border-2 border-main-color'> 
   input dashboard iframe 
        {/* <iframe src="" frameborder="0"></iframe> */}
      </div>

    </section>
  )
}

export default Hero
