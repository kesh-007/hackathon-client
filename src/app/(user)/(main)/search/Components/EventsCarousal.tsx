
// "use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
// import { useEffect, useState } from "react";


function Card(){

    return (
        <div className="relative rounded-xl mb-10 shadow-lg">
                {/* <h1 className="text-2xl">hint 1</h1> */}
            
                <div className="flex items-end px-5 pb-5 absolute rounded-lg top-0 left-0 right-0 bottom-0" style={{backgroundColor : "rgba(0 , 0, 0, 0.35)"}}>
                    <p className="text-white">Walkathon is called Walkathon because it is Walkathon</p>
                </div>
                <Image 
                    alt="Loading"
                    className="rounded-lg"
                    src={require("../1.jpg")} 
                    height={100} width={100}
                />
        </div>
    )
}

export default function EventCarousal(){

    const data = [
        {
            id : 1 , 
            url : "../1.jpg",
        }
    ]

    // const [currentSlide, setCurrentSlide] = useState(0);
    // const totalSlides = 5;

//   useEffect(() => {
    // Change the active slide every 3 seconds (adjust the interval as needed)
//     const interval = setInterval(() => {
//       const nextSlide = (currentSlide + 1) % totalSlides;
//       setCurrentSlide(nextSlide);
//     }, 5000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(interval);
//     // if (progress === 100){
//     //     setCurrentSlide((currentSlide + 1) % totalSlides)
//     // }
//   }, []);

    return (
        <Carousel 
            className="flex items-center justify-center gap-5 w-full md:px-10 max-md:px-5 rounded-lg " 
            infiniteLoop
            autoPlay
            // autoPlay={false}
            // swipeable={false}
            // stopOnHover={false}
            showThumbs={false}
            // selectedItem={currentSlide}
            showArrows={false}
            showStatus={false}
        >

            <Card/>
            <Card/>
            <Card/>
            
        </Carousel>
    );
  };