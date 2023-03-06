import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Part2Page from './Part2Page'
import RepresentationBox from './RepresentationBox'
function SignUp() {
  return (
   
          <div name='Login' className='flex flex-col md:flex-row justify-between md:w-[1512px] '>

              <div className='bg-white w-[756px] px-20 pt-10 h-[982px]'>

                  <a href="/"><img src={Logo} alt="" /></a>

                  <div className='mt-24 '>
                  <h2 className='font-semibold text-4xl'>Create your Medfile Account</h2>
                      <p className=' text-lg font-normal mt-3 mb-6'>Kindly select the role you represent </p>
                  </div>
                  <div className='flex justify-between mb-10'>
                      <RepresentationBox text="Hospital" />
                      <RepresentationBox text="Laboratory" />
                      <RepresentationBox text="Healthcare Facility" />
                      
                  </div>
                  <div className='flex flex-col gap-6 '>
                      <input type="text" placeholder="Email" className='border-[1px] border-[#6A737C] p-3 rounded-lg ' />
                      <select className='border-[1px] border-[#6A737C] p-3 rounded-lg text-[#6A737C]'>
                          <option>Select Hospital</option>
                          <option>Lagos state university teaching hospital</option>
                          <option>University of Abuja Teaching Hospital</option>
                      </select>
                      <input type="text" placeholder="Password" className='border-[1px] border-[#6A737C] p-3 rounded-lg' />
                  <input type="text" placeholder="Confirm password" className='border-[1px] border-[#6A737C] p-3 rounded-lg' />
                  </div>
                  <div className='mt-6'>
              <input type="checkBox"/> <span className='text-[#6A737C]  leading-none'>I agree to the Terms and Conditions, Privacy Policy, and Telehealth Consent</span></div>
              <div className='bg-main-color mt-11 rounded-lg py-3 font-medium text-xl text-center text-white hover:scale-105 hover:bg-[#097192]'>Create Account</div>

              <p className='mt-5 text-center text-[#6A737C]'>Already have an account? <Link to='/login' className='text-main-color border-b-2 border-main-color w-fit hover:scale-105 hover:text-[#097192] hover:border-[#097192]'>Sign in</Link></p>
              </div>

              <Part2Page />


          </div>
  
  )
}

export default SignUp