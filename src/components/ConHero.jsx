import React from 'react'
import { Link } from 'react-router-dom'

const ConHero = () => {
  return (
   <>
     <section className=" min-h-[300px] sm:min-h-[350px] justify-center items-center  sm:pt-[-4rem]  sm:items-center md:h-[450px] background px-4  flex flex-col  text-white  ">
        <div>
          <h1 className=" text-white text-5xl font-bold sm:text-7xl md:text-10xl ">
           Contacts
          </h1>

          {/* Link */}
          <div className=" text-[15px] sm:text-2xl md:text-3xl flex gap-3 items-center justify-center ">
            <Link to={"/"} className=" text-slate-400 hover:text-white hover:font-bold ">
              {" "}
              <i class="fa-solid fa-arrow-left"></i> HOME
            </Link>

            <h1>CONTACTS </h1>

          </div>
        </div>
      </section>
   </>
  )
}

export default ConHero