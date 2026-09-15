

function Calender() {
  const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 
  const Dates = [6, 7, 8, 9, 10, 11, 12] 

  return (
    <>
      <div className="bg-white w-fit flex flex:col px-2 rounded-3xl">

        <div className="p-2 flex items-center gap-2">        
          {Days.map((x,i) => {
            
            return (
              <div className="py-4 px-2 flex flex-col items-center justify-center gap-4">
                <span className="font-light text-xs text-grey">{x}</span>
                <div className="flex flex-col items-center hover:bg-orange-200 rounded-md p-2">
                  <span className="font-bold text-black text-md text-grey  ">{Dates[i]}</span>
                  <svg className="hidden flex items-center justify-center h-3 w-3 fill-red-500" >
                    <circle cx="5" cy="5" r="2"/>
                  </svg>
                </div>
              </div>
            )
          })}
          
        </div>

        {/* <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-black">Mon</span>
          
          <div className="relative flex flex-col items-center gap-1 rounded-md bg-orange-400 px-3 py-3">
            <span className="text-lg font-bold text-md text-white p-0">6</span>
            
            <svg className="absolute left-1/2 -translate-0.75 h-3 w-3 fill-red-500" viewBox="0 2 9 1" aria-hidden="true">
              <circle cx="2" cy="2" r="2"/>
            </svg>
            
          </div>
        </div>
        

        <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-grey">Tue</span>
          <span className="font-medium text-md text-black p-2">7</span>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-grey">Wed</span>
          <span className="font-medium text-md text-black p-2">8</span>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-grey">Thu</span>
          <span className="font-medium text-md text-black p-2">9</span>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-grey">Fri</span>
          <span className="font-medium text-md text-black p-2">10</span>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-grey">Sat</span>
          <span className="font-medium text-md text-black p-2">11</span>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <span className="font-light text-xs text-grey">Sun</span>
          <span className="font-medium text-md text-black p-2">12</span>
        </div> */}

      </div>
    </>
  )
}

export default Calender
