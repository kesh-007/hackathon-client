import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import {DATA} from "../data/dummy";

export default function DataTable(){

    const table_heading = ["Contest Type" , "Contest Name" , "Organizer" , "Date","Timing","Participatent Count","Status"];

    return (
        <Table className="overflow-scroll">
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
            {
                DATA.map((value , index) => (
                    <TableRow key={index}>
                        <TableCell>{value.type}</TableCell>
                        <TableCell className="font-medium">{value.name}</TableCell>
                        <TableCell>{value.organizer}</TableCell>
                        <TableCell>{value.date}</TableCell>
                        <TableCell>{value.time}</TableCell>
                        <TableCell>{value.count}</TableCell>
                        <TableCell className="text-green-600 font-semibold">{value.status}</TableCell>
              </TableRow>
                ))
            }
            </TableBody>
          </Table>
    );

}