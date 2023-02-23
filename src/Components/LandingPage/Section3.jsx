 import React from 'react'
import { FaStar } from 'react-icons/fa'
function Section3() {
  const circleStyle = {
    width: '10.5rem',
    height: '10.5rem',
    border: '2px solid #FD9C24 ',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <section className='bg-[#E7F5F9] h-[23rem] pt-20'>
     
      <div>
        <h3 className='w-[482px] h-[65px]font-medium text-2xl text-[#333333;]'>Here&#39;s what our customers will experience after implementing Medfile</h3>
      </div>
      <div className='flex justify-between items-center gap-10'>
        <div>
          <div className='border-[1px] w-[482px]  border-[#0C97C2] mt-6'></div>
          <div className='flex gap-2 text-yellow mt-6'>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <a href="/"><FaStar /></a> 
            {/* REMOVE THE a TAG */}
          </div>
          <p className=' w-[482px] font-normal leading-5 text-base mt-5'>Medfile offers cloud based fully integrated Electronic Medical Record (EMR) solution designed and developed specifically to suit the requirements of Hospitals, Specialty and diagnostic centers.</p>
        </div>

        <div className='flex'>
          <div style={circleStyle}>90%</div>
          <div style={circleStyle} >90%</div>
          <div style={circleStyle}>90%</div>
          <div style={circleStyle}>90%</div>
        </div></div>
      
    </section>
  )
}

export default Section3
