'use client';
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link'
import { AdminContestForm } from './AdminContestForm';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



function Page() {
  

  const [indat,setIndat]=useState({
    ct:'',
    conName:'',
    organizer:'',
    sdate:'',
    edate:'',
    st:'',
    et:'',
    gender:'',
    dec:'',
    price:'',
  }) 
  const [suc,setSuc]=useState(false)
  const [rec,setrec]=useState(false)


  const hassubmit = async (e) => {
    e.preventDefault(); 
    console.log(indat)
    const requiredFields = ['ct','conName', 'organizer', 'sdate','edate', 'st', 'et', 'dec','gender', 'price'];
    const hasEmptyField = requiredFields.some(field => !indat[field]);

    if (hasEmptyField) {
      setrec(true);

      setTimeout(() => {
        setrec(false);
      }, 3000);
      return;
    }
      
   
    const res = await axios.post("/admin/alleve/formdata/api-yg", indat);
    if (res.status == 200) {
      setSuc(true);

      setTimeout(() => {
        setSuc(false);
      }, 3000);
        }   
   
  };
  
  return <>
  <div className='mt-5 flex justify-center'>
   
    <div className='flex justify-center '>{suc?<h1 className=' ml-[100%] text-center bg-black text-white p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Submitted</h1>:<h1></h1>}</div>
    <div className='flex justify-center '>{rec?<h1 className=' ml-[100%] text-center bg-black text-white p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Enter all fields</h1>:<h1></h1>}</div>
      
    </div>
    <div className=' mt-10'>
    
  <div className=' mt-5 rounded flex justify-center mb-10'>
  <Card className="w-[50%]">
      <CardHeader>
        <CardTitle className="text-center">Create Context</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Contest Type</Label>
              <select className='bg-gray-100 rounded p-2' onChange={(e) => {
                  setIndat({ ...indat, ct: e.target.value });
                  console.log(e.target.value)
                }}>
                <option>Yoga</option>
                <option>other</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Contest Name</Label>
              <Input
                id="name"
                placeholder="Contest Name"
                onChange={(e) => {
                  setIndat({ ...indat, conName: e.target.value });
                }}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Organizer</Label>
              <Input
                id="name"
                placeholder="Organizer Name"
                onChange={(e) => {
                  setIndat({ ...indat, organizer: e.target.value });
                }}
              />

            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">StartDate</Label>
              <Input
                id="name"
                type='date'
                placeholder="Start Date"
                onChange={(e) => {
                  setIndat({ ...indat, sdate: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">EndDate</Label>
              <Input
                id="name"
                type='date'
               
                onChange={(e) => {
                  setIndat({ ...indat, edate: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">StartTime</Label>
              <Input
                id="name"
                type='time'
                onChange={(e) => {
                  setIndat({ ...indat, st: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">EndTime</Label>
              <Input
                id="name"
                type='time'
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, et: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
              <Input
                id="name"
                placeholder="Price"
                onChange={(e) => {
                  setIndat({ ...indat, price: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Contest Gender Type</Label>
              <select className='bg-gray-100 rounded p-2' onChange={(e) => {
                  setIndat({ ...indat, gender: e.target.value });
                  
                }} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <Label className='mt-2'>Description</Label>
            <textarea
              name="dec"
              rows={5}
              className="bg-gray-100"
              onChange={(e) => {
                setIndat({ ...indat, dec: e.target.value });
              }}
            ></textarea>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center ">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button className='p-2 w-40' onClick={hassubmit}>Submit</Button>
      </CardFooter>
    </Card>
  </div>
  </div>

  </>
}


export default Page