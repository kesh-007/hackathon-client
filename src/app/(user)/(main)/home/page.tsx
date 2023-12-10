"use server"
import Banner from '@/components/main/home/Banner'
import Header from '@/components/main/home/Header'
import React from 'react'
import {DATA} from "./data/dummy";
import CategoryCard from './Components/CategoryCard';
import Graph from '../../walkathon/Components/Graph';

const page = () => {
  
  return (
    <div> 
      <Header/>
      <Banner/>
      <div className='p-3 font-bold'>
        <p className='text-xl py-2'>Category</p>
        <div className='flex gap-5 m-2 flex-1'>
        {
          DATA.map((value , index) => {
            return (

              <CategoryCard/>
            );
          })
        }
        </div>
        <div className='font-bold py-2 pb-10'>
            <p className='text-xl'>Health History</p>
            <Graph/>
        </div>
      </div>
    </div>
  )
}

export default page