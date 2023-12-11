'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
const page = () => {

 const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    adminType:'',
 })

 const [suc,setSuc]=useState(false)

 const hassubmit = async (e:any) => {
    e.preventDefault(); 
    setSuc(true)
    setTimeout(()=>{setSuc(false); },3000)
    console.log(data)
 }

  return (
    <div>
       <div>
        <div className='flex justify-center'>{suc?<h1 className='text-center bg-green-500 p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Registered</h1>:<h1></h1>}</div>
        <div className='border-2 border-gray-300 flex-2 p-5 rounded m-5 md:mt-10 mt-5  flex flex-col items-center h-[90%] fixed'>
  <h1 className='text-2xl font-bold mt-5 border-b-2 pb-4'>Fitadmin</h1>
  <ol className='mt-10'>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded'  ><Link href='/alleve'>Contest Schedule</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center  bg-black p-2 text-white rounded' >Add Admin</li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='/alleve/analytics'>Analytics</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='/'>LogOut</Link></li>
  </ol>

  <h1 className='text-lg font-bold mt-40 '>Admin</h1>
  <h1 className='text-md  mb-5'>Admin Name</h1>
  </div> 


</div>

        <div className='flex justify-center'>
        <div className=' flex border-2 border-gray-200 rounded  mt-[7%] justify-center w-[40%] '>
       <form className='flex flex-col p-5 w-[150%]' >
        <div className='m-3 mb-4 flex flex-col'>
          <label className='mb-2 text-xl font-semibold'>Admin Name</label>
      <input className='border-2 bg-gray-200 rounded-md p-2' placeholder="Admin Name" type='text' onChange={(e)=>{
        setData({...data,name:e.target.value})
      }}></input>
</div>
<div  className='m-3 mb-4 flex flex-col'>
<label className='mb-2 text-xl font-semibold'>Email</label>
      <input className='border-2 bg-gray-200 rounded-md p-2' placeholder="email" type='email' onChange={(e)=>{
        setData({...data,email:e.target.value})
      }}></input>
</div>
<div className='m-3 mb-4 flex flex-col'>
<label className='mb-2 text-xl font-semibold'>Password</label>
      <input className='border-2 bg-gray-200 rounded-md p-2' placeholder="Password" type='password' onChange={(e)=>{
        setData({...data,password:e.target.value})
      }}></input>
</div>
<div className='m-3 mb-4 flex flex-col'>
<label className='mb-2 text-xl font-semibold'>Admin Type</label>
      <select className='border-2 bg-gray-200 rounded-md p-2' placeholder="Admin Type" onChange={(e)=>{
        setData({...data,adminType:e.target.value})
      }}>
       <option>Super Admin</option>
       <option>Admin</option>
      </select>
      </div>
      <div className='flex justify-center mt-3'>
      <button onClick={hassubmit} className='bg-black rounded text-white p-2 w-[50%] border-2 border-black hover:bg-white hover:text-black font-semibold'>Submit</button>
      </div>
      </form> 
      </div>
      </div>
      </div>
    
  )
}

export default page
