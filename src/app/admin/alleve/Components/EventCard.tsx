
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export function EventCard(props) {
  return (
    <Card className="w-[14.5rem] bg-gray-100 h-[12rem] flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        {props.childern}
      </CardContent>
      {/* <CardFooter className="flex justify-between"> */}
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
      {/* </CardFooter> */}
    </Card>
  )
}
