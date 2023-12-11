


import { MdOutlineArrowBackIos } from "react-icons/md";
// import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";

export default function NavigationBar(){

    return (
        <div className="flex justify-between items-center p-5 py-6 text-black">
            <Link href={"/profile"} className="bg-white rounded-[10rem] p-2 shadow-md">
                <MdOutlineArrowBackIos />
            </Link>
            <p className="text-2xl">Walkathon</p>
            {/* <HiDotsVertical /> */}
            <div className="w-[2rem]"/>
        </div>
    );

}