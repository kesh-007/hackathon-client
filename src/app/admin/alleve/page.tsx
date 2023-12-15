"use client";
import React from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LineChart } from "@mui/x-charts/LineChart";

import { useState } from "react";

import { EventCard } from "./Components/EventCard";
import {Button} from "@/components/ui/button";
import DataTable from "./Components/Table";
import AdminLayout from "./layout";
import NavBar from "@/components/NavBar";



export default function Page() {

  const [date, setDate] = useState<Date | undefined>(new Date());

  const uData = [300, 700, 1243, 1777, 2621, 3221];

  const xLabels = ["july", "Aug", "Sept", "Oct", "Nov", "Dec"];

  return (
    
  <div className=" flex justify-center  ">
      <div className="flex flex-col justify-center mt-10 ">
    <div className="flex gap-2  ">
      <div className="flex flex-col gap-4">
          <div className="flex gap-2 mt-5">
          <EventCard 
              title={"Users"}
              childern = {<Button className="w-full">3221</Button>}
          />
          <EventCard 
              title={"Walkathon"}
              childern = {<Link href='/admin/alleve/events/admin-wt'><Button className="w-full">Add</Button></Link>}
          />
          <EventCard 
              title={"Treasure Hunt"}
              childern = {<Link href='/admin/alleve/events/admin-th'><Button className="w-full">Add</Button></Link>}
          />
          <EventCard 
              title={"Others"}
              childern = {<Link href='/admin/alleve/events/oc'><Button className="w-full">Add</Button></Link>}
          />
        </div>
        <div className=" border-2 rounded">
          <DataTable  />   
        </div>
      </div>
        <div className="pt-5 flex flex-col gap-4">
            <Card className=" border-2 border-gray-300 rounded bg-grey-100 ">
              <LineChart
                width={300}
                height={200}
                series={[{ data: uData, label: "Users" }]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </Card>
            <div>
           <div >  
            <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-2 border-gray-300 pl-7 "
                />
               </div>  
                </div>
            </div>
                
         
        </div>
        
        
        
       
      </div>
     </div>
    
  );
}
