import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { LineChart } from '@mui/x-charts/LineChart';


  export default function Line() {
    const uData = [300,700,1243,1777,2621,3221];
    const pData = [20, 398, 800, 1420, 1967,2343];

    const xLabels = [
        'july',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
      
    ];
  return (
   
    <Card className='border-gray-300 border-2 '>
      <CardHeader className='text-center font-semibold text-lg'>User count </CardHeader>
    <LineChart
       width={350}
       height={230}
       series={[
        { data: pData, label: 'Male',color:'blue' },
        { data: uData, label: 'Female',color:'red' },
       ]}
       xAxis={[{ scaleType: 'point', data: xLabels }]}
     />
     </Card>
  )
}
 