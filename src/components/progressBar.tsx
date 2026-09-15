import { useEffect, useState } from "react"

function ProgressBar() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="flex h-fit w-fit flex-col items-start gap-4 rounded-3xl bg-white px-8 py-6">
      <span className="font-bold text-black">Download master - WestByte</span>
      <div className="flex items-center gap-4">
        <div className="h-2 w-72 rounded-full bg-gray-200">
          <div
            className={`h-full rounded-full bg-orange-400 transition-all duration-[2000ms] ease-out ${
              loaded ? "w-3/4" : "w-0"
            }`}
          />
        </div>
        <span className="font-bold text-black">75%</span>
      </div>
    </div>
  )
}

export default ProgressBar