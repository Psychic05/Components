import { X } from "lucide-react";

function Message() {     
    return (  
    <>
        <div className="w-fit relative">
            <div className="absolute right-6 top-6 {X}">  
                <X className="text-gray-100 -translate-y-2" size={30} strokeWidth={1}/>
            </div>
            
            <div className="flex flex-col bg-blue-600 rounded-tr-3xl rounded-tl-3xl h-fit w-fill px-8 py-6 items-start gap-4">          
                <div className="flex gap-4 items-center">
                    <img src="https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest/smart/width/250/height/250?cb=20180630112142" alt="emily" className="h-16 w-16 rounded-full" />
                    <div className="flex flex-col items-start text-white">
                        <span className="font-medium text-2xl">Emily Dougrer</span>
                        <span className="font-thin">Developer</span>
                    </div>
                </div>
                <div className="text-white text-lg">
                    Hi there! We use Boards to share initial goals and ideas.
                </div>
        
            </div>

            <div className="flex bg-white rounded-br-3xl rounded-bl-3xl h-fit w-fill px-8 py-6 justify-between">
                <span className="text-lg font-medium font-gray-300">Type Your Message...</span>
                <span className="text-lg font-bold text-blue-600">Send</span>
            </div>
        </div>

    </>
    )
}

export default Message;