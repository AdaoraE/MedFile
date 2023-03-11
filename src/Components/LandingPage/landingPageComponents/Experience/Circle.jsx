import React from 'react'

function Circle(props) {
  return (
    <>

          <p className="font-semibold text-2xl">{props.figure}</p>
          <p className="text-[.75rem] text-center font-normal">{props.text} <br /> {props.text2}</p>
    
    </>
  )
}

export default Circle
