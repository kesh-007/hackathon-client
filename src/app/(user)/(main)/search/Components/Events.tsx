"use client";
// import { Carousel } from "react-responsive-carousel";
import EventCarousal from "./EventsCarousal";

export default function Events({title}){

    return (
        <div className="">
            <div className="p-5 text-xl">
                <p>{title}</p>
            </div>
            <EventCarousal/>
        </div>
    );

}