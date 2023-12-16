
import React from 'react'
import Usercount from './uc';
import Barchart1 from './barchart';
import Bar2 from './bar2';
import ConDataTable from './condataTable';
import Leaderboard from './leaderboard';
import Winners from './winners';
const page = ({params}) => {
    
    const usercount=300;
    const maleFemaleratio = 
      [
        { data: [200,100] ,color:'blueviolet'},
        
      ]

    const ageRatio=[{ data: [2,15,55,60,77,13,10,5,3,1,0] ,color:["gray"],label:"Male"}, { data: [1,25,35,10,9,4,1,2,3,1,0],color:["blueviolet"],label:"Female" }]
    const tableData=["Walkathon" , "AAA" , "FitAware" , "11-12-2023","12.00-15.00","Common","Completed"]
    
      const winnerdat=['jkadsk425','asbbbnb122','andaasm132'] 
      
  return (
    <div>
    <div className='flex justify-center items-center gap-2 h-[100vh]  '>
      
      <div className='flex flex-col justify-center gap-2 '>
      <ConDataTable data={tableData}/>
      <div className='flex gap-2 justify-stretch'>
        <Usercount data={usercount}/>
        <Winners  data={winnerdat}/>
      </div>
        <Leaderboard/>
    </div>
       
        
        
       <div className='flex flex-col gap-2'>
          <Barchart1 data={maleFemaleratio}/>
          <Bar2 data={ageRatio}/>
      </div>
        
    </div>
    </div>
  )
}

export default page
