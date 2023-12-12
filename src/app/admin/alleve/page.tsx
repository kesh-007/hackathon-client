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



export default function Page() {

  const [date, setDate] = useState<Date | undefined>(new Date());

  const uData = [300, 700, 1243, 1777, 2621, 3221];

  const xLabels = ["july", "Aug", "Sept", "Oct", "Nov", "Dec"];

  return (
    
  <div>
      <div className="flex mt-10 gap-2 justify-end">
          
            <Card className="flex flex-2">
              <LineChart
                width={700}
                height={400}
                series={[{ data: uData, label: "Users" }]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </Card>
            <div className="flex justify-end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                />
            </div>
            
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex gap-4 justify-between">
          <EventCard 
              title={"Users"}
              childern = {<Button className="w-full">3221</Button>}
          />
          <EventCard 
              title={"Walkathon"}
              childern = {<Button className="w-full">Add</Button>}
          />
          <EventCard 
              title={"Treasure Hunt"}
              childern = {<Button className="w-full">Add</Button>}
          />
          <EventCard 
              title={"Others"}
              childern = {<Button className="w-full">Add</Button>}
          />
                
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
        <div className=" mt-20 border rounded flex-3">
          <DataTable/>
        </div>
      </div>
      <div className="h-[10rem]"/>
    </div>
  );
}
