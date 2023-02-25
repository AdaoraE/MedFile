import React from 'react'

function Headings(props) {
  return (
    <>
    <div className='flex flex-col items-center mt-10'>
      <h2 className='text-4xl font-semibold text-text-color'>{props.text}</h2>
      <div className='w-[4.5rem] border-2 border-main-color rounded mt-1'></div>
      </div>
    </>
  )
}

export default Headings
