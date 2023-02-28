 import React from 'react'
import { FaStar } from 'react-icons/fa'
function Section3() {
  return (
    <section className='bg-[#E7F5F9] py-20 flex flex-col items-center md:items-start'>
      <div>
        <h3 className='font-medium text-2xl text-[#333333;] '>Here&#39;s what our customers will<br/> experience after implementing Medfile</h3>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10'>
        <div>
          <div className='border-[1px] w-[30rem]  border-[#0C97C2] mt-6'></div>
          <div className='flex gap-2 text-yellow mt-6'>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <a href="/"><FaStar /></a> 
            {/* REMOVE THE a TAG */}
          </div>
          <p className=' w-[30rem] font-normal leading-5 text-base mt-5'>Medfile offers cloud based fully integrated Electronic Medical Record (EMR) solution designed and developed specifically to suit the requirements of Hospitals, Specialty and diagnostic centers.</p>
        </div>

        <div className='flex'>
          <div className=' w-[8rem] h-[8rem] xl:w-[10.5rem] xl:h-[10.5rem] border-2 border-yellow border-solid rounded-full flex items-center justify-center'>90%</div>
          <div className=' w-[8rem] h-[8rem] xl:w-[10.5rem] xl:h-[10.5rem] border-2 border-yellow border-solid rounded-full flex items-center justify-center'>90%</div>
          <div className=' w-[8rem] h-[8rem] xl:w-[10.5rem] xl:h-[10.5rem] border-2 border-yellow border-solid rounded-full flex items-center justify-center'>90%</div>
          <div className=' w-[8rem] h-[8rem] xl:w-[10.5rem] xl:h-[10.5rem] border-2 border-yellow border-solid rounded-full flex items-center justify-center'>90%</div>
          
          

          
          
        </div>
        </div>
      
    </section>
  )
}

export default Section3
