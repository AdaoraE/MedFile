import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll";
import Logo from '../images/logo.png'
import navData from './navData.json'
import Aos from 'aos';
import 'aos/dist/aos.css'


function NavBar() {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        
        <nav className='bg-white border-b-[0.03rem] border-[#B4DFEC] h-[60px] flex justify-between items-center px-20 font-semibold fixed z-50 w-full'>

            <div>
                <Link
                    activeClass="active"
                    to={'/'}
                    spy={true}
                    smooth={true}
                    duration={500}
                ><img src={Logo} alt='' className='w-28 cursor-pointer' /></Link>
            </div>

            <ul className='hidden lg:flex'>
                {navData.map(({ id, title }) =>
                    <li
                        key={id}
                        className='px-4 cursor-pointer font-medium hover:scale-125 duration-300 capitalize focus:border-b-[3px]'>
                        <Link
                            activeClass="active"
                            to={title}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >{title}</Link>
                    </li>
                )}

            </ul>

            {/* icons */}
            <div
                className='cursor-pointer pr-4 z-10 text-black lg:hidden'
                onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* links for responsive navbar */}
            {nav && (

                <ul className='flex flex-col items-center absolute top-0 right-0 w-80 h-screen bg-main-color text-white'>
                    {navData.map(({ id, title }) =>
                    <div className='mt-20'>
                        <li
                            key={id}
                            className='px-4 cursor-pointer capitalize  text-4xl'>
                            <Link
                                activeClass="active"
                                to={title}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setNav(!nav)}
                            >{title}</Link>
                        </li>
                        </div>
                    )}
                    <div className='text-4xl hidden md:flex md:flex-col items-center gap-20 mt-20 text-main-color text-center cursor-pointer '>
                        <span className=' bg-white w-72 py-2 rounded-lg'>Log in</span>
                        <span className=' bg-white rounded-lg w-72 py-2 '>Get Started</span></div>

                    {/* <div className='flex'>
                        <div className='text-[1rem] text-main-color p-2 font-normal'>
                            <span>Log in</span>
                            <span className='ml-10 bg-main-color text-white p-2 rounded-lg'>Get Started</span>
                            </div></div> */}
                </ul>
            )}

            <div className='hidden lg:flex'>
                <div className='text-[1rem] text-main-color p-2 font-normal'>
                    <span>Log in</span>
                    <span className='ml-10 bg-main-color text-white p-2 rounded-lg'>Get Started</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

