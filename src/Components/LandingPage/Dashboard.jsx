import React from 'react'
// import { FiMoon } 
import { BsBell, BsGlobe, BsMoon }from 'react-icons/bs'
function Dashboard() {
  return (
  <>
  <div className='flex justify-between m-5'>
     <h2>Welcome Admin</h2>
     <div className='flex items-center '>
      <BsMoon className='mr-5'/>
          <BsGlobe className='mr-5' />
          <BsBell className='mr-5' />
          {/* USERNAME */}
    <h3 className='text-main-color'>Opic Hospital</h3>  
     </div>
     
  </div>
  </>
   
  )
}

export default Dashboard