import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Calender from './components/calender'
import ProgressBar from './components/progressBar'
import Message from './components/message'
import Graph from './components/graph'
import ProfileCard from './components/profileCard'
import SideBar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col p-12 gap-8 items-start">
        <span className="font-bold text-3xl text-white">Components</span>
        
        <div className="flex items-start flex-col gap-2">
          <span className="font-bold text-md text-white">Calender Week</span>
          <Calender/>
        </div>
        
        <div className="flex items-start flex-col gap-2">
          <span className="font-bold text-md text-white">Progress Bar</span>
          <ProgressBar />
        </div>

        <div className="flex items-start flex-col gap-2">
          <span className="font-bold text-md text-white">Message</span>
          <Message/>
        </div>

        <div className="flex items-start flex-col gap-2">
          <span className="font-bold text-md text-white">Graph</span>
          <Graph/>
        </div>
        
        <div className="flex items-start flex-col gap-2">
          <span className="font-bold text-md text-white">Profile Card</span>
          <ProfileCard/>
        </div>

        <div className="flex items-start flex-col gap-2">
          <span className="font-bold text-md text-white">Side Bar</span>
          <SideBar/>
        </div>

        

        


        

      </div>
    </>
  )
}

export default App
