import React from "react";
import { FaStar } from "react-icons/fa";
import UnionCircle from "../../images/Union.png";
import Circle from "./Circle";
function Section3() {
  return (
    <section className="bg-[#E7F5F9] py-20">
      <div className="flex flex-col items-center md:items-start w-full">
        <div>
          <h3 className="font-medium text-2xl text-[#333333;] ">
            Here&#39;s what our customers will
            <br /> experience after implementing Medfile
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <div className="border-[1px] w-[15rem]  border-[#0C97C2] mt-6"></div>
            <div className="flex gap-2 text-yellow mt-6">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className=" font-normal leading-5 text-base mt-5">
              Medfile offers cloud based fully integrated Electronic Medical
              Record (EMR) solution designed and developed specifically to suit
              the requirements of Hospitals, Specialty and diagnostic centers.
            </p>
          </div>

          <div className=" text-center">
            <img src={UnionCircle} alt="" />
            {/* <div className="flex gap-20 ml-14 -mt-[8.5rem]">
            <div>
                <Circle figure='90%' text='Automated' text2='workflow'/>
              </div>
              <div>
              <Circle figure='99%' text='Efficient Reporting' text2='Capabilities' /></div>
              <div className="-ml-6">
              <Circle figure='100%' text='Quick Information ' text2='Sharing' /></div>
            
  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
