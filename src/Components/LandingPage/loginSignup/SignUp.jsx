import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
// import inputData from "./inputData";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Part2Page from "./Part2Page";
import { auth } from "../../../firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const RoleBox = styled.div`
  border: 2px solid #0c97c2;
  border-radius: 12px;
  padding: 16px 0;
  width: 10rem;
  text-align: center;
  margin-bottom: 2rem;
  // &:not(:first-child) {
  //     margin-left: 2rem;
  //   }
`;

function SignUp() {
  const [formData, setformData] = useState({
    role: null,
    hospital: "",
    email: "",
    password: "",
    confirmPassword: "",
    // add select and role; add input value to the tag by adding 'name'
  });

  const handleBoxClick = (boxId) => {
    setformData((prevState) => ({
      ...prevState,
      role: boxId,
    }));
  };

  const navigate = useNavigate();

  const inputData = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      pattern: formData.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlesRegister = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(user, {
          displayName: formData.email,
        });
        navigate("/dashboard");
      });
    } catch (error) {}
  };

  console.log(formData);
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
            Kindly select the role you represent
          </p>
        </div>

        <div className="flex justify-between">
          <RoleBox
            id={formData.role}
            className={`box ${
              formData.role === "hospital" ? "selected" : ""
            }`}
            onClick={() => handleBoxClick("hospital")}
          >
            Hospital
          </RoleBox>

          <RoleBox
            id={formData.role}
            className={`box ${
              formData.role === "laboratory" ? "selected" : ""
            }`}
            onClick={() => handleBoxClick("laboratory")}
          >
            Laboratory
          </RoleBox>

          <RoleBox
            name="Healthcare"
            className={`box ${
              formData.role === "healthcare" ? "selected" : ""
            }`}
            onClick={() => handleBoxClick("healthcare")}
          >
            Healthcare Facility
          </RoleBox>
        </div>

        <form className="flex flex-col gap-6 ">
          <select
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="border-[1px] border-[#6A737C] p-3 rounded-lg text-[#6A737C]"
            required
          >
            <option>Select Hospital</option>
            <option value="lsuth">
              Lagos state university teaching hospital
            </option>
            <option value="uath">University of Abuja Teaching Hospital</option>
          </select>

          {inputData.map((input) => (
            <InputField
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={handleChange}
            />
          ))}

          <div className="mt-6">
            <input type="checkBox" required />
            <span className="text-[#6A737C] ml-2 leading-none">
              I agree to the Terms and Conditions, Privacy Policy, and
              Telehealth Consent
            </span>
          </div>
          <button
            type="submit"
            onClick={handlesRegister}
            className="bg-main-color mt-11 rounded-lg py-3 font-medium text-xl text-center text-white  hover:bg-[#097192]"
          >
            Create Account
          </button>
          <p className="mt-5 text-center text-[#6A737C]">
            Already have an account?
            <Link
              to="/login"
              className="text-main-color border-b-2 border-main-color w-fit hover:scale-105 hover:text-[#097192] hover:border-[#097192]"
            >
              {" "}
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <Part2Page />
    </div>
  );
}

export default SignUp;
