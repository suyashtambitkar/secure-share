import Navigation from "./Navigation";
import { FiUpload } from "react-icons/fi";

const SendFile = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Navigation />

      <div className="mt-2">

        <div className="flex justify-center items-center flex-col border-2 border-[#4b4d8f] rounded-sm px-4 py-5 md:py-10">
          <div className="flex flex-col md:flex-row gap-5 mb-4 ">
            <input type="text" className="border-2 border-[#6b6ed1] outline-none bg-[#2f304a] px-2" />
            <button className="border-2 border-[#6b6ed1] hover:border-[#45478d] bg-[#6b6ed1] rounded-sm px-8 py-1 text-sm">Create</button>
          </div>

          <p className="text-sm text-[#c9c9d2]">Password: 0000</p>
        </div>


        <div className=" flex items-center justify-center flex-col border-2 border-[#4b4d8f] rounded-sm mt-8 px-4 py-5 md:py-5">
          
          <p className="text-sm text-[#b3b3ba] text-center">Send file after secound person connected</p>

          <div className="flex justify-center items-center gap-5 mt-4">
            <button className="border-2 border-[#6b6ed1] bg-[#2f304a] flex items-center justify-center gap-2 md:gap-3 text-sm py-1 px-3 md:px-16">Select File <FiUpload /> </button>
            <button className="border-2 border-[#6b6ed1] hover:border-[#45478d] bg-[#6b6ed1] rounded-sm px-8 py-1 text-sm">Send</button>
          </div>

          <div className="h-[250px] md:h-[280px] w-[95%] md:w-[60%] mt-5">

          </div>
        </div>



      </div>
    </div>
  )
}

export default SendFile