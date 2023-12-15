"use client";
import React from "react";
import { useState } from "react";
import axios from 'axios';
import Link from "next/link";
import { AdminTypeSelection } from "./AdminTypeSelection";
const page = () => {
  const [dat, setData] = useState({
    name: "",
    email: "",
    password: "",
    adminType: "",
  });

  const [suc, setSuc] = useState(false);
  const [rec, setrec] = useState(false);

  const hassubmit = async (e) => {
    e.preventDefault();
   
    const requiredFields = ['name', 'password', 'email', 'adminType'];
    const hasEmptyField = requiredFields.some(field => !dat[field]);

    if (hasEmptyField) {
      setrec(true);

      setTimeout(() => {
        setrec(false);
      }, 2500);
      return;
    }
      
   
    const res = await axios.post("/admin/alleve/formdata/api-adadm", dat);
    if (res.status == 200) {
      setSuc(true);

      setTimeout(() => {
        setSuc(false);
      }, 2500);
        }   
  };


  return (
    <div className="h-screen flex justify-center items-center">
      
        
        <div>{suc?<h1 className=' text-center bg-black text-white p-3 text-2xl font-semibold rounded fixed top-0 w-1/4  '>Submitted</h1>:<h1></h1>}</div>
        <div>{rec?<h1 className=' text-center bg-black text-white p-3 text-2xl font-semibold rounded fixed top-0 w-1/4  '>Enter all fields</h1>:<h1></h1>}</div>
     

    <div  className="flex flex-col  items-center gap-4 ">

         <h1 className=" text-4xl font-semibold">Add Admin</h1>
        <div className=" flex border-2 border-gray-300 rounded w-[150%]  ">
         
          <form className="flex flex-col p-5 w-[150%]">
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Name</label>
              <input
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="Admin name"
                type="text"
                onChange={(e) => {
                  setData({ ...dat, name: e.target.value });
                }}
              ></input>
            </div>
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Email</label>
              <input
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="email"
                type="email"
                onChange={(e) => {
                  setData({ ...dat, email: e.target.value });
                }}
              ></input>
            </div>
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Password</label>
              <input
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setData({ ...dat, password: e.target.value });
                }}
              ></input>
            </div>
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Admin Type</label>
              <select className='bg-gray-200 rounded p-2' onChange={(e) => {
                  setData({ ...dat, adminType: e.target.value });
                  
                }} >
                <option value="Superadmin">Super admin</option>
                <option value="admin">admin</option>
              </select>
            </div>
            {/* <div className="m-3 mb-4 flex flex-col">
                <label className="mb-2 text-xl font-semibold">Admin Type</label>
                <AdminTypeSelection/>
            </div> */}
            <div className="flex justify-center mt-3">
              <button type="submit"
                onClick={hassubmit}
                className="bg-black rounded text-white p-2 m-3 w-full border-2 border-black hover:bg-white hover:text-black font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    

  );
};

export default page;
