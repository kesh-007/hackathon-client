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
const Barchart1 = ({data}) => {
 
  return (
<Card className=" border-2 border-gray-300 bg-gray-100 flex flex-col items-center">
        <CardHeader className="font-semibold text-xl ">
          Participant gender Count
        </CardHeader>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Male", "Female", ],
            },
          ]}
          series={data}
          width={350}
          height={240}
        />
      </Card>
  )
}

export default Barchart1
