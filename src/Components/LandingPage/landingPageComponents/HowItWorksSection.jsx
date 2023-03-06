import React from 'react'
import Headings from './SingleComponent/Headings'
import YoutubeFrame from '../images/Frame.png'
import LiSection from './SingleComponent/LiSection'
function HowItWorksSection() {
  return (
    <>
      <section  className='bg-[#E7F5F9] py-6 '>
        <Headings text='How it Works' />
       <div className='flex flex-col xl:flex-row justify-between gap-10 items-center mt-9'>
          <a href="https://www.youtube.com/@tech4devhq618" target='_blank' rel="noreferrer" className='hover:scale-105'> <img src={YoutubeFrame} alt="" width='100%'/></a>
         <div>
           <h3 className='font-semibold text-3xl mb-4'>The best medical file solution for healthcare providers</h3>
           <ul className='test-sm font-normal space-y-4'>
             <LiSection text='We provide a web based medical file system for hospitals and other healthcare facilities.' />
             <LiSection text='We offer a complete solution for managing patient data and case files.' />
             <LiSection text='We offer an electronic health records system for hospitals and medical facilities.' />
           </ul>
         </div>
       </div>
   
    </section>
    </>
  )
}

export default HowItWorksSection
