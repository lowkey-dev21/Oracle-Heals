import React from 'react'
import { books } from '../assets'

const History = () => {
  return (
   <>
   <section className=' w-full pb-[3rem] sm:pb-0  flex flex-col  sm:justify-between   sm:flex-row sm:px-[2rem] md:px-[5rem] md:py-[3rem]    bg-green-950 ' >

    <div className=' px-[2rem] flex flex-col my-[2.5rem] sm:w-[60%] md:justify-center ' >

      <h1 className=' text-green-900 text-2xl font-bold ml-[-15px] md:text-6xl   ' >Oyo town</h1>
      <h1 className=' text-green-400 md:text-xl ' > ORACLE HEALS_ </h1>

      <h1 className=' mt-3 text-white font-bold text-2xl md:text-5xl md:mt-5' >Education History</h1>

      <p className=' text-white font-light leading-[30px] md:text-xl md:leading-[40px]  ' >
      began his educational career at Mercyland Nursery and primary school, Oyo, and proceeded to Maradesa memorial comprehensive high school, Oyo West Local Government, where he did and completed his secondary school education. Olaifa’s love for nature, an organized eco-friendly environment  with conservation of the ecosystem made him decide to further his education where he secured admission into The polytechnic Ibadan where he acquired a Diploma in urban and regional planning.
      </p>


    </div>

    <div className=' md:w-[40%] flex justify-center items-center ' >
      <img src={books} alt="" className=' min-w-[300px]  h-[300px] rounded-lg ' />
    </div>

   </section>
   
   
   </>
  )
}

export default History