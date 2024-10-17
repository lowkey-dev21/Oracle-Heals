import { useState, useEffect, useRef } from "react";
import Socials from "./Socials";
import Footer from "./Footer";

const BookService = () => {
  const [select, SetSelect] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [closeDat, setCloseDat] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [next, setNext] = useState(false);
  const [next2, setNext2] = useState(false);
  const [next3, setNext3] = useState(false);

  const [complete, setComplete] = useState(false);

  const handleDeleteButtonClick = () => {
    setIsVisible(true);

    // Set a timer to hide the element after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    setComplete(true);
    setNext2(false);
    setNext3(false);
    
  };

  const handleClick = (value) => {
    setInputValue(value);
    setCloseDat(false);
  };

  const nextSelect2 = () => {
    setNext2(true);
  };

  const nextSelect3 = () => {
    setNext2(true);
    setNext3(true);
  };

  const elements = [
    {
      id: 1,
      ele: "All orisa initiations",
      price: "$100",
    },
    {
      id: 2,
      ele: " Healing of diffrent types of disease and sickness",
      price: "$200",
    },
    { id: 3, ele: "Ifa consultation", price: "$150" },
    { id: 4, ele: "ifa divination", price: "$300" },
    { id: 5, ele: "Power fortifications", price: "$100" },
    {
      id: 6,
      ele: " Solutions to all spiritual problems and spritual attacks",
      price: "$500",
    },
    {
      id: 7,
      ele: "  The use of natural leaves tree stems and roots to cure and heal sickness",
      price: "$1000",
    },
  ];

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Reset error message when input has text
    setErrorMessage(value.trim() ? "" : "Input field is required");
  };

  const handleButtonClick = () => {
    // Perform action when button is clicked
    alert("Button clicked!");
  };

  const sendEmail = ()=>{
    
  }


  const back = ()=>{
    setNext2(true)
    setNext3(false)
    
  }

  const back2 = ()=>{
    setNext2(false)
    
    
  }

  return (
    <>
      {/* Mobile */}
      <section className="    py-[5rem] flex  w-full flex-col items-center justify-center  ">
        <div className=" w-[85%] bg-white rounded-lg shadow-lg  flex flex-col items-center  ">
          {/* Service */}
          <div className="  flex flex-col w-full   ">
            <div
              className={`${next ? "hidden" : "flex"} ${
                next2 ? "hidden" : " flex"
              }  items-center rounded-lg px-3 text-xl   w-full h-[50px] bg-white md:text-3xl `}
            >
              <h1>Service Selection </h1>
            </div>
            {/* reader */}
            <div
              className={`${next ? "  hidden " : " flex "} ${
                next2 ? "hidden" : " flex"
              }  w-full  gap-1 h-1`}
            >
              <span className=" bg-white h-1 w-[33%] "></span>
              <span className=" bg-white h-1 w-[33%] "></span>
              <span className=" bg-white h-1 w-[33%] "></span>
            </div>

            {/* Input */}
            <div
              className={`  px-[1rem] text-[17px] mt-[1rem] ${
                next ? "hidden" : "flex"
              } ${next2 ? "hidden" : " flex"}   flex-col  `}
            >
              <h1 className=" ">
                <span className=" text-red-500 ">*</span>
                Service:
              </h1>

              <div className="  w-full flex flex-col  items-center ">
                <div className=" flex w-full items-center ">
                  <input
                    onClick={() => setCloseDat(!closeDat)}
                    value={inputValue}
                    type=""
                    className=" w-full p-2 rounded-lg bg-none border-[1px] border-black outline-none cursor-pointer  "
                    placeholder="Select"
                  />
                  <i
                    onClick={() => setCloseDat(!closeDat)}
                    class={`fa-solid ${
                      closeDat ? " fa-minus  " : " fa-plus  "
                    } ml-[-3rem] z-[20] text-xl bg-white h-[30px] w-[40px] text-center  `}
                  ></i>
                </div>

                {/* continue */}
                <div className=" md:mt-[20rem] flex w-full justify-end mt-[200px]  items-center p-2 ">
                  <div
                    className=" shadow-lg bg-green-800  text-white p-2 rounded-lg "
                    onClick={nextSelect2}
                  >
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="  flex flex-col w-full   ">
            <div
              className={`${next2 ? " flex " : " hidden"} ${
                next3 ? "  hidden " : "flex "
              }   items-center rounded-lg px-3  w-full h-[50px] bg-white md:text-3xl `}
            >
              <div className="flex w-full gap-5 items-center font-bold pl-4   ">
              <i class="fa-solid fa-arrow-left-long" onClick={back2} ></i>
                <h1>Date and Time </h1>
              </div>
            </div>

            {/* reader */}
            <div
              className={`${next2 ? " flex " : " hidden"} ${
                next3 ? "  hidden " : "flex "
              }  w-full  gap-1 h-1`}
            >
              <span className="  bg-green-600 h-1 w-[33%] "></span>
              <span className=" bg-white h-1 w-[33%] "></span>
              <span className=" bg-white h-1 w-[33%] "></span>
            </div>

            {/* Input */}
            <div
              className={` px-[1rem] text-[17px] mt-[1rem] ${
                next2 ? " flex " : "hidden"
              } ${next3 ? "  hidden " : "flex "}  flex-col  `}
            >
              <div className="  w-full flex flex-col  items-center ">
                <div className=" flex w-full items-center ">
                  <input
                    type="datetime-local"
                    className=" text-black w-full p-2 rounded-lg bg-none border-[1px] border-black outline-none cursor-pointer  "
                  />
                </div>

                {/* continue */}
                <div className=" md:mt-[20rem] flex w-full justify-end mt-[200px] items-center p-2 ">
                  <div
                    className=" shadow-lg bg-green-800  md:text-xl text-white p-2 rounded-lg "
                    onClick={nextSelect3}
                  >
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="  flex flex-col w-full   ">
            <div
              className={`${
                next3 ? " flex " : " hidden"
              } items-center rounded-lg px-3  w-full h-[50px] bg-white md:text-3xl `}
            >
              <div className="flex w-full gap-5 items-center font-bold  pl-4    ">
              <i class="fa-solid fa-arrow-left-long" onClick={back} ></i>
                <h1>Your Information </h1>
              </div>
            </div>

            {/* reader */}
            <div
              className={`${next3 ? " flex " : " hidden"} w-full  gap-1 h-1`}
            >
              <span className=" bg-green-600 h-1 w-[33%] "></span>
              <span className=" bg-green-600 w-[33%] "></span>
              <span
                className={`${
                  complete ? "bg-green-600" : "bg-white "
                } h-1 w-[33%] `}
              ></span>
            </div>

            {/* Input */}
            <div
              className={` px-[1rem] text-[17px] mt-[1rem] ${
                next3 ? " flex " : "hidden"
              }  flex-col  `}
            >
              
              <div className="  w-full flex flex-col  items-center ">
                <div className="  flex flex-col w-full  ">
                  <form  onSubmit={sendEmail}>
                    <h1 className="text-[15px] text-slate-700  ">
                      <span className=" text-red-500 ">*</span>
                      Full name:
                    </h1>
                    <input
                      name="user_name"
                      required
                      type="text"
                      className=" w-full p-2 rounded-lg bg-none border-[1px] border-black outline-none cursor-pointer  "
                      placeholder="eg: Jeo John "
                    />

                    <h1 className="text-[15px] mt-3 text-slate-700  ">
                      <span className=" text-red-500 ">*</span>
                      Email
                    </h1>
                    <input
                      type="text"
                      name="user_email"
                      required
                      className=" w-full p-2 rounded-lg bg-none border-[1px] border-black outline-none cursor-pointer  "
                      placeholder="eg: abjshsjsueksa@gmail.com"
                    />
                    <h1 className="text-[15px] mt-3 text-slate-700  ">
                      Subject
                    </h1>
                    <input
                      type="text"
                      name="subject"
                      required
                      className=" w-full p-2 rounded-lg bg-none border-[1px] border-black outline-none cursor-pointer  "
                      placeholder="subject"
                    />
                    <h1 className="text-[15px] mt-3 text-slate-700  ">
                      Booking Description:
                    </h1>
                    <textarea
                      type="email"
                      name="messag"
                      className=" w-full p-2 rounded-lg bg-none h-[90px]  border-[1px] border-black outline-none cursor-pointer  "
                      cols={"30"}
                      rows={"10"}
                      placeholder=""
                    />
                  </form>
                </div>

                {/* continue */}
                <div className="  flex w-full justify-end items-center mt-0 p-2 ">
                  <button
                    type="submit"
                    className=" shadow-lg bg-green-800  md:text-xl text-white p-2 rounded-lg "
                    onClick={handleDeleteButtonClick}
                    disabled={inputValue.trim() === ""}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isVisible && (
          <div
            className={`fixed to ${
              complete ? "flex" : "hidden"
            } w-[100%] top-[8%] text-white  justify-end items-center mr-5   `}
          >
            <div className=" shadow-2xl  w-2 h-[80px] bg-green-700 rounded-l-xl"></div>
            <div className=" font-thin flex  items-center pl-3  sha w-[300px] md:w-[400px] h-[80px] bg-green-500  rounded-r-xl ">
              Done ✅ , kindly check your email for more Information.
            </div>
          </div>
        )}

        {/* Data */}
        <div
          className={`${closeDat ? "flex " : "hidden"}   flex-col w-[90%]  `}
        >
          <div className=" w-full flex flex-col  justify-between bg-white md:mt-[-25rem] mt-[-15rem] shadow-lg px-1 py-[1rem] ">
            {elements.map((element) => {
              return (
                <>
                  <div
                    key={element.id}
                    onClick={() => handleClick(element.ele)}
                    className=" flex  w-full items-center p-1 hover:bg-slate-300 rounded-lg justify-between "
                  >
                    <h1>{element.ele}</h1>
                    <span>{element.price}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Socials />
      <Footer />
      {/* */}
    </>
  );
};

export default BookService;
