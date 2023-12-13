import React from "react";
import Link from "next/link";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Bar = ({data}) => {
  return (
    <div>
      <Card className="border-gray-200 border">
        <CardHeader className="text-center font-semibold text-xl">
          Contest participant count{" "}
        </CardHeader>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Walkathon", "TresureHunt", "PostContest"],
            },
          ]}
          series={data}
          width={500}
          height={290}
        />
      </Card>
    </div>
  );
};

export default Bar;
