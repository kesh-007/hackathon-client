import React from 'react'
import Events from './Components/Events'
import NavigationBar from './Components/NavigationBar'

const page = () => {
  return (
    <div className='pb-20'>
      <NavigationBar/>
      <div className='px-5'>
        <div className='py-2'>
          <input 
              className='p-2 w-full rounded-lg px-4 outline-none'
              type='search' 
              placeholder='Search Event by name : ' 
              maxLength={15}
            />
        </div>
      </div>
      <div>
          <Events title={"Walkathon"}/>
      </div>
      <div>
          <Events title={"Walkathon"}/>
      </div>
    </div>
  )
}

export default page