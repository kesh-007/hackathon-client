import SideMenu from "./Components/SideMenu";
import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export default function AdminLayout({ children }) {
  return (
    <div className="flex gap-2 ">
      <div className=" flex-2 p-2   flex flex-col  fixed h-[100vh] w-[17%] bg-black">
        <h1 className="text-2xl text-center font-bold mt-10 border-b-2 pb-4 text-white">
          FitAware Admin
        </h1>
        <ol className="mt-10">
          <Link href="/admin/alleve">
            {" "}
            <li className="text-lg font-medium md:mt-6  mt-4  bg-black text-gray-400 hover:text-white hover:bg-gray-900 p-2  rounded ">
              <div className="flex gap-5">
                <AiOutlineSchedule className="text-2xl text-center font-semibold" />
                Contest Schedule
              </div>
            </li>
          </Link>
          <Link href="/admin/alleve/events/login">
            {" "}
            <li className="text-lg font-medium md:mt-6  mt-4  bg-black text-gray-400 hover:text-white hover:bg-gray-900 p-2  rounded">
              <div className="flex gap-5">
                <RiAdminLine className="text-2xl text-center" />
                Add Admin
              </div>
            </li>
          </Link>
          <Link href="/admin">
            {" "}
            <li className="text-lg font-medium md:mt-6  mt-4  bg-black text-gray-400 hover:text-white hover:bg-gray-900 p-2  rounded">
              <div className="flex gap-5">
                <FiLogOut className="text-2xl text-center" />
                LogOut
              </div>
            </li>
          </Link>
          <Link href="/admin/alleve/analytics">
            <li className="text-lg font-medium md:mt-6  mt-4  bg-black text-gray-400 hover:text-white hover:bg-gray-900 p-2  rounded">
              <div className="flex gap-5">
                <GrAnalytics className="text-2xl text-center" />
                Analytics
              </div>
            </li>
          </Link>
        </ol>

        {/* <h1 className="text-lg font-bold mt-40 text-white text-center">
          <CgProfile className="text-5xl text-center ml-20 mb-2 text-white" />
          Admin
        </h1>
        <h1 className="text-md  mb-5 text-white text-center">Admin Name</h1> */}
      </div>
      {children}
    </div>
  );
}
