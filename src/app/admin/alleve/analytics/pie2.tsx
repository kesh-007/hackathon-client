import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function Pie2() {
  return (
    <Card className='border-gray-300 border-2 '>
      <CardHeader className='text-center font-semibold text-lg'>Contest Participant Ratio </CardHeader>
    <PieChart 
      series={[
        {
          data: [
            { value:650 ,  label: 'Walkathon' },
            { value:930 , label: 'TresureHunt' },
            { value:1050 , label: 'PostContest' },
          ],
        },
      ]}
      width={370}
      height={200}
    />
    </Card>
  );
}