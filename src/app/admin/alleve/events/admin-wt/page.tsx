'use client';
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link'


function Page() {
  // const [name,setname]=useState('')
  // const [organizer,setorganizer]=useState('')
  // const [date,setdate]=useState('')
  // const [st,setst]=useState('')
  // const [et,setet]=useState('')
  // const [loc,setloc]=useState('')
  // const [dec,setdec]=useState('')
  const [suc,setSuc]=useState(false)
  const [rec,setrec]=useState(false)
  const [indat,setIndat]=useState({
    ct:'Walkathon',
    WalkathonName:'',
    organizer:'',
    date:'',
    st:'',
    et:'',
    sloc:'',
    eloc:'',
    dec:'',
    gender:'',
    price:'',
  }) 


  const hassubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['WalkathonName', 'organizer', 'date', 'st', 'et', 'sloc', 'eloc', 'dec', 'price','gender'];
    const hasEmptyField = requiredFields.some(field => !indat[field]);

    if (hasEmptyField) {
      setrec(true);

      setTimeout(() => {
        setrec(false);
      }, 3000);
      return;
    }
      
   
    const res = await axios.post("/admin/alleve/formdata/api-wt", indat);
    if (res.status == 200) {
      setSuc(true);

      setTimeout(() => {
        setSuc(false);
      }, 3000);
        }   
   }
  

  return <>
  <div className='mt-5'>
   
    <div className='flex justify-center '>{suc?<h1 className=' ml-[100%] text-center bg-black text-white p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Submitted</h1>:<h1></h1>}</div>
    <div className='flex justify-center '>{rec?<h1 className=' ml-[100%] text-center bg-black text-white p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Enter all fields</h1>:<h1></h1>}</div>
    </div>
    <div className='ml-[35%]'>
    <h1 className='ml-40 font-bold text-4xl mt-20 '>Add Walkathon Contest</h1>
  <div className=' md:p-10 p-5   md:m-10 m-5 border-2 border-gray-300 rounded w-[110%] '>
    <form className='flex flex-col gap-2' >
     
    <label  className=' text-lg font-semibold mt-2'  htmlFor="name">Walkathon Name</label>
    <input className='p-2 bg-gray-300 rounded-md' type="text" id="username" name="name" required onChange={(e)=>{
          setIndat({...indat, WalkathonName:e.target.value})
    }}></input>
  
    <label  className=' text-lg font-semibold mt-2' htmlFor="organizer">Organizer</label>
    <input className='p-2 bg-gray-300 rounded-md' type="text" id="organizer" name="organizer" required onChange={(e)=>{
          setIndat({...indat,organizer:e.target.value})}}></input>

    <label  className=' text-lg font-semibold mt-2' htmlFor="date">Date</label>
    <input className='p-2 bg-gray-300 rounded-md' type="date" id="date" name="date" required onChange={(e)=>{
      setIndat({...indat,date:e.target.value})}}></input>

    <label  className=' text-lg font-semibold mt-2'> StartTime</label>
    <input className='p-2 bg-gray-300 rounded-md' type="time" name='st' required onChange={(e)=>{
      setIndat({...indat,st:e.target.value})}}/>

    <label  className=' text-lg font-semibold mt-2'> EndTime</label>
    <input className='p-2 bg-gray-300 rounded-md' type="time" name='et' required onChange={(e)=>{
      setIndat({...indat,et:e.target.value})}}/>

    <label  className=' text-lg font-semibold mt-2'>StartLocation</label>
    <input className='p-2 bg-gray-300 rounded-md' type="text"  name="location" required onChange={(e)=>{
      setIndat({...indat,sloc:e.target.value})}}></input>

<label  className=' text-lg font-semibold mt-2'>Destination</label>
    <input className='p-2 bg-gray-300 rounded-md' type="text"  name="location" required onChange={(e)=>{
      setIndat({...indat,eloc:e.target.value})}}></input>

<label  className=' text-lg font-semibold mt-2'>Price</label>
    <input className='p-2 bg-gray-300 rounded-md' type="number"  name="price" required onChange={(e)=>{
      setIndat({...indat,price:e.target.value})}}></input>

<div className="flex flex-col space-y-1.5">
            <label className=' text-lg font-semibold mt-2' htmlFor="framework">Contest Gender Type</label>
              <select className='bg-gray-300 rounded p-2' onChange={(e) => {
                  setIndat({ ...indat, gender: e.target.value });
                  
                }} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

    <label  className=' text-lg font-semibold mt-2'>Description</label>
   <textarea className='bg-gray-300' name="dec" onChange={(e)=>{
    setIndat({...indat,dec:e.target.value})}}></textarea>
<div className="flex justify-center">
   <input type='submit' className=' bg-black font-semibold p-3 rounded sm:mt-10 mt-5 border-2 border-black w-40 ml-20 sm:ml-60 xl:ml-8 lg:w-1/3 md:ml-72 md:w-60  hover:bg-white hover:text-black text-white'  onClick={hassubmit}></input>
     </div>
    </form>
  </div>
  </div>

  </>
};


export default Page;