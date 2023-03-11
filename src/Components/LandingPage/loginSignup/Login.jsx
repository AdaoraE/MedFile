import React, { useState } from "react";
import InputField from "./InputField";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Part2Page from "./Part2Page";
import RepresentationBox from "./RepresentationBox";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

function Login() {
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });
    const [toggleEye, setToggleEye] = useState(false);
    const [inputType, setInputType] = useState("password");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    };
    const handlesSubmit = (e) => {
        e.preventDefault();
        // dispatch({ type: "LOGIN_START" });
        try {
            signInWithEmailAndPassword(auth, inputValues.email, inputValues.password).then(
                (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // dispatch({ type: "LOGIN_SUCCESS", payload: user });
                    // console.log(user);
                    updateProfile(user, {
                        displayName: inputValues.username,
                    });
                    navigate("/dahboard");
                }
            );
        } catch (error) {
            // dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    const handleToggle = (e) => {
        setToggleEye(!toggleEye);
        setInputType(inputType === "password" ? "text" : "password");
    };

    return (
        <div
            name="Login"
            className="flex flex-col md:flex-row justify-between md:w-[1512px] "
        >
            <div className="bg-white w-[756px] px-20 pt-10 h-[982px]">
                <a href="/">
                    <img src={Logo} alt="" />
                </a>

                <div className="mt-24 ">
                    <h2 className="font-semibold text-4xl">
                        Create your Medfile Account
                    </h2>
                    <p className=" text-lg font-normal mt-3 mb-6">
                        Kindly select the role you represent{" "}
                    </p>
                </div>
                <div className="flex justify-between mb-10">
                    <RepresentationBox text="Hospital" />
                    <RepresentationBox text="Laboratory" />
                    <RepresentationBox text="Healthcare Facility" />
                </div>

                <form className="flex flex-col gap-6 relative ">
                    <select
                        className="border-[1px] border-[#6A737C] p-3 rounded-lg text-[#6A737C]"
                        required
                    >
                        <option>Select Hospital</option>
                        <option>Lagos state university teaching hospital</option>
                        <option>University of Abuja Teaching Hospital</option>
                    </select>
                    <InputField
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        name="password"
                        type={inputType}
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <div
                        className="absolute top-[153px] right-0 text-lg p-2 cursor-pointer"
                        onClick={handleToggle}
                    >
                        {toggleEye ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                    <div className="mt-6">
                        <input type="checkBox" />{" "}
                        <span className="text-[#6A737C]  leading-none">
                            I agree to the Terms and Conditions, Privacy Policy, and
                            Telehealth Consent
                        </span>
                    </div>
                    <button
                        type="submit"
                        onClick={handlesSubmit}
                        className="bg-main-color mt-11 rounded-lg py-3 font-medium text-xl text-center text-white hover:scale-105 hover:bg-[#097192]"
                    >
                        Log In
                    </button>
                    <div className="border-b-2 mt-7 text-[#6A737C] border-[#6A737C] w-fit leading-none">
                        Forget Password?
                    </div>
                </form>
            </div>
            <Part2Page />
        </div>
    );
}

export default Login;

// import React, { useState } from 'react'
// import Logo from '../images/logo.png'
// import Part2Page from './Part2Page'
// import RepresentationBox from './RepresentationBox'
// import InputField from './InputField'
// function Login() {
//     const [inputValue, setInputValue] = useState({
//         role: '',
//         hospital: '',
//         username: '',
//         password: ''
//     })
//     const handlesChange = (e) =>{}
//     return (
//         <form name='Login' className='flex flex-col md:flex-row justify-between md:w-[1512px]'>

//             <div className='w-[47.25rem] px-14 pt-10 h-[61.375rem] '>
//                 <a href="/"><img src={Logo} alt="" /></a>
//                 <div className='mt-24 '>
//                     <h2 className='font-semibold text-4xl'>Login to your dashboard</h2>
//                     <p className=' text-lg font-normal mt-3 mb-6'>Kindly select the role you represent </p>
//                 </div>
//                 <div className='flex justify-between gap-2 mb-10'>
//                     <RepresentationBox text="Admin" />
//                     <RepresentationBox text="Doctor" />
//                     <RepresentationBox text="Nurse" />
//                     <RepresentationBox text="Lab Attendant" />
//                 </div>
//                 <div className='flex flex-col gap-6 '>
//                     <input type='text' placeholder='Email'
//                     onChange={handlesChange} className='border-[1px] border-[#6A737C] p-3 rounded-lg w-full ' />

//                     <select className='border-[1px] border-[#6A737C] p-3 rounded-lg text-[#6A737C]'>
//                         <option>Select Hospital</option>
//                         <option>Lagos state university teaching hospital</option>
//                         <option>University of Abuja Teaching Hospital</option>
//                     </select>

//                     <InputField type='password' placeholder='Password' />
//                 </div>

//                 <div className='border-b-2 mt-7 text-[#6A737C] border-[#6A737C] w-fit leading-none'>Forget Password?</div>

//                 <button type='submit' className='bg-main-color mt-11 rounded-lg py-3 font-medium text-xl text-center text-white w-full'>Log In</button>
//             </div>

//             <Part2Page />

//         </form>
//     )
// }

// export default Login
