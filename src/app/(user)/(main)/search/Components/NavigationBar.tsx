
"use client"
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5  text-black text-2xl ">
            <MdOutlineArrowBackIos />
            <p className="text-2xl font-bold">Search</p>
            <HiDotsVertical />
        </div>
    );

}