


import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5 font-bold text-black">

                <MdOutlineArrowBackIos />
            <p className="text-2xl">Walkathon</p>
            <HiDotsVertical />
        </div>
    );

}