import React,{useState} from 'react'
import navData from './navData.json'

function NavbarList() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

          <div className='hidden md:flex gap-x-16 list-none text-sm leading-3'>
              {navData.map(({id,title, subTitle}) => {
                  return (
                      <ul className='relative bg-main-color p-2 '>
                          <li className='text-black '
                              key={id}
                              onClick={() => setIsOpen(prev=>!prev)}
                        //   onMouseEnter={() => setIsOpen(true)}
                        //   onMouseLeave={() => setIsOpen(false)}
                          >{title}
                          </li>
                          {isOpen && <li className='flex flex-col gap-5 mt-7text-[#6A737C]'>{subTitle}
                          </li>}
                          



                      </ul>
                  )
              })}

          </div>
    </div>
  )
}

export default NavbarList
