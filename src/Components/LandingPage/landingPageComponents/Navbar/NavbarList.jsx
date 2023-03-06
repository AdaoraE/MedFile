import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"



import navData from './navData.json'


function NavbarList() {
  const [nav, setNav] = useState(false);

  return (

    <>


      <ul className='hidden lg:flex'>
        {navData.map(({ id, title,link }) =>
         <a href={link}>
          <li
            key={id}
            className='px-4 cursor-pointer font-medium hover:scale-125  duration-300 capitalize focus:border-b-[3px]'>
            {title}
          </li></a>
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

        <ul className='flex flex-col items-center absolute top-0 right-0 w-80 h-screen bg-main-color text-white md:hidden'>
          {navData.map(({ id, title }) =>
            <div className='mt-20'>
              <a href={title} key={id} onClick={() => setNav(!nav)}>
                <li
                  className='px-4 cursor-pointer capitalize  text-4xl'>
                  {title}
                </li></a>
            </div>
          )}
          <div className='text-4xl items-center mt-20 text-main-color text-center cursor-pointer '>
            <div className=' bg-white  p-2 rounded-lg'>Log in</div>
            <div className=' bg-white rounded-lg p-2  mt-14'>Get Started</div></div>
        </ul>
      )}
    </>
  )
}

export default NavbarList
