import React, { useState, useContext } from "react";
import Logo from "../images/logo.png";
import Part2Page from "./Part2Page";
import RepresentationBox from "./RepresentationBox";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate("/dashboard");
  const { dispatch } = useContext(AuthContext);
  const handlesChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggle = () => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handlesLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(
        auth,
        inputValue.email,
        inputValue.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        console.log(user);
        navigate("/dashboard");
      });

      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div
      name="Login"
      className="flex flex-col md:flex-row justify-between md:w-[1512px]"
    >
      <div className="w-[47.25rem] px-14 pt-10 h-[61.375rem] ">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <div className="mt-24 ">
          <h2 className="font-semibold text-4xl">Login to your dashboard</h2>
          <p className=" text-lg font-normal mt-3 mb-6">
            Kindly select the role you represent{" "}
          </p>
        </div>
        <div className="flex justify-between gap-2 mb-10">
          <RepresentationBox text="Admin" />
          <RepresentationBox text="Doctor" />
          <RepresentationBox text="Nurse" />
          <RepresentationBox text="Lab Attendant" />
        </div>
        <form action="">
          <div className="flex flex-col gap-6 ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handlesChange}
              className="border-[1px] border-[#6A737C] p-3 rounded-lg w-full "
              required
            />

            <select
              className="border-[1px] border-[#6A737C] p-3 rounded-lg text-[#6A737C]"
              required
            >
              <option>Select Hospital</option>
              <option>Lagos state university teaching hospital</option>
              <option>University of Abuja Teaching Hospital</option>
            </select>

            <input
              type={inputType}
              name="password"
              id="password"
              placeholder="Password"
              onChange={handlesChange}
              className="border-[1px] border-[#6A737C] p-3 rounded-lg w-full "
              required
            />
          </div>

          <div
            className="absolute top-[33.7rem] left-[41rem] text-lg p-2 cursor-pointer"
            onClick={handleToggle}
          >
            {toggleEye ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>

          <div className="border-b-2 mt-7 text-[#6A737C] border-[#6A737C] w-fit leading-none">
            Forget Password?
          </div>

          <button
            type="submit"
            onClick={handlesLogin}
            className="bg-main-color mt-11 rounded-lg py-3 font-medium text-xl text-center text-white w-full e  hover:bg-[#097192]"
          >
            Log In
          </button>
        </form>
      </div>

      <Part2Page />
    </div>
  );
}

export default Login;
