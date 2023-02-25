import React from 'react'
import Headings from './SingleComponent/Headings'
import YoutubeFrame from './images/Frame.png'
import LiSection from './SingleComponent/LiSection'
function HowItWorksSection() {
  return (
    <section className='bg-[#E7F5F9] h-[29rem] pt-8'>
          <Headings text='How it Works'/> 
          <div className='flex flex-row justify-between items-center mt-9'>
        <img src={YoutubeFrame} alt="" />
        <div>
          <h3 className='w-[42rem] font-semibold text-3xl mb-4'>The best medical file solution for healthcare providers</h3>
          <ul className='test-sm font-normal space-y-4'>
            <LiSection text='We provide a web based medical file system for hospitals and other healthcare facilities.'/>
            <LiSection text='We offer a complete solution for managing patient data and case files.'/>
            <LiSection text='We offer an electronic health records system for hospitals and medical facilities.' />
          </ul>
        </div>
          </div>
    </section>
  )
}

export default HowItWorksSection
