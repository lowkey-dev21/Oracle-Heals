import React from 'react'
import {con} from "../assets";

const ConContact = () => {
  return (
   <>
    {/* Images */}
    <section className=" flex flex-col md:flex-row w-full py-[2rem] items-center px-2  md:justify-center   ">
        <div className=" flex    md:mt-[2rem]  w-full md:w-[50%]     ">
         <img src={con}  alt="" />
        </div>

        {/* Texts */}
        <div className=" flex flex-col sm:px-[2rem] ml-4 mt-[3rem] md:w-[40%] md:mt-[9rem]   ">
          <h1 className=" md:text-left   sm:text-center font-semibold text-green-600 md:text-[16px]  ">
            {" "}
            CONTACT US_{" "}
          </h1>
          <h1 className=" md:text-left  font-bold text-3xl mt-4 md:text-4xl sm:text-center  ">
          Get in Touch{" "}
          </h1>
          <p className="  sm:text-center md:text-left  md:mt-2 md:leading-[35px] pr-6 leading-[30px] text-[large] font-light text-slate-800  ">
          Get in touch if you need our assistance. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.
          </p>


          <section className="  md:w-[50%] md:flex-col mt-[2rem] gap-[2rem] flex flex-col w-full  ">
            <div className=" text-3xl sm:text-4xl flex gap-6 items-center">
              <i class="fa-solid p-3 px-4 shadow-lg  rounded-full fa-location-dot text-green-500 "></i>{" "}
              <h1 className="text-black font-thin text-2xl ">
                Oyo state, Nigeria{" "}
              </h1>
            </div>

            <div className=" text-3xl sm:text-4xl   flex gap-6 items-center">
              <i  class="   bg-white p-4 rounded-full  shadow-lg fa-solid fa-at text-green-500 "></i>{" "}
              <h1 className="text-black font-thin text-2xl  ">
                {" "}
                <a href="mailto:info@oracleheals.com">info@oracleheals.com</a>
              </h1>
            </div>

            <div className=" text-3xl sm:text-4xl   flex gap-6 items-center">
              <i class="fa-solid p-4 shadow-lg  rounded-full fa-phone-volume text-green-500"></i>{" "}
              <h1 className="text-black font-thin text-2xl  ">
                <a href="tel:+23480678910">+23480678910</a>
              </h1>
            </div>

         
          </section>




        </div>
      </section>
   </>
  )
}

export default ConContact