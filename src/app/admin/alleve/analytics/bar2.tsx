import * as React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { BarChart } from '@mui/x-charts/BarChart';

export default function Bar2() {
  return (
    <Card className='border-2 border-gray-300'>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['0.00', '1.00', '2.00','3.00','4.00','5.00','6.00','7.00','8.00','9.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00'] }]}
      series={[{ data: [5, 2, 2,3,25,35,36,23,20,18,16,16,13,10,10,12,18,18,15.2,12,10,3,3] ,label:'Usage Details',color:'purple'}, ]}
      width={700}
      height={370}
    />
    </Card>
  );
}