import { ab1 } from "../assets";
import React, { useState } from "react";
import Tertiary from "./Tertiary";
import Socials from "./Socials";
import Footer from "./Footer";

const HistoryAbout = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleDivClick = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <>
      <section className="   gap-[2rem]  py-[6rem] md:flex  md:px-[4rem] md:gap-[5rem]  w-full ">
        {/* picture */}
        <div className=" md:w-[50%]  w-[80%] mx-auto md:mx-0 flex  ">
          <img src={ab1} alt=" " className=" rounded-3xl mx-auto " />
        </div>

        {/* texts */}
        <div className=" md:mt-[10rem] mt-[3rem] px-[2rem] sm:px-[4rem] md:px-0  text-left md:w-[50%] ">
          <h1 className=" text-green-600 ">ORACLE HEALS_</h1>

          <h1 className=" mt-2 text-3xl font-bold ">About Fakunle</h1>

          <div className=" flex flex-col w-full gap-7 ">
            <p className=" mt-2 font-thin leading-[30px] ">
              Alawode Olaifa, a phenomenal traditionalist popularly known as
              Olaifa is the son of a prominent chief priest of the Oyo Empire,
              Late. Chief Alawode shipe Agbongbon of Alaafin of Oyo. He is a
              chief priest born into a traditional family in Shipe compound,
              Pakoyi area of Oyo town, Oyo West Local Government, Oyo state.
            </p>

            <section className=" w-full flex gap-[-10px]  ">
              <div className=" w-[5px] h-[150px] bg-green-500 "></div>
              <div className=" w-full h-[150px] bg-slate-100 flex  px-[2rem] font-bold sm:text-5xl  items-center text-3xl px-auto justify-center ">
                Located at Oyo State, Nigeria.
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* spin */}
      <section className="">
        <div className=" flex px-[2rem]  flex-col md:flex-row w-full justify-center gap[3rem] ">
          <div
            className={` md:w-[40%]  mb-[3rem] rounded-2xl shadow-2xl  w-[97%] h-[350px] mx-auto  spin-div ${
              isSpinning ? "spin-animation" : " rounded-2xl "
            } ${!isSpinning ? "spin-animation-reverse rounded-2xl   " : " "}`}
            onClick={handleDivClick}
          >
            <div
              className={`content flex gap-4 flex-col background3 text-5xl font-bold  front ${
                isSpinning ? "hidden   " : "  "
              }`}
            >
              <i class="fa-solid fa-user-graduate"></i>
              Education
              <i class="fa-solid  text-slate-500 fa-arrow-right"></i>
            </div>

            <div
              className={` text-white text-center sm:text-2xl px-4 text-xl font-thin  content back ${
                isSpinning
                  ? " rounded-2xl bg-green-500  "
                  : " bg-green-500 rounded-2xl  hidden"
              }`}
            >
              Ifakunle began his educational career at Mercyland Nursery and
              primary school, Oyo, and proceeded to Maradesa memorial
              comprehensive high school, Oyo West Local Government, where he did
              and completed his secondary school education
            </div>
          </div>

          <section className=" md:w-[50%]  ">
            <Tertiary />
          </section>
        </div>

        {/* Career */}
        <div className=" w-full md:gap-[3rem] md:px-[4rem] md:justify-center md:pt-[3rem] mb-[3rem] flex flex-col md:flex-row  ">
          <div className=" md:w-[45%] px-[2rem] md:px-0  ">
            <h1 className=" text-green-600 font-bold mb-3 ">ORACLE HEALS_ </h1>

            <h1 className=" text-3xl font-bold mb-2 ">What made him popular</h1>

            <p className="  font-thin leading-[30px] ">
              Chief Fakunle, a son of a famous chief priest, herbalist, and
              Curandero in an indigenous town (Oyo) is known as a replica of his
              father as a result of his great power, competence, agility, and
              reliability in accuracy and exceptional oracle consultation,
              solving human health challenges, healing of diseases, and
              confrontation of spiritual attacks. He has performed countless
              wonders, spiritual deliverance, spiritual fortifications, freedom
              from mephistophelian bondage, etc. The kindness, generosity,
              calmness, and dove-like human nature he embodied established his
              fame and the testimonies of his ancestral power and ability made
              people believe and visit his temple from different parts of the
              world.
            </p>
          </div>

          <div className=" md:w-[45%] px-[2rem] md:px-0  pt-[4rem] md:pt-0  ">
            <h1 className=" text-green-600 font-bold mb-3 ">ORACLE HEALS_ </h1>

            <h1 className=" text-3xl font-bold mb-2 ">Professional career</h1>

            <p className="  font-thin leading-[30px] ">
              Chief Fakunle’s traditional career started when he was an infant,
              he grew up working with his father and his brothers in his then
              father’s temple in attending to guests with challenges from
              different parts of the country and beyond. Olaifa was 16 years old
              when his father joined his ancestors. While he was still acquiring
              formal education, his father’s colleague High Chief Ifaniyi
              Awoyeni Ayinla Oluwo of Iseke land in Oyo took it upon his
              shoulder to train him in his father’s legacy. He acquires a broad
              range of knowledge during his pupillage with his master and
              adopted father at the OFUN AJITENA SOLUTION INTERNATIONAL TEMPLE
              before he was graced with liberty to establish his traditional
              empire and shrine, where the spirit of his ancestors has been
              helping him to deliver people from shackles of bondage, diseases,
              spiritual attack, backwardness, calamities, lineage curses,
              barrenness, and other tragedies.
            </p>
          </div>
        </div>
      </section>
      <Socials/>
      <Footer/>
    </>
  );
};

export default HistoryAbout;
