import { FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { FcGoogle } from "react-icons/fc";

export default function LoginCard() {
  return (
    <div className="mx-2">
      <p className="text-[0.7rem]  text-gray-600">
      Empowering Fitness Through Fun: Where Games Drive Your Health Journey!

      </p>
      <Button className="bg-[#F64D41] mt-1 text-white p-5 w-full">
        <h1>Get Started</h1>
      </Button>
    </div>
  )

}
