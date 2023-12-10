

import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5 py-6 text-black">
            <MdOutlineArrowBackIos />
            <p className="font-bold">Search</p>
            <HiDotsVertical />
        </div>
    );

}