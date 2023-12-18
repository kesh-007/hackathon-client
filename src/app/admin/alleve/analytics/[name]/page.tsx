import React from 'react'
import Bar from '../bar'
import BarChartComponent from '../bar'

const page = ({params}:{params:any}) => {
    console.log(params.name)
  
  
  return (
    <div>
      <div className='flex justify-between'>
        <div>
      {params.name}
      </div>
      


      </div>

      <BarChartComponent/>
      <p>Chart</p>
      
        
    </div>
  )
}

export default page