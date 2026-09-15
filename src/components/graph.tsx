import { MoveUp } from "lucide-react";


function Graph() {
    return (
        <>  
            <div className="w-fit">

                <div className="bg-white rounded-tr-3xl rounded-tl-3xl p-6">
                    <div className="items-center border-light border-t justify-between mt-4 md:mt-6 pt-4 md:pt-6">
                        <button type="button" className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                            <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/></svg>
                            View full report
                        </button>
                    </div>
                </div>


                <div className="flex bg-white rounded-br-3xl rounded-bl-3xl p-6 justify-between gap-4">
                    <div className="flex flex-col items-start">
                        <span className="font-bold text-3xl text-black">
                            18, 254
                        </span>
                        <span className="">
                            Sales this Year
                        </span>
                    </div>

                    <div className="flex gap-0">
                        <span className="text-orange-400 font-bold">
                            2.5%
                        </span>
                        <div className="">
                            <MoveUp className="text-orange-400" size={20} strokeWidth={2}/>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Graph