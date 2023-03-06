import React from 'react'
import Logo from '../images/logo.png'
import RepresentationBox from './RepresentationBox'
import Dashboardpic from '../images/login.png'
import LeftEllipse from '../images/LoginEllipse.png'
import RightEllipse from '../images/loginEllipseRight.png'
import Exclude from '../images/LoginExclude.png'
import EllipseButtomLeft from '../images/EllipseButtomLeft.png'
import EllipseButtomRight from '../images/EllipseButtomRight.png'
function Login() {
    return (
        <div name='Login' className='flex flex-col md:flex-row justify-between md:w-[1512px] border-l-green-700  '>

            <div className='bg-white w-[756px] px-20 pt-10 h-[982px]'>

                <a href="/"><img src={Logo} alt="" /></a>

                <div className='mt-24 '>
                    <h2 className='font-semibold text-4xl'>Login to your dashboard</h2>
                    <p className=' text-lg font-normal mt-3 mb-6'>Kindly select the role you represent </p>
                </div>
                <div className='flex justify-between gap-5 mb-10'>
                    <RepresentationBox text="Admin" />
                    <RepresentationBox text="Doctor" />
                    <RepresentationBox text="Nurse" />
                    <RepresentationBox text="Lab Attendant" />
                </div>
                <div className='flex flex-col gap-6 '>
                    <input type="text" placeholder="Email" className='border-[1px] border-[#6A737C] p-3 rounded-lg ' />
                    <select className='border-[1px] border-[#6A737C] p-3 rounded-lg text-[#6A737C]'>
                        <option>Select Hospital</option>
                        <option>Lagos state university teaching hospital</option>
                        <option>University of Abuja Teaching Hospital</option>

                    </select>
                    <input type="text" placeholder="Password" className='border-[1px] border-[#6A737C] p-3 rounded-lg' />
                </div>
                <div className='border-b-2 mt-7 text-[#6A737C] border-[#6A737C] w-fit leading-none'>Forget Password?</div>
                <div className='bg-main-color mt-11 rounded-lg py-3 font-medium text-xl text-center text-white'>Log In</div>



            </div>




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

                    <span className='ml-10 bg-white hover:bg-[#03536b] hover:text-white text-main-color py-2 px-[10px] rounded-lg '>Get Started</span>
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

export default Login
