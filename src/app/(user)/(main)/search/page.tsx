import React from 'react'
import Events from './Components/Events'
import NavigationBar from './Components/NavigationBar'

const page = () => {
  return (
    <div className='pb-20 h-screen overflow-y-scroll'>
      <NavigationBar/>
      <div className='px-5'>
        <div className='py-2'>
          <input 
              className='p-3 w-full rounded-lg px-4 outline-none'
              type='search' 
              placeholder='Search event' 
              maxLength={15}
            />
        </div>
      </div>
      <div>
          <Events title={"Walkathon"}/>
      </div>
      <div className='p-5'>
          <p className='text-2xl'>Others</p>
          <div className='h-[10rem] bg-red-500 my-5'>

          </div>
      </div>
    </div>
  )
}

export default page