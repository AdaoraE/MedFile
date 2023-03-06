import React, {  useState } from 'react'

function RepresentationBox(props) {
  const [isSelected, setIsSelected] = useState(false)
  
 const handlesSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div >
      <div className='border-2 border-[#0C97C2] rounded-xl py-4 w-40 text-center selectedOption' onClick={handlesSelect} style={{ backgroundColor: isSelected ? "#0C97C2" : "transparent" }}
>{props.text}</div>
    </div>
  )
}


export default RepresentationBox