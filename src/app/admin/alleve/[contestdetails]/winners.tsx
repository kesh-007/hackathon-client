import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const Winners = ({data}) => {
  return (
    <div  className='w-[100%]'>
    <Card className="border-2 border-gray-300 bg-gray-100 rounded w-[100%] p-2 pb-1  text-center ">
        <h1 className="font-bold text-2xl mb-2">Winners</h1>
        {
        data.map((v,i)=>(
            <CardDescription className='font-bold text-white text-center ml-4  bg-gray-500 p-1 m-1 rounded'>{i+1}:- {v}</CardDescription>
        ))
}
     
    </Card>
    </div>
  )
};

export default Winners
