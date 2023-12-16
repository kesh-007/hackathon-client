'use client'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Bar2 = ({data}) => {
  return (
    <Card className='border-2 border-gray-300 bg-gray-100'>
      <h1 className="font-semibold text-xl text-center p-1">Participants Age</h1>
        <BarChart
  xAxis={[{ scaleType: 'band', data: ['<5',10,20,30,40,50,60,70,80,'90<'] }]}
  series={data}
  width={400}
  height={315}
/>
    </Card>
  )
}

export default Bar2
