'use client'
import React from 'react'
import Link from 'next/link'
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { LineChart } from '@mui/x-charts/LineChart';

import { useState } from 'react';


function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  

const uData = [300,700,1243,1777,2621,3221];

const xLabels = [
    'july',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
  
];
  return <> 
<div className='flex gap-2'>
  <div className='border-2 border-gray-300 flex-2 p-5 rounded m-5 md:mt-10 mt-5  flex flex-col items-center '>
  <h1 className='text-2xl font-bold mt-5 border-b-2 pb-4'>Fitadmin</h1>
  <ol className='mt-10'>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center  bg-black p-2 text-white rounded' >Contest Schedule</li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='alleve/events/login'>Add Admin</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='alleve/analytics'>Analytics</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='/'>LogOut</Link></li>
  </ol>

  <h1 className='text-lg font-bold mt-40 '>Admin</h1>
  <h1 className='text-md  mb-5'>Admin Name</h1>
  </div> 

<div className='flex flex-col mt-10'>
  <div className='flex gap-4'>
    <div className='flex-1'>
    <Card className='h-[100%]'>
    <CardHeader>
         <CardTitle className='text-xl'>Users</CardTitle>
    </CardHeader>
    <CardContent>
    <p className='text-2xl bg-black p-1 text-white text-center rounded mt-3'>3221</p>
  </CardContent>
     </Card >
    </div>
    <div className='flex-1'>
    <Card className='h-[100%] '>
    <CardHeader>
         <CardTitle className='text-xl'>Walkathon</CardTitle>
    </CardHeader>
     <CardFooter>
           <Link className='bg-black p-2 mt-3 pl-4 pr-4 text-white rounded' href='alleve/events/yoga'>Add</Link>
     </CardFooter>
     </Card>
    </div>
    <div className='flex-1'>
    <Card className='h-[100%]'>
    <CardHeader>
         <CardTitle className='text-xl'>Other Contest</CardTitle>
    </CardHeader>
     <CardFooter>
           <Link className='bg-black p-2 mt-3 pl-4 pr-4  text-white rounded' href='alleve/events/oc'>Add</Link>
     </CardFooter>
     </Card>
    </div>
    <div className='flex-1' >
    <Card className='h-[100%]' >
    <CardHeader>
         <CardTitle className='text-xl'>TreasureHunt</CardTitle>
    </CardHeader>
     <CardFooter>
           <Link className='bg-black p-2 mt-3 pl-4 pr-4 text-white rounded' href='alleve/events/wtn'>Add</Link>
     </CardFooter>
     </Card>
    </div>
  </div>



  <div className=' mt-5 border-2  border-gray-200 rounded flex-3'>

 <Table className='overflow-scroll'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
    <TableHead className='text-md font-semibold' >Contest Type</TableHead>
      <TableHead className='text-md font-semibold' >Contest Name</TableHead>
      <TableHead className='text-md font-semibold' >Organizer</TableHead>
      <TableHead className='text-md font-semibold' >Date</TableHead>
      <TableHead className='text-md font-semibold' >Timing</TableHead>
      <TableHead className='text-md font-semibold' >Participate Count</TableHead>
      <TableHead className='text-md font-semibold' >status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
    <TableCell>Walkathon</TableCell>
      <TableCell className="font-medium">AAA</TableCell>
      <TableCell>Fit1</TableCell>
      <TableCell>20-12-2023</TableCell>
      <TableCell>2.00-12.00</TableCell>
      <TableCell>300</TableCell>
      <TableCell className='text-green-600 font-semibold' >In progress</TableCell>
    </TableRow>
   
    <TableRow>
    <TableCell>YogaPost</TableCell>
      <TableCell className="font-medium">AAA</TableCell>
      <TableCell>Fit1</TableCell>
      <TableCell>25-12-2023</TableCell>
      <TableCell>6.00-12.00</TableCell>
      <TableCell>120</TableCell>
      <TableCell className='text-red-600 font-semibold' >Cancelled</TableCell>
    </TableRow>
    <TableRow>
    <TableCell>TresureHunt</TableCell>
      <TableCell className="font-medium">DDD</TableCell>
      <TableCell>FitZone</TableCell>
      <TableCell>01-01-2024</TableCell>
      <TableCell>0.00-24.00</TableCell>
      <TableCell>3200</TableCell>
      <TableCell className='text-green-600 font-semibold' >In progress</TableCell>
    </TableRow>
    <TableRow>
    <TableCell>Walkathon</TableCell>
      <TableCell className="font-medium">WDD</TableCell>
      <TableCell>FitZone</TableCell>
      <TableCell>01-01-2024</TableCell>
      <TableCell>0.00-24.00</TableCell>
      <TableCell>4300</TableCell>
      <TableCell className='text-green-600 font-semibold' >In progress</TableCell>
    </TableRow>
    <TableRow>
    <TableCell>TresureHunt</TableCell>
      <TableCell className="font-medium">EEE</TableCell>
      <TableCell>Fit2</TableCell>
      <TableCell>04-11-2023</TableCell>
      <TableCell>24.00-16.00</TableCell>
      <TableCell>2590</TableCell>
      <TableCell className='text-blue-600 font-semibold' >Completed</TableCell>
    </TableRow>
    <TableRow>
    <TableCell>TresureHunt</TableCell>
      <TableCell className="font-medium">FFF</TableCell>
      <TableCell>Fitzone</TableCell>
      <TableCell>14-11-2023</TableCell>
      <TableCell>9.00-12.00</TableCell>
      <TableCell>3330</TableCell>
      <TableCell className='text-blue-600 font-semibold' >Completed</TableCell>
    </TableRow>
    <TableRow>
    <TableCell>YogaPost</TableCell>
      <TableCell className="font-medium">GGG</TableCell>
      <TableCell>Fit2</TableCell>
      <TableCell>29-11-2023</TableCell>
      <TableCell>13.00-16.00</TableCell>
      <TableCell>2590</TableCell>
      <TableCell className='text-red-600 font-semibold' >Cancelled</TableCell>
    </TableRow>
    
    
    
    
  </TableBody>
</Table>
</div>

</div>
<div className='flex flex-col mt-10 ml-4 gap-2'>
    <div className='' >
      <Card >
         <LineChart
            width={350}
            height={270}
            series={[
              { data: uData, label: 'Users' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
          />
          </Card>
  </div>
  <div>
   
  <Calendar 
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border pl-10"
  />
  
  </div>
</div>
</div>
  </>
}

export default Page;