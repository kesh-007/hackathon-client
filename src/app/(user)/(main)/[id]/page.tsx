"use client"
import { AddEnrollments, AlreadyEnrollments } from "@/api";
import {DATA} from "./data/dummy";
import  Cookies  from 'universal-cookie';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Registeration({params}:{params:any}){
    const cookies = new Cookies();
    const token = cookies.get('token');
    const router = useRouter();
    const [text,SetText]= useState('Register')
    const [isdisabled,SetisDisabled]= useState(false)

    useEffect(() => {
        AlreadyEnrollments(token.profile.userID,params.id).then((res:any)=>{
            const result = res.map((ress:any) => ress.gameid === params.id).includes(true);
            console.log(result,"aypop ebba")
            if (result)
            {
                SetText('Already Registered')
                SetisDisabled(true)

            }
        })
    }, [])

  async function handleRegister(){
        alert("Registered Successfully");
        console.log("Registered Successfully",token.profile.userID);
        await AddEnrollments(token.profile.userID,params.id)
        router.push('/search')

        
    }

    const rules = [
    {
        id : 1,
        rule : "Prioritize safety by following proper form and guidelines during exercises."
    },
    {
        id : 1,
        rule : "Respect fellow players, fostering a positive and supportive fitness community."
    },
    {
        id : 1,
        rule : "Adhere to fair play principles and discourage cheating for a genuine gaming experience."
    },
    {
        id : 1,
        rule : "Stay hydrated and be mindful of your physical limits while participating."
    },
    {
        id : 1,
        rule : "Report any concerns about inappropriate content or behavior for a healthier gaming environment"
    },
]

    return (
        <div className="relative h-screen" style={{zIndex : 200}}>
            <div 
                className="flex flex-col p-5 pb-20 justify-between gap-10 absolute top-0 bottom-0 left-0 rounded-2xl right-0" 
                style={{backgroundColor : "rgba(0,0,0,0.8)"}}
            >

            <div className="mt-[2rem] gap-10 flex flex-col">
                <p className="text-white text-4xl">Registration</p>
                <div className="gap-5 flex mt-7 flex-col">
                    {
                        rules.map((value , index) => (
                            <div className="text-gray-400 text-lg">
                                <p>* {value.rule}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="gap-5 flex flex-col text-sm" >
                <div className="flex text-gray-50 gap-5">
                    <input type="checkbox"/>
                    <p>
App usage signifies acceptance of our terms and privacy policy for data handling.</p>
                </div>
                <div>
                    <button disabled={isdisabled} onClick={handleRegister} className="bg-white rounded-xl p-3 text-black w-full">{text}</button>
                </div>
            </div>
            </div>
            <img 
                src={DATA[0].poster} 
                alt="loading"

                className="object-cover h-screen w-full"
            />
        </div>
    );
}