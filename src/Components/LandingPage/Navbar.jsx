import React from 'react'
import Logo from './images/logo.png'
function Navbar() {
    return (
        <>
            <nav className='bg-white border-b-[0.03rem] h-24 flex justify-between items-center px-16 font-semibold'>
                <div>
                    <img src={Logo} alt="" />
                </div>

                <div className='hidden md:flex gap-x-16 list-none text-sm leading-3 text-black'>
                    <li>Product</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                    <li>Company</li>
                </div>
                <div className='hidden md:flex'>
                <div className='text-[1rem] text-main-color p-2 font-normal'>
                    <span>Log in</span>
                    <span className='ml-10 bg-main-color text-white p-2 rounded-lg'>Get Started</span>
                </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
