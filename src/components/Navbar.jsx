import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toogle, setToggle] = useState(false);

  const openNav = () => {
    setToggle(true);
  };

  const closeNav = () => {
    setToggle(false);
  };

  return (
    <>
      {/* Navbar  */}
      <div className=" fixed z-[1000] md:hidden sm:hidden  w-full h-[50px] bg-white flex px-4 justify-between items-center ">
        <i
          class={`fa-solid fa-bars text-green-950 text-2xl md:hidden `}
          onClick={openNav}
        ></i>

  
         {/* Logo */}
         <div className=" flex  ">
          <h1 className=" text-3xl font-extrabold ">
            {" "}
            O<span className=" text-green-800 ">H</span>{" "}
          </h1>
          <h1 className=" ml-1 flex flex-col">
            Oracle Heals{" "}
            <span className=" text-[10px] mt-[-5px] ">
              And Native Healer Temple
            </span>{" "}
          </h1>
        </div>


        <i class="fa-solid fa-search text-2xl md:hidden "></i>
      </div>

      {/* overLay */}
      <div
        className={` ${
          toogle ? "block" : "hidden"
        } fixed w-full h-[100%] top-0 z-[800] left-0 right-0 bottom-0 bg-[#90a22b52] `}
        onPointerEnter={closeNav}
      ></div>

      {/* Side bar Data */}
      <div
        className={` ${
          toogle ? "block" : "hidden"
        } sidebar  fixed w-[87%] h-[100%] left-0 top-0 bottom-0 bg-green-950 z-[1000] `}
      >
        <i
          class={` fa-solid fa-xmark text-white text-2xl ml-[90%] mt-3 `}
          onClick={closeNav}
        >
          {" "}
        </i>


         {/* Logo */}
         <div className="  px-5 text-white flex  ">
          <h1 className=" text-3xl font-extrabold ">
            {" "}
            O<span className=" text-green-600 ">H</span>{" "}
          </h1>
          <h1 className=" ml-1 flex flex-col">
            Oracle Heals{" "}
            <span className=" text-[10px] mt-[-5px] ">
              And Native Healer Temple
            </span>{" "}
          </h1>
        </div>

        <ul className=" text-white  flex flex-col  px-5 gap-8 mt-[50px]  list-none">
          {navLinks.map((nav) => (
            <li key={nav.id} className=" hover:text-green-300 ">
              <NavLink onClick={closeNav}
                className={({ isActive }) =>
                  isActive
                    ? " text-green-600 font-extrabold  "
                    : " text-white  "
                }
                to={nav.id}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search */}

        <div className=" px-5 mt-5 w-[95%] ">
          <input
            type="search"
            name=""
            id=""
            placeholder="search"
            className=" px-3 w-full h-[50px] rounded-[5px]  "
          />
        </div>
      </div>
      {/* */}

      {/* Navbar for Desktop size */}
      <section className=" fixed z-[1000]   sm:w-full hidden sm:h-[60px] bg-[white] sm:flex items-center justify-between sm:px-[1rem]  md:px-[4rem]  ">
        {/* Logo */}
        <div className=" flex justify-center w-[190px] ">
          <h1 className=" sm:text-3xl md:text-4xl font-extrabold ">
            {" "}
            O<span className=" text-green-800 ">H</span>{" "}
          </h1>
          <h1 className=" ml-1 sm:text-[10px] mt-[6px]  flex flex-col">
            Oracle Heals{" "}
            <span className=" text-[10px] mt-[-5px] ">
                And Native Healer Temple
            </span>{" "}
          </h1>
        </div>

        {/* Links */}
        <div className=" ">
          <ul className=" flex  list-none sm:gap-[13px] md:gap-[60px] sm:text-[13px]  ">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <NavLink 
                  className={({ isActive }) =>
                    isActive
                      ? " text-green-700 font-extrabold "
                      : " hover:text-slate-500 text-black"
                  }
                  to={nav.id}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Search and contact Us  */}
        <div className=" flex items-center sm:gap-[30px] ">
        <i class="fa-solid fa-magnifying-glass md:text-2xl "></i>

          <Link to={"contact"} className=" flex items-center justify-center  sm:w-[100px] md:w-[150px] sm:h-[30px] md:h-[40px] bg-green-500 text-white border-[1px] border-green-950 hover:bg-green-950  rounded-sm ">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
