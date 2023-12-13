
 "use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
 import { useEffect, useState } from "react";


function Card({image}:{image:string}){

    return (
        <div className="relative rounded-xl mb-10 shadow-lg">
            
                <div className="flex items-end px-5 pb-5 absolute rounded-lg top-0 left-0 right-0 bottom-0" style={{backgroundColor : "rgba(0 , 0, 0, 0.35)"}}>
                    <p className="text-white"></p>
                </div>
                <Image 
                    alt="Loading"
                    className="rounded-lg"
                    src={require(`../1.jpg`)} 
                    height={100} width={100}
                />
        </div>
    )
}

export default function EventCarousal(){



    return (
        <Carousel 
            className="flex items-center justify-center gap-5 w-full md:px-10 max-md:px-5 rounded-lg " 
            infiniteLoop
            autoPlay
            showThumbs={false}
            showArrows={false}
            showStatus={false}
        >

            <Card image={'../1.jpg'}/>
            <Card image={'../1.jpg'}/>

            
        </Carousel>
    );
  };