import React from "react";
import { Link, NavLink } from "react-router-dom";
import { serviceData } from "../constants";

const Services = () => {
  return (
    <>
      <section className=" flex flex-col justify-center items-center py-[1rem] mb-5 ">
        <h1 className=" text-green-600 font-semibold ">_ORACLE HEALS.COM_</h1>
        {/* services */}
        <div className=" " >
          <h1 className=" text-center text-2xl p-3 font-bold mb-3" > Service we render </h1>
          <ul className=" flex flex-col gap-6 justify-center items-center    list-none">
            {serviceData.map((ser) => (
              <NavLink className= "  hover:shadow-lg hover:text-white rounded-lg text-green-900 text-xl font-bold shadow hover:bg-green-900 border-slate-500 border-[1px] p-3 flex items-center w-[90%]   " to={ser.path} >
                {ser.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
