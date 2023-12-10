
// import StepCount from "@/app/(user)/treasure-hunt/Components/StepCount";
import ProgressBar from "./ProgressBar";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoFootstepsSharp } from "react-icons/io5";
import { FaWeightScale } from "react-icons/fa6";


function StepsCard({value}){

    return (
        <div className="ml-2 mr-2 flex-[0.9] bg-purple-200 border border-purple-200 rounded-xl p-2 flex items-center justify-between flex-col">
            {/* <StepCount progress={50}/> */}
            <div className="flex w-full p-2 items-center">
                <div className="flex gap-5 items-center">
                    <div className="bg-white p-2 rounded text-purple-500">
                        <IoFootstepsSharp />
                    </div>
                    <p className="font-bold text-gray-500">Steps (Km)</p>
                </div>
            </div>
            <div>
                <ProgressBar progress={value}/>
            </div>
            <div className="flex w-full justify-between px-3">

                <p className="text-gray-500">Average</p>
                <p className="font-bold ">{value}</p>
            </div>
        </div>
    )

}

function CaloriesCard({value}){
    return (
        <div className={"p-4 bg-red-100 mr-2 ml-2 border-2 border-red-200 rounded-xl"}>
                    <div className="flex gap-5 items-center pb-5">
                        <div className="text-red-500 p-2 bg-white rounded">
                            <FaFireFlameCurved />
                        </div>
                        <p className="font-bold  text-gray-500">Calories</p>
                    </div>
                    <div className="flex items-baseline gap-5">
                        <p className="text-4xl">{value}</p>
                        <p>Kcal</p>
                    </div>
        </div>
    )

}

function WeightCard({value}){
    return (
        <div className={"p-4 bg-blue-100 mr-2 ml-2 border-2 border-blue-200 rounded-xl"}>
                    <div className="flex gap-5 items-center pb-5">
                        <div className="text-blue-500 p-2 bg-white rounded">
                            <FaWeightScale />                        
                        </div>
                        <p className="font-bold  text-gray-500">Weight</p>
                    </div>
                    <div className="flex items-baseline gap-5">
                        <p className="text-4xl">{value}</p>
                        <p className="text-gray-500">/75kg</p>
                    </div>
        </div>
    );
}

export default function ProgressCharts({stepsCount , calories , weight}){
    return (
        <div className="w-full flex flex-1 p-2 py-5">
            <StepsCard value={stepsCount}/>
            <div className="flex flex-1 flex-col gap-5 ">
                <CaloriesCard value={calories}/>
                <WeightCard value={weight}/>
            </div>
        </div>
    );
}