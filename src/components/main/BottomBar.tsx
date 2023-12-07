"use client"
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { PiNotepad } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";

const BottomNavBar = () => {
  const [active, setActive] = useState("home");

  const handleIconClick = (iconName: string) => {
    setActive(iconName);

  };

  const getIconStyle = (iconName: string) => {
    return active === iconName ? "text-2xl" : "";
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full dark:bg-inherit bg-white border p-4 flex justify-between items-center text-xl ">
      <div onClick={() => handleIconClick("home")} >
        <Link href={'/home'}>
        <GoHome className={getIconStyle("home")} color={active === "home" ? "#F64D41" : "#ccc"} />
        </Link>
      </div>

      <div onClick={() => handleIconClick("search")}>
        <Link href={'/search'}>
        <IoSearchSharp className={getIconStyle("search")} color={active === "search" ? "#F64D41" : "#ccc"} />
        </Link>
      </div>

      <div onClick={() => handleIconClick("analytics")}>
        <Link href={'/analytics'}>
        <SiGoogleanalytics className={getIconStyle("analytics")} color={active === "analytics" ? "#F64D41" : "#ccc"} />
        </Link>
      </div>

      <div onClick={() => handleIconClick("notepad")}>
        <Link href={'/blog'}>
        <PiNotepad className={getIconStyle("notepad")} color={active === "notepad" ? "#F64D41" : "#ccc"} />
        </Link>
      </div>

      <div onClick={() => handleIconClick("account")}>
        <Link href={'/profile'}>
        <VscAccount className={getIconStyle("account")} color={active === "account" ? "#F64D41" : "#ccc"} />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavBar;
