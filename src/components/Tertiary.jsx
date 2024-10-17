import React, { useState } from "react";

const Tertiary = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleDivClick = () => {
    setIsSpinning(!isSpinning);
  };
  return (
    <>
      <div
        className={`   mb-[3rem] rounded-2xl shadow-2xl  w-[97%] h-[350px] mx-auto  spin-div ${
          isSpinning ? "spin-animation" : " rounded-2xl "
        } ${!isSpinning ? "spin-animation-reverse rounded-2xl   " : " "}`}
        onClick={handleDivClick}
      >
        <div
          className={`content flex gap-4 flex-col background4 text-5xl font-bold  front ${
            isSpinning ? "hidden   " : "  "
          }`}
        >
          <i class="fa-solid fa-school"></i>
          Tertiary
          <i class="fa-solid  text-slate-500 fa-arrow-right"></i>
        </div>

        <div
          className={` text-white font-thin px-4 text-center text-xl sm:text-2xl  content back ${
            isSpinning
              ? " rounded-2xl bg-green-500  "
              : " bg-green-500 rounded-2xl  hidden"
          }`}
        >
          Ifakunle'S love for nature, an organized eco-friendly environment with
          conservation of the ecosystem made him decide to further his education
          where he secured admission into The polytechnic Ibadan where he
          acquired a Diploma in urban and regional planning.
        </div>
      </div>
    </>
  );
};

export default Tertiary;
