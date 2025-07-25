import { Link } from 'react-router-dom';
import { FiUpload } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="mt-2">
      <Navigation />
      <div className="border-2 border-[#4b4d8f] rounded-sm  max-w-7xl mx-3 md:mx-auto flex justify-center px-4 py-6 mt-10 md:mt-12 md:py-24">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7f82f2]">Instant File Sharing — Simple, Fast & Secure</h2>
          </div>
          <div className="pt-6 px-4">
            <p className="text-sm md:text-base text-[#c9c9d2]">1. To send a file, create a Password Code, select files, and send after the other person joins.</p>
            <p className="text-sm md:text-base text-[#c9c9d2]">2. To receive, enter the Password Code and download the file.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-y-5 gap-x-5 py-14">
            <Link to={"/send"} className="w-52 md:w-1/3 border-2 border-[#6b6ed1] bg-[#2f304a] rounded-sm flex items-center justify-center gap-x-3 text-sm md:text-base px-4 py-1">Send File <FiUpload /> </Link>
            <Link className="w-52 md:w-1/3 border-2 border-[#6b6ed1] bg-[#2f304a] rounded-sm flex items-center justify-center gap-x-3 text-sm md:text-base px-4 py-1">Receive File <FiDownload /> </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Home