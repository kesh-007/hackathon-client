import { NextRequest, NextResponse } from "next/server";


const djson=[]

export async function GET(req:Request) {
  return NextResponse.json(djson);
}

export async function POST(req:NextRequest){
  const resdata=await req.json()
  djson.push(resdata)
  console.log(resdata)
  return NextResponse.json(resdata);
}


