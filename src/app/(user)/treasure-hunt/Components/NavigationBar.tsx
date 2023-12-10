
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5 py-10 text-white absolute left-0 right-0">
            <MdOutlineArrowBackIos />
            <p className="font-bold">Event Name</p>
            <HiDotsVertical />
        </div>
    );

}