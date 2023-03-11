import React, { useEffect, useState } from "react";
import DashboardImage1 from "../../images/Dashboard-img1.png";
import DashboardImage2 from "../../images/Dashboard-img2.png";
import { FaTimes } from "react-icons/fa";
function Hero() {
  const images = [DashboardImage1, DashboardImage2];
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // --------------POP UP------------------
  const [isPopUp, setPopUp] = useState(false);

  // function for clicking of the card
  const handlesPopUp = () => {
    setPopUp((prev) => (prev = !prev));
  };

  return (
    <section name="home" className="flex flex-col items-center">
      <h1 className="capitalize text-3xl md:text-7xl font-semibold mt-32 text-center">
        digital transformation made <br />
        easy with <span className="text-main-color">medfile</span>
      </h1>
      <p className="font-normal text-lg md:text-2xl leading-7 pt-6 pb-10 text-center">
        Introducing a new classification system that enhances clinical
        documentation and provides more efficient management of patient
        information{" "}
      </p>

      {/* DEMO CLICK */}
      <div className="relative">
        <div
          className="flex flex-row text-sm md:text-base"
          onClick={handlesPopUp}
        >
          <button
            type="submit"
            className="bg-main-color text-white
        w-[15rem] md:w-[40rem] h-12 rounded-lg "
          >
            Request Demo
          </button>
        </div>

        {/* DEMO POPUP */}
        <div className="">
          {isPopUp ? (
            <div className="w-[40rem] h-[313px] bg-white rounded-lg p-12 absolute top-[-7rem] ">
              <div className="flex justify-end text-[#6A737C] text-2xl mt-[-20px] mb-4">
                <FaTimes onClick={() => setPopUp(!isPopUp)} />
              </div>
              <h3 className="font-semibold text-xl text-[#333333]">
                Streamline Your Hospital's Records With Medfile!
              </h3>
              <p className="text-base text-center font-normal mt-4 mb-10">
                Experience our software in action. Fill out the form below to
                schedule a personalized demo with our experts.
              </p>
              <div className="flex flex-row text-sm md:text-base">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-[12rem] md:w-[25rem] lg:w-[30rem] h-12 text-main-color font-light placeholder-main-color border-2 border-main-color px-3 rounded-tl-lg rounded-bl-lg text-start"
                />
                <button
                  type="submit"
                  className="bg-main-color text-white
        w-[5rem] md:w-[10rem] h-12 rounded-tr-lg rounded-br-lg"
                >
                  Request Demo
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="mt-20 border-main-color text-center overflow-hidden text-5xl">
        <img src={currentImage} alt="" className="w-full " />
      </div>
    </section>
  );
}

export default Hero;
