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
    
  <div className="ml-[17%] flex flex-1 h-screen justify-center">
      <div className="flex flex-col mt-10">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-6">
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
          <DataTable />   
        </div>
        </div>
         <div className="pt-5 flex flex-col justify-between">
            <Card className="flex flex-2 border-2 border-gray-300 rounded bg-grey-100">
              <LineChart
                width={260}
                height={200}
                series={[{ data: uData, label: "Users" }]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </Card>
            <div className="mt-2">
            <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-2 border-gray-300 pl-7"
                />
                </div>
            </div>
                
          {/* <div className="flex-1">
            <Card className="h-[100%]">
              <CardHeader>
                <CardTitle className="text-xl">Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl bg-black p-1 text-white text-center rounded mt-3">
                  3221
                </p>
              </CardContent>
            </Card>
          </div> */}
          {/* <div className="flex-1"> */}
            {/* <Card className="h-[100%] ">
              <CardHeader>
                <CardTitle className="text-xl">Walkathon</CardTitle>
              </CardHeader>
              <CardFooter>
                
              </CardFooter>
            </Card> */}
          {/* </div> */}
          {/* <div className="flex-1"> */}
            {/* <Card className="h-[100%]">
              <CardHeader>
                <CardTitle className="text-xl">Other Contest</CardTitle>
              </CardHeader>
              <CardFooter>
                <Link
                  className="bg-black p-2 mt-3 pl-4 pr-4  text-white rounded"
                  href="alleve/events/oc"
                >
                  Add
                </Link>
              </CardFooter>
            </Card> */}
          {/* </div> */}
          {/* <div className="flex-1"> */}
            {/* <Card className="h-[100%]">
              <CardHeader>
                <CardTitle className="text-xl">TreasureHunt</CardTitle>
              </CardHeader>
              <CardFooter>
                <Link
                  className="bg-black p-2 mt-3 pl-4 pr-4 text-white rounded"
                  href="alleve/events/wtn"
                >
                  Add
                </Link>
              </CardFooter>
            </Card> */}
          {/* </div> */}
        </div>
        
        
        
       
      </div>
     </div>
    
  );
}
