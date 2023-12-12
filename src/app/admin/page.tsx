
// "use client";
// import React from "react";
// import { useState } from "react";
// import Link from "next/link";
// const page = () => {
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const hassubmit = async (e) => {
//     e.preventDefault
//     console.log(data);
//   };

//   return (
//     <div>
//       {/* <div>
        
//         <div className='border-2 border-gray-300 flex-2 p-5 rounded m-5 md:mt-10 mt-5  flex flex-col items-center h-[90%] fixed'>
//   <h1 className='text-2xl font-bold mt-5 border-b-2 pb-4'>Fitadmin</h1>
//   <ol className='mt-10'>
//     <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded'  ><Link href='http://localhost:3000/alleve/'>Contest Schedule</Link></li>
//     <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='http://localhost:3000/alleve/events/login'>Add Admin</Link></li>
//     <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='http://localhost:3000/alleve/events/analytics'>analytics</Link></li>
    
//   </ol>

//   <h1 className='text-lg font-bold mt-40 '>Admin</h1>
//   <h1 className='text-md  mb-5'>Admin Name</h1>
//   </div> 


// </div> */}

//       <div className="flex justify-center">
//         <div className=" flex border-2 border-gray-200 rounded  mt-[10%] justify-center w-[40%] ">
//           <form className="flex flex-col p-5 w-[150%]">
//             <h1 className="text-2xl font-semibold text-center mb-5">
//               Admin Login
//             </h1>
//             <div className="m-3 mb-4 flex flex-col">
//               <label className="mb-2 text-xl font-semibold">Email</label>
//               <input
//                 className="border-2 bg-gray-200 rounded-md p-2"
//                 placeholder="email"
//                 type="email"
//                 onChange={(e) => {
//                   setData({ ...data, email: e.target.value });
//                 }}
//               ></input>
//             </div>
//             <div className="m-3 mb-4 flex flex-col">
//               <label className="mb-2 text-xl font-semibold">Password</label>
//               <input
//                 className="border-2 bg-gray-200 rounded-md p-2"
//                 placeholder="Password"
//                 type="password"
//                 onChange={(e) => {
//                   setData({ ...data, password: e.target.value });
//                 }}
//               ></input>
//             </div>
//             {/* <div className='m-3 mb-4 flex flex-col'>
// <label className='mb-2 text-xl font-semibold'>Admin Type</label>
//       <select className='border-2 bg-gray-200 rounded-md p-2' placeholder="Admin Type" onChange={(e)=>{
//         setData({...data,adminType:e.target.value})
//       }}>
//        <option>Super Admin</option>
//        <option>Admin</option>
//       </select>
//       </div> */}
//             <div className="flex justify-center mt-3">
//               <button
//                 onClick={hassubmit}
//                 className="bg-black rounded text-white p-2 w-[50%] border-2 border-black hover:bg-white hover:text-black font-semibold"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


"use client";
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import {useRouter} from 'next/navigation'




export default function CardWithForm() {

  const navigate = useRouter();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [suc,setSuc]=useState(false)
  
  
  function cl(){
    if(email==='fitaware@gmail.com' && password==='1234'){
      
      navigate.push('/admin/alleve')
      //redirect('/admin/alleve');

    }
    else{
          setSuc(true)
          setTimeout(()=>{
            setSuc(false)
          },3000);
    }
  }
  return (
    <>
    <div className='flex justify-center'>{suc ? <h1 className='text-center bg-red-500 p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Wrong Details</h1> : <h1></h1>}</div><div className="flex justify-center items-center h-screen bg-white">
      <Card className="w-[35rem] ">
        <CardHeader className="flex">
          <CardTitle>Login</CardTitle>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form className="gap-10 flex flex-col">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3 text-lg">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="example@gmail.com" type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-3 text-lg">
                <Label htmlFor="name">Password</Label>
                <Input id="name" onChange={(e) => setPassword(e.target.value)} type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex w-full">
          <Button className="w-full" onClick={cl}>Login</Button>
        </CardFooter>
      </Card>
    </div></>
    
  )
}
