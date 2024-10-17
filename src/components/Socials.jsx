import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <section className="  mt-[3rem] px-[2rem] py-[1rem] flex flex-col w-full bg-[#071807] ">
        <div className=" sm:items-center   flex flex-col sm:flex-row justify-between sm:px-[2rem] sm:py-[2rem] ">
          <h1 className=" md:text-4xl text-3xl text-white sm:mt-0 mt-[1rem]  ">
            Do you need Oracle Heals service ?
          </h1>

          <Link
            to={"booking"}
            className=" rounded-lg bg-green-500 w-[150px] h-[50px]  flex justify-center text-xl mt-4 sm:mt-0 text-white items-center "
          >
            Book Us
          </Link>
        </div>{" "}
        <hr className="  mt-[1rem] " />
        {/* Socials */}
        <section className=" px-[2rem] py-[3rem] flex flex-col md:flex-row ">
          <section className=" md:w-[50%] md:flex-col mt-[2rem] gap-[2rem] flex flex-col w-full  ">
            <div className=" text-3xl sm:text-4xl flex gap-2 items-center">
              <i class="fa-solid fa-location-dot text-green-500 "></i>{" "}
              <h1 className="text-white font-thin text-2xl ">
                Oyo state, Nigeria{" "}
              </h1>
            </div>

            <div className=" text-3xl sm:text-4xl  flex gap-2 items-center">
              <i class="fa-solid fa-at text-green-500 "></i>{" "}
              <h1 className="text-white font-thin text-2xl  ">
                {" "}
                <a href="mailto:info@oracleheals.com">info@oracleheals.com</a>
              </h1>
            </div>

            <div className=" text-3xl sm:text-4xl  flex gap-2 items-center">
              <i class="fa-solid fa-phone-volume text-green-500"></i>{" "}
              <h1 className="text-white font-thin text-2xl  ">
                <a href="tel:+23480678910">+23480678910</a>
              </h1>
            </div>

            <div className=" text-xl flex gap-3 text-white ">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </section>
        </section> 
      </section>
    </>
  );
};

export default Socials;
