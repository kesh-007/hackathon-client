import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Usercount = ({data}) => {
  return (
    <div className='w-[100%]'>
      <Card className='bg-gray-100  border-2 border-gray-300 rounded'>
        <CardHeader className='text-2xl font-bold '>Participant Count</CardHeader>
        <CardFooter>
             <p className='text-xl bg-black text-white font-semibold rounded p-2'>{data}</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Usercount
