import React, { useEffect, useState } from "react";
import DashboardImage1 from "../../images/Dashboard-img1.png";
import DashboardImage2 from "../../images/Dashboard-img2.png";

function Hero() {
  const images = [DashboardImage1, DashboardImage2];
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  

  
  return (
    <>  
       <section name="home">
      <input type="checkbox" id="my-modal-3" className="modal-toggle  static " />
      <div className="modal">
        <div className="modal-box relative top-14 rounded-lg">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm  absolute right-2 top-2 bg-transparent text-black border-none hover:bg-main-color font-bold"
          >
            ✕
          </label>
          <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg text-[#333333] text-center mt-10">
            Streamline Your Hospital's Records With Medfile!
          </h3>
          <p className=" text-center font-normal mt-4 mb-10 text-sm">
            Experience our software in action. Fill out the form below to
            schedule a personalized demo with our experts.
          </p>
          <div className="flex flex-row text-sm md:text-base">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[13rem]  md:w-[15rem] h-12 text-main-color font-light placeholder-main-color border-2 border-main-color px-3 rounded-tl-lg rounded-bl-lg text-start" />
            <button
              type="submit"
                className="bg-main-color text-white w-[8rem] md:w-[9rem] h-12 rounded-tr-lg rounded-br-lg hover:bg-[#075B74] " >Request Demo</button>
          </div>
          </div>
        </div>
      </div>

 
        <div className="flex flex-col items-center">
        <h1 className="capitalize text-3xl md:text-7xl font-semibold mt-32 text-center">
          digital transformation made <br />
          easy with <span className="text-main-color">medfile</span>
        </h1>
        <p className="font-normal text-lg md:text-2xl leading-7 pt-6 pb-10 text-center">
          Introducing a new classification system that enhances clinical
          documentation and provides more efficient management of patient
          information
        </p>

        <label htmlFor="my-modal-3" className="btn bg-main-color text-white
        w-[15rem] md:w-[40rem] h-12 rounded-lg border-none hover:bg-[#075B74] capitalize text-lg">
          Request Demo
        </label>

        <div className="mt-20 border-main-color text-center overflow-hidden text-5xl">
          <img src={currentImage} alt="" className="w-full " />
        </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
