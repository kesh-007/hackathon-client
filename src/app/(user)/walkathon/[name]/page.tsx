"use client"

import ProgressCharts from "../../(main)/analytics/Components/ProgressCharts";
import Graph from "../Components/Graph";
import MapComponent from "../Components/Maps";
import NavigationBar from "../Components/NavigationBar";




export default function Walkathon() {
  return (
    <div className='flex flex-1 h-screen flex-col'>
      
        <NavigationBar/>
        <Graph/> 
        <ProgressCharts />

        <div className=""/>
     <MapComponent/>

    </div>
    
    
  );
}