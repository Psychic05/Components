import { useEffect, useState } from "react"
import { EllipsisVertical } from "lucide-react";

function ProgressCard() {
  

  return (
    <div className="flex h-fit w-fit flex-col items-start gap-4 rounded-3xl bg-white px-8 py-6">
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <span className="">Active Projects</span>
          <span className="">Average 72% Completed</span>
        </div>
        <EllipsisVertical />
      </div>

      <div className="flex items-start justify-between">
        <div className="flex">
          <img src="https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&q=75&fit=max&auto=format&dpr=2" 
          alt="" 
          className="h-12 w-12 p-2 rounded-2xl "/>

          <div className="flex flex-col items-start">
            <p className="">Figma</p>
            <p className="">Components</p>
          </div>
        </div>
  
        <div className="">
          <div className="w-100 bg-gray-400 ">
            <div className="w-80">
              
            </div>
          </div>
          <div className="">

          </div>

        </div>


      </div>
    </div>
  )
}

export default ProgressCard