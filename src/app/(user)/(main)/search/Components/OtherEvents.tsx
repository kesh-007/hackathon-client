"use client"
import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FetchWalkathon } from "@/api"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import  Cookies  from 'universal-cookie';
import { useRouter } from "next/navigation"


export interface Artwork {
  artist: string
  art: string
}

export default function OtherEvent({ name }: { name: string }) {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const [data, setData] = React.useState<any>([])
  const [dataR, setDataR] = React.useState<any>([])

  
  React.useEffect(() => {
    FetchWalkathon(token.profile.userID).then((fetchedData: any) => {
      console.log(fetchedData,"Idaan fetrch ")
      setData(fetchedData.unregistered)
      setDataR(fetchedData.registered)
    })
  }, [])

  return (
    <div>
      <MyCard name="Registered" data={dataR}/>

      <MyCardR name="New Arrivals" data={data}/>
    </div>
  )
}


function MyCard({ name, data }: { name: string; data: any }) {
  const router = useRouter();
  const [redirectToWalkathon, setRedirectToWalkathon] = React.useState(false);

  const handleRegistration = (slug: string) => {
    
      
      router.push(`walkathon/${slug}`);
    
  };

  React.useEffect(() => {
    const currentTime = new Date().toISOString();
    data.forEach((event: any) => {
      if (currentTime >= event.start_date && currentTime <= event.end_date) {
        setRedirectToWalkathon(true);
      }
    });
  }, [data]);

  return (
    <>
      <div className='text-2xl font-bold'>
        <p>{name}</p>
      </div>
      {data.length === 0 && <p className='py-3'>No contest available</p>}

      <ScrollArea className='w-full whitespace-nowrap rounded-md border'>
        <div className='flex w-max space-x-4 p-4'>
          {data &&
            data.map((event: any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>
                    <div>Start: {event.start_date} </div>
                    <div>End: {event.end_date}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Prize 1: {event.prize_1}</p>
                  <p>Prize 2: {event.prize_2}</p>
                  <p>Prize 3: {event.prize_3}</p>
                </CardContent>
                <div className='flex justify-end p-3'>
                  <Button onClick={() => handleRegistration(event.slug)}>
                    {name === 'Registered' ? 'Enter' : 'Register'}
                  </Button>
                </div>
                <CardFooter></CardFooter>
              </Card>
            ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </>
  );
}


function MyCardR({ name, data }: { name: string; data: any }) {
  const router = useRouter();
  const [redirectToWalkathon, setRedirectToWalkathon] = React.useState(false);

  const handleRegistration = (slug: string) => {

      router.push(`/${slug}`);
    
  };

  React.useEffect(() => {
    const currentTime = new Date().toISOString();
    data.forEach((event: any) => {
      if (currentTime >= event.start_date && currentTime <= event.end_date) {
        setRedirectToWalkathon(true);
      }
    });
  }, [data]);

  return (
    <>
      <div className='text-2xl font-bold'>
        <p>{name}</p>
      </div>
      {data.length === 0 && <p className='py-3'>No contest available</p>}

      <ScrollArea className='w-full whitespace-nowrap rounded-md border'>
        <div className='flex w-max space-x-4 p-4'>
          {data &&
            data.map((event: any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>
                    <div>Start: {event.start_date} </div>
                    <div>End: {event.end_date}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Prize 1: {event.prize_1}</p>
                  <p>Prize 2: {event.prize_2}</p>
                  <p>Prize 3: {event.prize_3}</p>
                </CardContent>
                <div className='flex justify-end p-3'>
                  <Button onClick={() => handleRegistration(event.slug)}>
                    {name === 'Registered' ? 'Enter' : 'Register'}
                  </Button>
                </div>
                <CardFooter></CardFooter>
              </Card>
            ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </>
  );
}
