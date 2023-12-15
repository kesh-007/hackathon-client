import SideMenu from "./Components/SideMenu";
import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { CgMenuGridO } from "react-icons/cg";

export default function AdminLayout({ children }) {


  return (
    <div>
      <div className="fixed">
      <Sheet >
  <SheetTrigger className="text-white bg-black p-1 rounded text-4xl m-3 font-semibold"><CgMenuGridO /></SheetTrigger>
  <SheetContent className="bg-black w-[400px] sm:w-[540px]" side='left'>
  
    <SheetHeader>
      <SheetTitle> <h1 className="text-2xl text-center font-bold mt-10 border-b-2 pb-4 text-white">
          FitAware Admin
        </h1></SheetTitle>
      <SheetDescription>
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
      </SheetDescription>
    </SheetHeader>
    
  </SheetContent>
</Sheet>
</div>
      {/* <div className=" flex-2 p-2 flex flex-col  h-[100vh] w-[17%] bg-black lg:block hidden  fixed ">
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
        </ol> */}


      <div>
      {children}
      </div>
    </div>
  );
}
