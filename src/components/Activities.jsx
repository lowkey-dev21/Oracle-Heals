import React from "react";

const Activities = () => {
  return (
    <>
      <section className=" text-center py-[5rem]">
        <h1 className="  text-xl font-bold text-center text-green-600">
          _ORACLE HEALS_
        </h1>
        <h1 className=" text-3xl mt-2 font-bold ">
          Some of our latest activities
        </h1>
        <p className=" font-light text-xl sm:px-[6rem] leading-[40px] mt-2 px-4 ">
          The kindness, generosity, calmness, and dove-like human nature he
          embodied established his fame and the testimonies of his ancestral
          power and ability made people believe and visit his temple from
          different parts of the world.
        </p>
      </section>

      {/* videos */}
      <section className=" bg-black  sm:mt-[-2rem] smrounded-lg md:mt-0 mx-auto flex justify-center items-center sm:w-[80%] ">
        <video
          className=" outline-none flex sm:w-[80%] sm:h-screen md:h-screen sm:rounded-lg "
          poster="img1.jpg"
          controls
        >
          <source src="vd1.MP4" type="video/mp4" />
        </video>
      </section>

      <section className=" bg-black mt-4  sm:mt-[2rem] sm:rounded-lg  md:mt-[4rem] mx-auto flex justify-center items-center sm:w-[80%] ">
        <video
          poster="img3.jpg"
          className=" flex sm:w-[80%]  outline-none   sm:h-screen sm:rounded-lg "
          controls
        >
          <source src="vd3.MP4" type="video/mp4" />
        </video>
      </section>

      <section className=" bg-black mt-4 sm:mt-[2rem] sm:rounded-lg  md:mt-[4rem] mx-auto flex justify-center items-center sm:w-[80%] ">
        <video
          poster="img4.jpg"
          className=" flex sm:w-[80%]  outline-none   sm:h-screen sm:rounded-lg "
          controls
        >
          <source src="vd4.MP4" type="video/mp4" />
        </video>
      </section>

      {/* images */}
      <section className=" gap-5 sm:w-full md:w-[90%] mx-auto  p-2 items-center justify-center mt-4 w-full flex flex-col md:flex-row ">
        <img className=" rounded-lg w-[400px] " src="im1.JPG" alt="" />
        <img className=" rounded-lg w-[400px] " src="im2.JPG" alt="" />
        <img className=" rounded-lg w-[400px] " src="im3.JPG" alt="" />
      </section>

      <section className=" gap-5 sm:w-full md:w-[90%] mx-auto  p-2 items-center justify-center mt-4 w-full flex flex-col md:flex-row ">
        <img className=" rounded-lg w-[400px] " src="im4.JPG" alt="" />
        <img className=" rounded-lg w-[400px] " src="im5.JPG" alt="" />
        <img className=" rounded-lg w-[400px] " src="im6.JPG" alt="" />
      </section>

      <section className=" gap-5 sm:w-full md:w-[90%] mx-auto  p-2 items-center justify-center mt-4 w-full flex flex-col md:flex-row ">
        <img className=" rounded-lg w-[400px] " src="im7.jpg" alt="" />
        <img className=" rounded-lg w-[400px] " src="im8.jpg" alt="" />
        <img className=" rounded-lg w-[400px] " src="im9.jpg" alt="" />
      </section>
    </>
  );
};

export default Activities;
