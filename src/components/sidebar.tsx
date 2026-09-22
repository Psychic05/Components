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
import { useState } from "react";

function SideBar() {
  
  // 1. which items to display
  // 2. define items (strings etc.)
  // 3. .map method

  const pageName = ["Overview", "Positions", "Branding", "Team Managment", "API Key"]
  const pageIcon = [<LayoutGrid />, <StickyNote />, <PaintBucket />, <UsersRound />, <CodeXml />]
  const pageNoti = [null, 8, "New", null, null]

  const projectName = ["Blomberg", "Samsung", "Apple", "Amazon"]
  const projectNumber = [4, 28, 28, 28]

  const [activeTab, setActiveTab] = useState(null)

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
        <ul className="relative flex flex-col gap-2 p-0 m-0">
          <div className="absolute -left-8 w-1 bg-white h-8 rounded-r-full pointer-events-none [position-anchor:--active] top-[anchor(center)] -translate-y-1/2 transition-all transition-400 ease-out"/>
          {pageName.map((tab,i) => {
            return(
              <li key={tab} onClick={() => setActiveTab(tab)} className={`h-10 transition-colors duration-700 ease-out flex relative justify-between items-center ${activeTab === tab ? "text-white [anchor-name:--active]" : "text-gray-500"}`}>
                <div className="flex items-center">
                  <span className="">{pageIcon[i]}</span>
                    <a className="block rounded p-3" href="#">
                    {tab}
                    </a>
                </div>
                {pageNoti[i]&&(
                <div className={`py-1 px-2 rounded-full ${typeof pageNoti[i] === "number" ? "bg-purple-400 text-white" : "bg-green-300 text-green-900"}`}>{pageNoti[i]}
                </div>
                )}
              </li>
            )
          })}
        </ul>
        
        <div className="h-4"></div>

        {/* Projects Title */}
        <div className="flex justify-between pt-4">
          <span className="text-sm">Projects</span>
          <span className="text-gray-500"><CirclePlus /></span>
        </div>


        {/* Projects List */}
        <ul className="flex flex-col text-white space-y-6 text-lg items-start">
          
          {projectName.map((company, no) => {

              return(
                <li className="flex justify-between w-full items-center">
                  <div className="flex gap-2 items-center">
                    <span className=""><Circle/></span>
                    <span className="">{company}</span>
                  </div>
                  <span className="bg-gray-600 py-1 px-2.5 rounded-full text-xs font-bold">{projectNumber[no]}</span>
                </li>
              )
          })}

          <button className="text-xs text-white p-2 font-bold bg-gray-800 rounded-lg">View All</button>
        </ul>
          
        <div className="h-4"></div>

        {/* Profile Bar */}
        <div className="bg-gray-800 rounded-full p-4 flex justify-between">
          <div className="flex items-center gap-2 ">
            <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-12 w-12 rounded-full" />
            <div className="flex flex-col items-start outline-white">
              <span className="text-white text-sm">
                Nicolas Ermegla
              </span>
              <span className="text-xs">
                nicolas@steelmonk.co
              </span>
            </div>
            <span className="translate-x-2"><Ellipsis size={20} /></span>
          </div>
        </div>
        

      </aside>
    </>
  )
}

export default SideBar