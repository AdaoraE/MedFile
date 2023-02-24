import React from 'react'
import Headings from './SingleComponent/Headings'
import LightBulb from './images/light-bulb-1.png'
import Report from './images/report.png'
import BusinessReport from './images/business-report.png'
import CloudComputing from './images/cloud-computing.png'

import { AiOutlineArrowRight } from 'react-icons/ai'
function FeatureSection() {
  return (
    <section className='flex flex-col items-center'>
      <div className='flex flex-col text-center'>
        <Headings text='Features' />
        <p className='w-[1145px] font-normal text-xl text-text-color mt-9'>Medfile is a software network for hospitals to document patient details and case files electronically. The secure and advanced digital record management system ensures medical professionals can access critical information from anywhere, all-at-once.</p>
      </div>
      <div className='flex flex-row gap-6 mb-20'>

        <div className='flex flex-col gap-7  w-[320px] justify-center items-center p-6'>
          <div className='bg-[#DBEFF6] rounded-xl w-[138px] h-[128px] flex items-center justify-center'>
            <img src={LightBulb} alt="" className='text-[88px]' />
          </div>
          <div className='w-[272px] border-[1px] border-main-color rounded'></div>
          <h3 className='text-text-color text-3xl font-medium'>Easy and Intuitive</h3>
          <p className='w-[261px] text-base text-center' >Easily converse with your data using everyday language.</p>
          <p className='text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </p>
        </div>

        <div className='flex flex-col gap-7  w-[320px] justify-center items-center p-6'>
          <div className='bg-[#075B74] rounded-xl w-[138px] h-[128px] flex items-center justify-center'>
            <img src={Report} alt="" className='text-[88px]' />
          </div>
          <div className='w-[272px] border-[1px] border-main-color rounded'></div>
          <h3 className='text-text-color text-3xl font-medium'>Reporting Tool</h3>
          <p className='w-[261px] text-base text-center  text-text-color' >Create cases with easy-to-use and fill custom forms.</p>
          <p className='text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </p>
        </div>


        <div className='flex flex-col gap-7  w-[320px] justify-center items-center p-6'>
          <div className='bg-[#0A799B] rounded-xl w-[138px] h-[128px] flex items-center justify-center'>
            <img src={BusinessReport} alt="" className='text-[88px]' />
          </div>
          <div className='w-[272px] border-[1px] border-main-color rounded'></div>
          <h3 className='text-text-color text-3xl font-medium'>Reporting Tool</h3>
          <p className='w-[261px] text-base text-center' >Create cases with easy-to-use and fill custom forms.</p>
          <p className='text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </p>
        </div>

        <div className='flex flex-col gap-7  w-[320px] justify-center items-center p-6'>
          <div className='bg-[#075B74] rounded-xl w-[138px] h-[128px] flex items-center justify-center'>
            <img src={CloudComputing} alt="" className='text-[88px]' />
          </div>
          <div className='w-[272px] border-[1px] border-main-color rounded'></div>
          <h3 className='text-text-color text-3xl font-medium'>Always in Sync</h3>
          <p className='w-[261px] text-base text-center  text-text-color' >Automated update of medical cases record across board.</p>
          <p className='text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </p>
        </div>

      </div>
    </section>
  )
}

export default FeatureSection
