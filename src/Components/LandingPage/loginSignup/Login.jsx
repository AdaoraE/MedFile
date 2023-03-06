import React from 'react'
import Logo from '../images/logo.png'
import Part2Page from './Part2Page'
import RepresentationBox from './RepresentationBox'
function Login() {
    return (
        <div name='Login' className='flex flex-col md:flex-row justify-between md:w-[1512px]'>

            <div className='w-[47.25rem] px-14 pt-10 h-[61.375rem] '>
                <a href="/"><img src={Logo} alt="" /></a>
                <div className='mt-24 '>
                    <h2 className='font-semibold text-4xl'>Login to your dashboard</h2>
                    <p className=' text-lg font-normal mt-3 mb-6'>Kindly select the role you represent </p>
                </div>
                <div className='flex justify-between gap-2 mb-10'>
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

            <Part2Page />


        </div>
    )
}

export default Login
