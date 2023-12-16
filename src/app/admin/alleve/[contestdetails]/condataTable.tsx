import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import Link from 'next/link';
import { ReactChild, ReactFragment, ReactPortal } from "react";


export default function ConDataTable({data}){

    const table_heading = ["Contest Type" , "Contest Name" , "Organizer" , "Date","Timing","Gender","Status"];
    const a=data.slice(0,-1)
   

    return (
      
        <Table className="overflow-scroll border-2 border-gray-300 rounded ">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                {
                    table_heading.map((value , index) => (
                        <TableHead className="text-md font-semibold bg-gray-100 " key={index}>
                            {value}
                        </TableHead>
                    ))
                    
                }
               
              </TableRow>

            </TableHeader>
            <TableBody>
                <TableRow>
            {
                a.map((value: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => (
                    // eslint-disable-next-line react/jsx-key
                    
                    
                        // eslint-disable-next-line react/jsx-key
                        <TableCell className="text-center">{value}</TableCell>
                       
                    
                    
                ))
            }
             {data[data.length-1]=="on progress"?<TableCell className="text-green-600 font-semibold text-center">{data[data.length-1]}</TableCell>:
                        <TableCell className="text-blue-600 font-semibold text-center">{data[data.length-1]}</TableCell>}

            </TableRow>
            </TableBody>
          </Table>
         
    );

}