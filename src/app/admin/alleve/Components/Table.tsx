import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { ScrollArea } from "@/components/ui/scroll-area"
import Link from 'next/link';
import {DATA} from "../data/dummy";

export default function DataTable(){

    const table_heading = ["Contest Type" , "Contest Name" , "Organizer" , "Date","Timing","Gender","Participatent Count","Status"];

    return (
        <ScrollArea className="h-[23rem] w-[100%] rounded-md border p-4">
        <Table className="overflow-scroll  ">
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
                <TableHead className="text-md font-semibold bg-gray-100 ">Link</TableHead>
              </TableRow>

            </TableHeader>
            <TableBody>
            {
                DATA.map((value , index) => (
                    // eslint-disable-next-line react/jsx-key
                    
                    <TableRow key={index}>
                        
                        <TableCell className="text-center">{value.type}</TableCell>
                        <TableCell className="font-medium text-center">{value.name}</TableCell>
                        <TableCell className="text-center">{value.organizer}</TableCell>
                        <TableCell className="text-center">{value.date}</TableCell>
                        <TableCell className="text-center">{value.time}</TableCell>
                        <TableCell className="text-center">{value.contestgender}</TableCell>
                        <TableCell className="text-center" >{value.count}</TableCell>
                        {value.status=="In Progress"?<TableCell className="text-green-600 font-semibold text-center">{value.status}</TableCell>:
                        <TableCell className="text-blue-600 font-semibold text-center">{value.status}</TableCell>}
                        <TableCell><Link className="p-1 text-white bg-black rounded" href={"/admin/alleve/"+value.name}>Stats</Link></TableCell>
                    </TableRow>
                    
                ))
            }
            </TableBody>
          </Table>
          </ScrollArea>
    );

}