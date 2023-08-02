import { useContext } from "react";
import {ProgressContext} from "../App"

export default function Preloader({loading}){
  const { progress } = useContext(ProgressContext)
    return (
      <>
      <div className={`${loading ? '' : '-translate-y-full'} flex fixed w-full h-full z-50 top-0 left-0 flex-col justify-center items-center bg-[#111111] transition-transform duration-500 text-gray-400 text-center`}>
        <h1 className="text-4xl font-bold mb-4">What should you do today?
        </h1>
        <h1 className="text-6xl  animate-pulse font-bold">Thinking...</h1>

        <p className='relative top-20 font-sm font-semibold'>Status: {progress}...</p>
      </div>
      </>
    )
  }