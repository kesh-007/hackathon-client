"use client";
import { useEffect, useState } from "react";
import StepCount from "./Components/StepCount";
import Steps from "./Components/Steps";
import NavigationBar from "./NavigationBar";

export default function TreasureHunt(){

  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-screen flex flex-1 flex-col w-screen" >
      <NavigationBar/>
      
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center  flex-col items-center">
          
          <div className="bg-red-800 rounded-[10em] relative flex justify-center items-center border-green-500">
            <div  className="bg-red-500 flex absolute p-[6.3rem] py-[7.5rem] rounded-[8rem]"><p className="text-transparent">askdjad</p></div>
            <StepCount progress={progress}/>
          </div>
      </div>
      <div className="flex flex-[0.7] graph items-end bg-gradient-to-t from-[#F64D41] to-red-700" >
        <div className="h-full bg-gradient-to-t from-red-700 via-transparent to-transparent w-full "><p>askdjnas</p></div>
      </div>
      <div className="flex flex-[0.8] bg-red-700">
        <Steps progress = {progress}/>
      </div>
      {/* <div className="flex flex-[0.15] bg-gray-300"/> */}
            
    </div>
  );

}