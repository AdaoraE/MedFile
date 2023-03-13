import React from 'react'
import Headings from './SingleComponent/Headings'
import LightBulb from '../images/light-bulb-1.png'
import Report from '../images/report.png'
import BusinessReport from '../images/business-report.png'
import CloudComputing from '../images/cloud-computing.png'

import { AiOutlineArrowRight } from 'react-icons/ai'
function FeatureSection() {
  return (
    <section name='feature'>
      <div className='flex flex-col items-center'>
      <div className='text-center'>
        <Headings text='Features' /> 
        <p className=' font-normal text-xl text-text-color my-9'>Medfile is a software network for hospitals to document patient details and case files electronically. The secure and advanced digital record management system ensures medical professionals can access critical information from anywhere, all-at-once.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20'> 

        <div className='flex flex-col gap-7 justify-center items-center hover:shadow-2xl hover:rounded-xl p-6'>
          <div className='bg-[#DBEFF6] rounded-xl w-[8.6rem] h-[8rem] flex items-center justify-center'>
            <img src={LightBulb} alt=""  />
          </div>
            <div className='w-[13rem] md:w-[18rem] border-[1px] border-main-color rounded'></div>
            <h3 className='text-text-color text-2xl font-medium text-center h-20 '>Easy and Intuitive</h3>
            <p className='h-20 w-60 md:w-full text-base text-center -mt-10' >Easily converse with your data using everyday language.</p>
            <p className=' text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </p>
        </div>




          <div className='flex flex-col gap-7  justify-center items-center hover:shadow-2xl hover:rounded-xl p-6  '>
            <div className='bg-[#0C97C2] rounded-xl w-[8.6rem] h-[8rem] flex items-center justify-center'>
              <img src={Report} alt="" />
            </div>
            <div className='w-[13rem] md:w-[18rem] border-[1px] border-main-color rounded'></div>
            <h3 className='text-text-color text-2xl font-medium text-center h-20  '>Embedded Analytics</h3>
            <p className='h-20 w-60 md:w-full text-base text-center -mt-10' >Get a powerful analytics tool for your hospital/laboratory.</p>
            <p className=' text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
            </p>
          </div>




          <div className='flex flex-col gap-7  justify-center items-center hover:shadow-2xl hover:rounded-xl p-6  '>
            <div className='bg-[#0A799B] rounded-xl w-[8.6rem] h-[8rem] flex items-center justify-center'>
              <img src={BusinessReport} alt="" />
            </div>
            <div className='w-[13rem] md:w-[18rem] border-[1px] border-main-color rounded'></div>
            <h3 className='text-text-color text-2xl font-medium text-center h-20  '>Reporting Tool</h3>
            <p className=' h-20 w-60 md:w-full text-base text-center -mt-10' >Create cases with easy-to-use and fill custom forms.</p>
            <p className='text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
            </p>
          </div>
  




          <div className='flex flex-col gap-7  justify-center items-center hover:shadow-2xl hover:rounded-xl p-6  '>
            <div className='bg-[#075B74] rounded-xl w-[8.6rem] h-[8rem] flex items-center justify-center'>
              <img src={CloudComputing} alt="" />
            </div>
            <div className='w-[13rem] md:w-[18rem] border-[1px] border-main-color rounded'></div>
            <h3 className='text-text-color text-2xl font-medium text-center h-20  '>Always in Sync</h3>
            <p className=' h-20 w-60 md:w-full text-base text-center -mt-10' >Automated update of medical cases record across board.</p>
            <p className='text-xl text-main-color inline-block '>Learn More <AiOutlineArrowRight className=' inline-block' />
            </p>
          </div>


    

      </div>
      </div>
    </section>
  )
}

export default FeatureSection
