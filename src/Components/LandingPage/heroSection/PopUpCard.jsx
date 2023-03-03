import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa"
function PopUpCard() {
    const [isPopUp, setPopUp] = useState(false)
    const handlesPopUp = () => {
        setPopUp(prev => prev = !prev) //popup to appear and disappear
    }
    // useEffect(() => {
    //     if (isPopUp) {
    //         document.body.style.backgroundColor('red')
    //     } else {
    //         document.body.style.backgroundColor('deeppink')
    //     }
    // }, [isPopUp]);
  return (
      <div className='flex flex-row text-sm md:text-base' onClick={handlesPopUp}>
     <div className=''>{isPopUp ?
           <div className='w-[40rem] h-[313px] bg-white rounded-lg p-12 absolute top-[-7rem] '>
             <div className='flex justify-end text-[#6A737C] text-2xl mt-[-20px] mb-4'>
               <FaTimes onClick={() => setPopUp(!isPopUp)} />
             </div>
             <h3 className='font-semibold text-xl text-[#333333]'>Streamline Your Hospital's Records With Medfile!</h3>
             <p className='text-base text-center font-normal mt-4 mb-10'>Experience our software in action. Fill out the form below to schedule a personalized demo with our experts.</p>
             <div className='flex flex-row text-sm md:text-base'>
               <input type='text' placeholder='Enter your email address' className='w-[12rem] md:w-[25rem] lg:w-[30rem] h-12 text-main-color font-light placeholder-main-color border-2 border-main-color px-3 rounded-tl-lg rounded-bl-lg text-start' />
               <button type='submit' className='bg-main-color text-white
         w-[5rem] md:w-[10rem] h-12 rounded-tr-lg rounded-br-lg'>Request Demo</button>
             </div>
           </div> :


           ''}</div>
    </div>
  )
}

export default PopUpCard
