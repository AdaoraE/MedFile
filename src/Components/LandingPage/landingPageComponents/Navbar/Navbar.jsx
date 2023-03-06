import React from 'react'
import NavbarList from './NavbarList'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'




function NavBar() {
   
return(
    <>
        <nav className='bg-white border-b-[0.03rem] border-[#B4DFEC] h-[60px] flex justify-between items-center px-20 font-semibold fixed z-50 w-full'>
            <div>
                
                   <a href="/"><img src={Logo} alt='' className='w-28 cursor-pointer' /></a> 
            </div>

    <NavbarList/>
            <div className='hidden lg:flex'>
                <div className='text-[1rem] text-main-color p-2 font-normal'>


                
                    <Link to="/login" className='text-main-color  py-2 px-[10px] rounded-lg border-2 border-main-color hover:bg-main-color hover:text-white text-base '> Log in </Link>
                   

                   


                    
                    <span className='ml-10 bg-main-color hover:bg-[#0A799B]  text-white py-2 px-[10px] rounded-lg border-2 border-main-color hover:border-[#0A799B]'>Get Started</span>
                </div>
            </div></nav>
            </>

    )
}

export default NavBar

