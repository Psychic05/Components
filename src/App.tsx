import { useState } from 'react'
import './App.css'
import Calender from './components/calender'
import ProgressBar from './components/progressBar'
import Message from './components/message'
import Graph from './components/graph'
import ProfileCard from './components/profileCard'
import SideBar from './components/sidebar'
import MusicPlayer from './components/musicPlayer'

import {Plus} from "lucide-react";
import {ArrowDown} from "lucide-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MusicPlayer/>
      
      <SideBar/>
      
      <main className="bg-white! dark:bg-white min-h-screen w-full overflow-hidden">

        {/* NAV BAR */}
        <nav className="flex h-12 w-full">
          <div className="flex items-center text-nowrap bg-black text-white text-3xl font-bold h-fill p-2">
            <span className="text-xs sm:text-sm md:text-xl">AiiD 26</span>
          </div>
          
          <div className="flex items-center bg-[rgba(254,113,65,1)] w-[calc(30%)] px-4 justify-end gap-2">
            <span className="text-black font-medium">Read the Report</span>
            <span className="text-black" ><Plus size={20} strokeWidth={2}/></span>
          </div>

          <div className="flex items-center bg-white w-full justify-end">
            <span className="flex items-center text-black h-full font-medium px-20 hover:bg-[rgba(205,171,254,1)]">About</span>
            <div className="flex items-center px-4 h-full gap-2 hover:bg-[rgba(205,171,254,1)]">
              <span className="text-black font-medium">Case Studies</span>
              <span className="text-black" ><Plus size={20} strokeWidth={2}/></span>
            </div>
          </div>
        </nav>


        {/* VIDEO */}
        <div className="bg-red-700 w-full py-60 text-white">VIDEO GOES HERE</div>

        {/* HEADER */}
        <div className="w-full px-8 py-4">
          <div className="grid grid-cols-12 grid-rows-[auto_100px_auto] gap-4 text-black text-left">
            <span className="col-start-1 col-span-4">How designers are evolving their tools, craft, and teams with AI</span>
            <span className="col-start-6 col-span-7 text-7xl font-medium">AI in Design Report 2026</span>
            <span className="row-start-3 col-span-4 text-xs">BY DESIGNER FUND IN PARTNERSHIP WITH FOUNDATION CAPITAL</span>
            <div className="row-start-3 col-start-6 col-span-7 flex justify-between">
              <span className="text-sm font-mono font-">Scroll to Read</span>
              <span className=""><ArrowDown size={16} strokeWidth={3}/></span>
            </div>
          </div>
        </div>

        

        <div className="flex flex-col justify-start px-8 pt-20">
          <div className="flex text-black text-xs justify-start py-4 border-t">OUR PARTNERS</div>
            <div className="flex justify-start border-b text-black pb-10">
              <div className="text-black text-s m font-bold px-12 py-8">NOTION</div>
              <div className="text-black text-sm font-bold px-12 py-8">SIERRA</div>
              <div className="text-black text-sm font-bold px-12 py-8">FRAMER</div>
              <div className="text-black text-sm font-bold px-12 py-8">LINEAR</div>
              <div className="text-black text-sm font-bold px-12 py-8">ATHROPIC</div>
              <div className="text-black text-sm font-bold px-12 py-8">SHOPIFY</div>
              <div className="text-black text-sm font-bold px-12 py-8">STRIPE</div>
            </div>
        </div>

        <div className="flex flex-col justify-start px-8 pt-20">
          <div className="flex text-black text-xs justify-start py-4 border-t">AN INFLECTION POINT</div>
            
           
        </div>
        
      </main>

    
    </>
  )
}

export default App


