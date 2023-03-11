import React from "react";
import LeftTopImage from "../images/Exclude1.png";
import LeftBottomImage from "../images/Exclude2.png";
import RightTopImage from "../images/Exclude3.png";
import RightBottomImage from "../images/Exclude4.png";
import FilledCircle from "../images/ExcludeA.png";
import RightCircle from "../images/Ellipse.png";
import Circle from "../images/ExcludeB.png";

function GetStarted() {
  return (
    <section className="bg-[#E7F5F9] text-center mt-20 py-10">
      <div className="text-black relative">
        <img
          src={LeftTopImage}
          alt=""
          className="w-[20%] absolute top-[-60px] left-[-120px]"
        />
        <img
          src={FilledCircle}
          alt=""
          className="absolute left-[200px] rotate-180 top-[-60px]"
        />

        <img
          src={LeftBottomImage}
          alt=""
          className="hidden xl:block  absolute bottom-[-57px] left-[30px]"
        />
        <img
          src={RightCircle}
          alt=""
          className="absolute left-[-97px] bottom-[-57px] hidden xl:block  "
        />
        <img
          src={RightTopImage}
          alt=""
          className="w-[20%] hidden lg:block xl:w-auto  absolute right-[-100px] top-[-60px]"
        />

        <img
          src={FilledCircle}
          alt=""
          className="absolute right-[400px] bottom-[-57px] hidden lg:block xl:w-auto"
        />
        <img
          src={RightBottomImage}
          alt=""
          className="absolute right-[50px] bottom-[-57px] hidden xl:block"
        />
        <img
          src={Circle}
          alt=""
          className="absolute right-[-100px] bottom-[-57px] hidden xl:block "
        />
        <div className="z-50">
          <h2 className="text-4xl font-semibold mt-5">
            Supercharge Your Medical Processes Today!
          </h2>
          <p className="text-xl font-normal mt-[1.375rem]">
            Implementing Medfile will enhance the productivity of your
            <br />
            medical facility.
          </p>
        </div>
        <div className="text-center mt-[3.5625rem] flex flex-col gap-3 sm:flex-row items-center justify-center">
          <button className="bg-main-color text-white rounded-lg px-7 py-2 hover:bg-[#097192] hover:scale-105 cursor-pointer">
            Get Started Now
          </button>
          <button className="bg-white text-main-color border-2 border-main-color hover:border-[#097192] hover:scale-105 rounded-lg px-7 py-2 cursor-pointer">
            Request Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
