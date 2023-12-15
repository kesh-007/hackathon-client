import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";


const page = () => {
  return (
  <div className="flex items-center h-screen">
    <div className="flex flex-col w-[25rem] m-10 bg-[#f9f9fa] rounded-xl">
        <div className="flex justify-center mt-6 py-3 bg-[#fff9f0] mx-4 rounded-xl"><p className="flex items-center font-bold" >Basic Plan</p></div>
            <div className="flex items-baseline justify-center my-6">
                <p className="text-5xl">Rs.89<span className="text-sm">/month</span></p>
            </div>
            <div className="flex flex-col justify-center items-center m-4 border bg-[#fffffe] p-5 rounded-lg">
                 <p>Available Features</p>
                <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg">
                    <MdOutlineCheckBox className="font-bold text-xl" />
                    <p className="px-7  "> Ad-free Experience</p>
                </div>

                <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg  ">
                    <MdOutlineCheckBox className="font-bold text-xl" />
                    <p className="px-7"> Advanced Analytics</p>
                </div>

                <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg ">
                    <MdOutlineCheckBox className="font-bold text-xl" />
                    
                    <p className="px-7"> Discounts on Paid Contests</p>
                </div>

                <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg ">
                    <CgCloseR className=" text-lg" />
                    <p className="px-7">Doctor Consultancy</p>
                </div>

                <div className="flex items-center my-4 py-1 pl-[3rem] pr-[3.2rem] border rounded-lg ">
                    <CgCloseR className=" text-lg" />
                    <p className="px-7">Nutrition Guidance</p>
                </div>

            </div>
    </div>

  </div>
  )
}

export default page;
