import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from 'next/link';
  import { ScrollArea } from "@/components/ui/scroll-area"
  
  import { LBData } from './data/lbdata'
  
  import React from 'react'
  
  const Leaderboard = () => {
    const table_heading = ["Position", "Userid", "Username", "UserEmail", "StepCount", "Age", "Weigth", "Heigth"];
  
    return (
      <>
      <Card className="border-2 border-gray-300 bg-gray-100">
       <h1 className="font-semibold text-center py-2 pt-4 font-serif">LeaderBoard</h1>
        <ScrollArea className="h-[20.5rem] w-[100%] p-4">
           
          <Table >
  
            <TableHeader>
              <TableRow>
                {table_heading.map((value, index) => (
                  <TableHead className="text-md font-semibold bg-gray-100 " key={index}>
                    {value}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
  
            <TableBody>
              {LBData.map((value, index) => (
                
                <TableRow key={index}>
                  <TableCell className="text-center">{value.Position}</TableCell>
                  <TableCell className="font-medium text-center">{value.Userid}</TableCell>
                  <TableCell className="text-center">{value.Username}</TableCell>
                  <TableCell className="text-center">{value.userEmail}</TableCell>
                  <TableCell className="text-center">{value.StepCount}</TableCell>
                  <TableCell className="text-center">{value.Age}</TableCell>
                  <TableCell className="text-center">{value.Weigth}</TableCell>
                  <TableCell className="text-center">{value.Heigth}</TableCell>
                </TableRow>
              ))}
            </TableBody>
  
          </Table>
        </ScrollArea>
        </Card>
      </>
    )
  }
  
  export default Leaderboard;
  
