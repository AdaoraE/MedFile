import React from "react";
import { useState } from "react";
import Control from "./images/Sidebar/Control.png"
import symbol from "./images/Sidebar/symbol.png"
import Compare from "./images/Sidebar/Compare.png"
import Dashboard from "./images/Sidebar/Dashboard.png"
import filetext from "./images/Sidebar/filetext.png"
import helpcircle from "./images/Sidebar/helpcircle.png"
import like from "./images/Sidebar/like.png"
import logout from "./images/Sidebar/logout.png"
import People from "./images/Sidebar/People.png"
import settings from "./images/Sidebar/settings.png"
import users from "./images/Sidebar/users.png"
import Vector from "./images/Sidebar/Vector.png"


function Sidebar() {
    const [open, setOpen] = useState(true);
    
    return (
      <div className="flex">
        <div className={`${ open ? "w-72" : "w-20"} h-[1111px] bg-main-color relative duration-300`}>
        
          <img src={Control} alt="" className={`absolute cursor-pointer -right-3 top-4 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>

          <div className="mt-10">

            <div className="flex">

              <img src={symbol} alt="" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} ${open ? "ml-8" : "ml-4"}`}/>

              <div className={`origin-left duration-200 ml-3 flex flex-col self-end ${!open && "scale-0"}`}>
                <h1 className="font-Montserrat font-bold text-2xl leading-7 text-white">
                  Medfile
                </h1>

                <p className="font-Montserrat font-medium text-xs leading-3 whitespace-nowrap text-white">
                  ... evolving health service.
                </p>
              </div>
            </div>
  
            <ul className={`mt-16 ${open ? "ml-10" : "ml-6"}`}>
              <li className="flex items-center ">
                <img src={Dashboard} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-light duration-200 ${!open && "scale-0"}`}>
                  Dashboard
                </span>
              </li>

              <li className="flex items-center mt-8">
                <img src={Compare} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Case Files
                </span>
              </li>

              <li className="flex items-center mt-8">
                <img src={users} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Patients
                </span>
              </li>

              <li className="flex items-center mt-8">
                <img src={People} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Team
                </span>
              </li>

              <li className="flex items-center mt-8">
                <img src={filetext} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Report & Resources
                </span>
              </li>

              <li className="flex items-center mt-8">
                <img src={settings} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Settings
                </span>
              </li>

              <li className="flex items-center mt-8">
                <img src={helpcircle} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Help and Support
                </span>
              </li>

              <li className={`mt-24 mr-10 relative rounded-lg bg-accents h-48 flex flex-col ${!open && "hidden"}`}>
                <img src={like} alt="" className="absolute left-14 -top-10"/>
                
                <p className="ml-4 mt-16 font-Montserrat font-light text-lg leading-5 text-text-color">
                  Upgrade your app<br/> to access more<br/> features!
                </p>

                <div className="flex ml-4 mt-4">
                  <span className="font-Montserrat font-normal text-text-color text-xl">
                    Upgrade now
                  </span>
                 
                  <img src={Vector} alt="" className="ml-3.5 w-1.5 h-3 self-center"/>                   
                </div>
              </li>

              <li className={`flex items-center ${ open ? "mt-[57px]" : "mt-[349px]"}`}>
                <img src={logout} alt="" className="rounded cursor-pointer duration-500"/>

                <span className={`font-Montserrat font-medium text-sm leading-4 ml-6 text-blue-active duration-200 ${!open && "scale-0"}`}>
                  Log Out
                </span>
              </li>

            </ul>
          
          </div>
        </div>        
      </div>
    )
 }
  
export default Sidebar