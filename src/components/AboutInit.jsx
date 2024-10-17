import React from "react";
import { img1, dots, img2 } from "../assets";

const AboutInit = () => {
  return (
    <>
      {/* Images */}
      <section className=" flex flex-col md:flex-row w-full py-[4rem]  px-2  md:justify-center   ">
        <div className=" flex sm:px-[9rem]  md:mt-[2rem]  w-full md:w-[50%]     ">
          <img src={dots} alt="" className=" w-[50%]  md:w-[40%] mt-7 " />
          <div className="w-full flex flex-col ">
            <img
              src={img1}
              alt=""
              className="  md:h-[500px] h-[350px] mt-5 ml-[-3rem] md:ml-[-7rem]  rounded-lg  "
            />
            <img
              src={img2}
              alt=""
              className=" w-[150px] h-[150px] rounded-lg mt-[-3rem] ml-6 md:w-[200px] md:ml-[6rem] md:h-[200px] "
            />
          </div>
        </div>

        {/* Texts */}
        <div className=" flex flex-col sm:px-[2rem] ml-4 mt-[3rem] md:w-[40%] md:mt-[9rem]   ">
          <h1 className=" md:text-left   sm:text-center font-semibold text-green-600 md:text-[16px]  ">
            {" "}
            ORACLE HEALS_{" "}
          </h1>
          <h1 className=" md:text-left  font-bold text-3xl mt-4 md:text-4xl sm:text-center  ">
            About Oracle Heals{" "}
          </h1>
          <p className="  sm:text-center md:text-left  md:mt-2 md:leading-[35px] pr-6 leading-[30px] text-[large] font-light text-slate-800  ">
            Oracle Heals, a phenomenal traditionalist popularly known as Olaifa
            is the son of a prominent chief priest of the Oyo Empire, Late.
            Chief Alawode shipe Agbongbon of Alaafin of Oyo. He is a chief
            priest born into a traditional family in Shipe compound, Pakoyi area
            of Oyo town, Oyo West Local Government, Oyo state.
          </p>

          <div className=" sm:mx-auto md:mx-0  bg-green-600 w-[170px] flex items-center justify-center p-4 rounded-md text-white  mt-7 ">
            LEARN MORE
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInit;
