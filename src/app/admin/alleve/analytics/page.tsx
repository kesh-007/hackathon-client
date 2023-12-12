"use client";
import React from "react";
import Bar from "./bar";
import Pie from "./pie";
import Line from "./line";
import Pie2 from "./pie2";
import Bar2 from "./bar2";
import Link from "next/link";

function page() {
  return (
    
      <><div className="md:mt-10 mt-5 flex gap-2 ml-64">
      <div>
        <div className="mb-3">
          <Bar />
        </div>
        <div>
          <Pie />
        </div>
      </div>
    </div><div className="md:mt-10 mt-5 flex gap-2 ml-4">
        <div>
          <div className="flex gap-2">
            <Line />
            <Pie2 />
          </div>
          <div className="mt-3">
            <Bar2 />
          </div>
        </div>
      </div></>
    
  );
}

export default page;
