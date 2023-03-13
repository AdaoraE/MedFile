import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import navData from "./navData.json";
function NavbarList() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <ul className="hidden lg:flex z-[80]">
        {navData.map(({ id, title, link }) => (
          <Link
            to={link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            key={id}
          >
              <li
                tabIndex={0}
                className=" m-1 px-4 cursor-pointer font-medium hover:scale-125 duration-300 capitalize focus:border-b-[3px]"
              >
                {title}
              </li>
          </Link>
        ))}
      </ul>

      {/* icons */}
      <div
        className="cursor-pointer pr-4 text-black lg:hidden z-[200]"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* links for responsive navbar */}
      {nav && (
        <ul className="flex flex-col items-center absolute top-0 right-0 w-80 h-screen bg-main-color text-white lg:hidden z-[100]">
          <div className="mt-5">
          {navData.map(({ id, title,link }) => (
            <div className="mt-10">
              <Link
                to={link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
                key={id}
              >
                <li className="px-4 cursor-pointer capitalize  text-3xl" onClick={() => setNav(!nav)}> {title} </li>
              </Link>
            </div>
          ))}
          </div>
          <div className="text-4xl items-center mt-10 text-main-color text-center cursor-pointer ">
            <button className=" bg-white  p-2 rounded-lg">Log in</button>
            <button className=" bg-white rounded-lg p-2  mt-6">Get Started</button>
          </div>
        </ul>
      )}
    </>
  );
}

export default NavbarList;
