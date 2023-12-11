import React from 'react'
import Link from 'next/link';
import { BarChart } from '@mui/x-charts/BarChart';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const Bar = () => {
  return (
    <div>
    <Card className='border-gray-300 border-2'>
    <BarChart
 xAxis={[{ scaleType: 'band', data: ['Walkathon', 'TresureHunt', 'PostContest'] }]}
 series={[{ data: [400, 630, 400], color:'blue',label:'Male'}, { data: [250, 300, 650],color:'red',label:'Female' }]}
 width={500}
 height={350}
/>
  </Card>
  </div>
  )
}

export default Bar
