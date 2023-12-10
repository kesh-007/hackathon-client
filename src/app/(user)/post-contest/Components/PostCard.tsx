import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

function CardHeader(){

    return (
        <div className="text-white">
            <FaRegHeart />
        </div>
    );

}

function Avatar(){

    return (
        <div className="flex gap-5 items-center">
            <Image alt="avatar" src={require("../../(main)/search/2.jpg")} className="h-[2rem] w-[2rem] rounded-[4rem]"/>
            <div className="flex text-white text-sm" >
                <p>MrFit</p>
            </div>
        </div>
    );

}

export default function PostCard(){
    return (
        <div className="p-4 ">
            <div className="relative">
                
                <div 
                    className="absolute rounded-lg top-0 left-0 right-0 bottom-0 flex flex-col justify-between"
                    style={{backgroundColor : "rgba(0,0,0,0.45)"}}
                > 
                    <div className="p-4 flex justify-end w-full text-lg justify-between">
                        <Avatar/>
                        <CardHeader/>
                    </div>
                    <div className="p-5 text-white flex">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil est ea rem repellendus fugiat aut vero illum vitae.</p>
                    </div>
                </div>
                <Image 
                    alt="loading" 
                    src={require("../../(main)/search/1.jpg")} 
                    // height={800} 
                    // width={200}
                    className="w-full rounded-lg h-[17rem] "
                />
            </div>
        </div>
    );
}