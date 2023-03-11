import React,{useState} from 'react'

function InputField(props) {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
          <input 
        {...inputProps}
        onChange={onChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
         className=' border-[1px] border-[#6A737C] p-3 rounded-lg w-full ' />

         {/* REVISIT */}
      <span className="error text-red-600 text-sm hidden">{errorMessage}</span>
    </div>
  )
}

export default InputField