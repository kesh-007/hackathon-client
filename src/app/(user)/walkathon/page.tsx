"use client"

import ProgressCharts from "../(main)/analytics/Components/ProgressCharts";
import Graph from "./Components/Graph";
import MapComponent from "./Components/Maps";
import NavigationBar from "./Components/NavigationBar";

// import * as React from 'react';



export default function Walkathon() {
  return (
    <div className='flex flex-1 h-screen flex-col'>
        {/* <div className="p-5">
            <h1 className='text-4xl'>Walkathon</h1>
        </div> */}
        <NavigationBar/>
        <Graph/> 
        <ProgressCharts/>
        <div className="mx-5 rounded-lg">
          <MapComponent/>
        </div>
        <div className="h-[20rem]"/>
    </div>
    // <MapComponent/>
    
  );
}