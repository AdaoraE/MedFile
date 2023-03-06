import React from 'react'
import Logo from '../../images/footerLogo.png'
import { FiPhone } from 'react-icons/fi'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { RiTwitterLine } from 'react-icons/ri'
import { SlSocialLinkedin, SlSocialFacebook } from 'react-icons/sl'
import links from './linkData'
function Footer() {
  return (
    <section className='bg-[#0A799B]  text-white '>
      <div className='flex flex-col lg:flex-row justify-between gap-10 pt-20 text-base md:text-2xl lg:text-base'>

        <div>
          <img src={Logo} alt="Medfile Logo" />
          <p className=' font-normal mt-6 lg:w-[380px]'>We built an efficient solution just for you.
            Our product solves the problem of manual documentation of patient details and case files in Nigerian hospitals which is time-consuming and error-prone process. </p>
          <div className='text-white mt-10'>
            <div className='flex items-center gap-4 mb-5'>
              <RxEnvelopeClosed /> <p>Contact@medfile.org</p>
            </div>
            <div className='flex items-center gap-4'>
              <FiPhone /> <p>+234-00-1111-234</p>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-10'>

          {links.map(({id, heading, list }) => {
            return (

              <div key={id}>
                <div className='text-2xl font-semibold'>
                  {heading}</div>

                <div className='flex flex-col gap-5 mt-7 '>
                  {list.map((listItem, i) => <p key={i} className='hover:text-main-color'>{listItem} </p>)}
                </div>
              </div>

            )
          })}





        </div>


      </div>

      <hr />
      <div className='flex flex-col lg:flex-row  justify-between items-center my-6 text-xl'>
        <p>Copyright @ Medfile. All Right Reserved.</p>
        <p>Terms of Service</p>
        <div className='flex gap-8'>
          < RiTwitterLine />
          <SlSocialLinkedin />
          <SlSocialFacebook />
        </div>
      </div>
    </section>
  )
}

export default Footer
