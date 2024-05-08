import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} />
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
        </div>
        {/*Card 2  */}
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-md hover:scale-105 duration-300 bg-gray-100 md:my-0">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={Double}
          />
          <h2 className="text-2xl font-bold text-center py-8">Double user</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">2 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 3 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
        </div>
        {/* Card 3 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} />
          <h2 className="text-2xl font-bold text-center py-8">Triple user</h2>
          <p className="text-center text-4xl font-bold">$349</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">3 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 4 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cards;
