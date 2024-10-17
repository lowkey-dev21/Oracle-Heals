import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className=" min-h-[450px] sm:min-h-[650px]  sm:pt-[-4rem]  sm:items-center md:h-screen background2 px-4  flex flex-col  text-white  "
      >
        {/* welcome */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mt-[9rem] md:px-[6rem] sm:py-[3rem] md:py-[6rem] sm:ml-[2.5rem]  h-3  font-light  cursor-pointer "
        >
          WELCOME TO ORACLE HEALS
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-[-3rem] sm:text-5xl  md:text-7xl sm:ml-[2.5rem] md:ml-[8rem] sm:py-[6rem] sm:mt-[-13rem] md:mt-[-15rem] h-0 text-3xl font-bold "
        >
          Solutions to all spiritual <br className=" hidden md:block " />{" "}
          problem and spiritual attacks
        </motion.h1>

        <div className=" flex gap-6  ">
          {/* Book Us  */}
          <Link to={"book"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className=" p-2 sm:h-[60px] sm:w-[170px]  bg-green-950 h-[50px] sm:ml-[2.5rem] md:ml-[8rem] sm:mt-[-4rem]   items-center w-[150px] rounded-sm   hov flex justify-center "
            >
              Book Us
            </motion.div>
          </Link>{" "}
          <Link to={"contact"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 2 }}
              className=" p-2 sm:h-[60px] sm:w-[170px] h-[50px] border-white border-[1px] sm:mt-[-4rem]   items-center w-[150px] rounded-sm   hov flex justify-center  hover:bg-white  hover:text-green-950  "
            >
              Contact
            </motion.div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
