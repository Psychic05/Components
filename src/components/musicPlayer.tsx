import { useState } from "react";

import { Pause, Play, Star } from "lucide-react";


function musicPlayer() {



    const [activeMusic, setActiveMusic] = useState(false);

    const [rating, setRating] = useState(0)

    return (
        <>
            <div className="flex rounded-full bg-indigo-600 w-fit p-4 pr-12 gap-20 justify-between items-center">
                
                {/* Left Aligned */}
                <div className="flex items-center gap-4">
                    
                    {/* Pause/Play Button */}
                    <button onClick={() => setActiveMusic(!activeMusic)} 
                    className="cursor-pointer transition-transform active:scale-90 bg-indigo-400 p-4 rounded-full">
                        { activeMusic 
                        ? (<Pause fill="white" className="text-white"/> )
                        : (<Play fill="white" className="text-white"/> )
                        }
                    </button>

                    {/* Details */}
                    <div className="flex flex-col items-start">
                        <span className="text-lg font-bold text-white">Song Name</span>
                        <span className="font-medium text-md text-gray-400">mp3</span>
                    </div>
                </div>

                {/* Right Aligned */}
                <div className="flex flex-col items-end gap-2">

                    {/* Timer */}
                    <div className="text-sm text-gray-300">
                        5:20
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => {
                            const starValue = index + 1;
                            const isFilled = starValue <= rating;

                            return (
                                <button
                                key={index}
                                type="button"
                                onClick={() => setRating(starValue)}
                                className="cursor-pointer transition-transform active:scale-90"
                                >
                                    <Star
                                    size={16}
                                    className={`transition-colors duration-150 ${
                                        !isFilled 
                                        ? "text-gray-400 fill-gray-400"
                                        : rating===3
                                        ? "text-green-400 fill-green-400"
                                        : rating===4
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-pink-400 fill-pink-400"
                                    }`}
                                    />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default musicPlayer