import { Dot } from "lucide-react";

function ProfileCard() {
    return (
        <>
            <div className="flex rounded-3xl bg-white w-fit p-8 gap-8 items-center">
                <div className="">
                    
                        <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className="h-16 w-16 rounded-full"/>
                        <div className="absolute">
                            <svg className="absolute -top-4 -right-16 h-4 w-4 fill-orange-400 rounded-full ring-2 ring-white">
                                <circle cx="8" cy="8" r="8"/>
                            </svg>
                        </div>
                    
                </div>


                <div className="flex flex-col items-start">
                    <div className="flex text-md align-middle items-center">
                        <span className="text-md font-medium">Figma Design</span>
                        <Dot className="" size={20}/>
                        <span className="text-md text-orange-400 font-medium">Founder</span>
                    </div>
                    
                    <span className="font-bold text-xl text-black">Amelia Minderlow</span>
                    <span className="text-gray-500 text-md">12:40 - 16:00</span>
                </div>

            </div>
        </>
    )

}

export default ProfileCard