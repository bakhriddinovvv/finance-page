import React from "react";
import { ReactTyped } from "react-typed";
function Main() {
  return (
    <div className="text-white">
      <div className="max-with-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALITICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6   ">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl font-bold py-4 sm:text-4xl md:text-5xl">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="text-xl font-bold py-4 sm:text-4xl md:text-5xl md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB , BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get started
        </button>
      </div>
    </div>
  );
}
export default Main;
