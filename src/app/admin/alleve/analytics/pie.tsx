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

export default function Pie() {
  return (
    <Card className='border-gray-300 border-2 pb-2'>
      <CardHeader className='text-center font-semibold text-xl'>Users Gender Ratio </CardHeader>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 500,color:'blue', label: 'Male' },
            { id: 1, value: 350,color:'red' ,label: 'Female' },

          ],
        },
      ]}
      width={400}
      height={220}
    />
    </Card>
  );
}