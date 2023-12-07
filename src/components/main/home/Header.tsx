"use client"
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { IoIosNotificationsOutline } from "react-icons/io";

  

const Header = () => {
  return (
    <div className='p-3'>
        <div className='flex justify-between'>
            <div className='flex gap-3'>

            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div>
        <h1 className=' text-gray-500'>Hello Keshav</h1>
        <h1 className='text-sm font-bold'>Ready to play?</h1>

    </div>
    

    </div>

    <div className='bg-gray-200 rounded-full p-1 w-10 h-10 flex items-center justify-center'>
  <IoIosNotificationsOutline size={24} />
</div>


            </div>



        
    </div>
  )
}

export default Header