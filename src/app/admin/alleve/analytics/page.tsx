'use client'
import React from 'react'
import Bar from './bar'
import Pie from './pie'
import Line from './line'
import Pie2 from './pie2'
import Bar2 from './bar2'
import Link from 'next/link'

function page() {
  return (
    <div className='flex'>
       <div className='border-2 border-gray-300 flex-2 p-5 rounded m-5 md:mt-10 mt-5  flex flex-col items-center '>
  <h1 className='text-2xl font-bold mt-5 border-b-2 pb-4'>Fitadmin</h1>
  <ol className='mt-10'>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='/alleve'>Contest Schedule</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='events/login'>Add Admin</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center  bg-black p-2 text-white rounded'  ><Link href='alleve/analytics'>Analytics</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='/'>LogOut</Link></li>
  </ol>

  <h1 className='text-lg font-bold mt-40 '>Admin</h1>
  <h1 className='text-md  mb-5'>Admin Name</h1>
  </div> 
       <div className='md:mt-10 mt-5 flex gap-2 ml-4'>
        <div> 
          <div className='mb-3'>
             <Bar/>
          </div>
          <div>
             <Pie/>
          </div>
          </div>
       </div>
       <div className='md:mt-10 mt-5 flex gap-2 ml-4'>
       <div>
        <div className='flex gap-2'>
          <Line/>
          <Pie2 />
        </div>
        <div className='mt-3'>
          <Bar2/>
        </div>
        </div>
       </div>
    </div>
  )
}

export default page
