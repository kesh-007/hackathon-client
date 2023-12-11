"use client"
import { LineChart } from '@mui/x-charts/LineChart';
export default function Graph(){

    // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800];
    const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E', 
    ];

    return (
        <div className='bg-gray-200 mx-5 mt-5 pl-2 rounded-lg'>
            {/* <div className='justify-center flex w-full pt-5'>
                <p className='font-bold'>Analysis</p>
            </div> */}
            <LineChart
            width={350}
            height={300}
            className='w-[1/2] text-red-500'
        
            series={[
                { data: pData, color : "#F64D41" }
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
        </div>
        
    );

}