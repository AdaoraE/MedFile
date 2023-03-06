import React from 'react'
import { Link } from 'react-router-dom'
import Dashboardpic from '../images/login.png'
import LeftEllipse from '../images/LoginEllipse.png'
import RightEllipse from '../images/loginEllipseRight.png'
import Exclude from '../images/LoginExclude.png'
import EllipseButtomLeft from '../images/EllipseButtomLeft.png'
import EllipseButtomRight from '../images/EllipseButtomRight.png'

function Part2Page() {
  return (
    <div>


          <div className='bg-main-color w-[756px] h-[982px] px-[5rem] py-10 relative'>
              <div>
                  <img src={LeftEllipse} alt="" className='absolute top-0 left-1' />
                  <img src={RightEllipse} alt="" className='absolute top-0 right-0' />
              </div>
              <div className='flex justify-between items-center'>
                  {/* <NavbarList /> */}
                  <ul className='flex gap-7 font-semibold text-base text-[#333333] z-50 '>
                      <li>Product</li>
                      <li>Resources</li>
                      <li>Pricing</li>
                      <li>Company</li>
                  </ul>

                  <Link to='/signUp' className='ml-10 bg-white hover:bg-[#03536b] hover:text-white text-main-color py-2 px-[10px] rounded-lg '>Get Started</Link>
              </div>
              <div className='relative'>
                  <img src={Dashboardpic} alt="" className=' mt-36' />
                  <img src={Dashboardpic} alt="" className='absolute top-24 left-20' />
                  <h3 className='font-semibold text-2xl text-center text-white mt-40 '>The Best Tool To <span className='text-[#043544]'>Supercharge</span> Your<br /> Medical Processes.</h3>
                  <div className='relative '>
                      <img src={EllipseButtomLeft} alt="" className='absolute top-32 -left-20' />
                      <img src={EllipseButtomRight} alt="" className='absolute top-32 -right-20' />
                      <img src={Exclude} alt="" className='absolute top-[162px] left-20' />
                      <img src={Exclude} alt="" className='absolute top-[162px] right-20' />

                  </div>
              </div>

          </div>
    </div>
  )
}

export default Part2Page