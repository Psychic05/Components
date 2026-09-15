import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { PaintBucket } from "lucide-react";
import { UsersRound } from "lucide-react";
import { CodeXml } from "lucide-react";
import { StickyNote } from "lucide-react";
import { Circle } from "lucide-react";
import { Ellipsis } from "lucide-react";

function SideBar() {
  

  return (
    <>
      <aside className="w-80 h-fit bg-black p-8 rounded-3xl space-y-6">

        {/* Title Bar */}
        <div className="flex justify-between text-white">
          <span className="font-extrabold text-xl">Jobsly</span>
          <span className=""><Menu/></span>
        </div>
      
        {/* Search Bar */}
        <div className="flex justify-between p-4 bg-gray-800 rounded-xl">
          <span className="font-bold">Search</span>
          <span className="text-white"><Search/></span>
        </div>

        {/* Pages List */}
        <ul className="space-y-2 p-0 m-0 justify">
          <li className="flex items-center">
            <div className="flex items-center">
              <s className=""><LayoutGrid /></s>
              <a className="block rounded p-3 text-white hover:bg-amber-950" href="">
                Overview</a>
              </div>
          </li>
            
          <li className="flex items-center justify-between text-gray-500">
              <div className="flex items-center">
                <s className=""><StickyNote /></s>
                <a className="block rounded p-3 hover:bg-amber-950" href="">
                  Positions</a>
              </div>
              <span className="px-2 py-1 bg-blue-700 rounded-full text-sm text-white">8</span>
          </li>

          <li className="flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <s className=""><PaintBucket /></s>
              <a className="block rounded p-3 hover:bg-amber-950" href="">
                Branding</a>
            </div>
            <span className="px-2 py-1 bg-green-800 text-sm rounded-full text-green-200">New</span>
          </li>

          <li className="flex items-center text-gray-500">
            <div className="flex items-center">
              <s className=""><UsersRound /></s>
              <a className="block rounded p-3 hover:bg-amber-950" href="">
                Team Managment</a>
            </div>
          </li>
          <li className="flex items-center text-gray-500">
            <div className="flex items-center">
              <s className=""><CodeXml /></s>
              <a className="block rounded p-3 hover:bg-amber-950" href="">
                API Key</a>
            </div>
          </li>
        </ul>

        {/* Projects Title */}
        <div className="flex justify-between pt-4">
          <span className="text-sm">Projects</span>
          <span className="text-gray-500"><CirclePlus /></span>
        </div>


        {/* Projects List */}
        <ul className="flex flex-col text-white space-y-6 text-lg items-start">
          
          <li className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className=""><Circle/></span>
              <s className="">Bloomberg</s>
            </div>
            <s className="bg-gray-600 py-1 px-2.5 rounded-full text-xs font-bold">4</s>
          </li>

          <li className="flex justify-between items-center"> 
            <div className="flex gap-2 items-center">
              <span className=""><Circle/></span>
              <s>Samsung</s>
            </div>
            <s className="bg-gray-600 py-1 px-2.5 rounded-full text-xs font-bold">28</s>
          </li>

          <li className="flex justify-between items-center"> 
            <div className="flex gap-2 items-center">
              <span className=""><Circle/></span>
              <s>Apple</s>
            </div>
            <s className="bg-gray-600 py-1 px-2.5 rounded-full text-xs font-bold">28</s>
          </li>

          <li className="flex justify-between items-center"> 
            <div className="flex gap-2 items-center">
              <span className=""><Circle/></span>
              <s>Amazon</s>
            </div>
            <s className="bg-gray-600 py-1 px-2.5 rounded-full text-xs font-bold">28</s>
          </li>

          

          <button className="text-xs text-white p-2 font-bold bg-gray-800 rounded-lg">View All</button>
        </ul>

        <div className="p-4"></div>

        {/* Profile Bar */}
        <div className="bg-gray-800 rounded-full p-4 flex justify-between">
          <div className="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-12 w-12 rounded-full" />
            <div className="flex flex-col items-start">
              <span className="text-white text-sm">
                Nicolas Ermegla
              </span>
              <span className="text-xs">
                nicolas@steelmonk.co
              </span>
            </div>
            <span className=""><Ellipsis size={20} /></span>
          </div>
        </div>
        

      </aside>
    </>
  )
}

export default SideBar
