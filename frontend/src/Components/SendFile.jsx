import Navigation from "./Navigation";
import { FiUpload } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL);

const SendFile = () => {
  const [allFiles, setAllFiles] = useState([]);
  const [createPass, setCreatePassPass] = useState("");
  const [showPass, setShowPass] = useState("");
  const [fileStatus,setFileStatus] = useState(false);
  const inputRef = useRef();

  // clicking to input using ref 
  const handleClick = () => {
    inputRef.current.click();
  }

  // accepting files
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAllFiles(files);
    setFileStatus(false);
  }

  // Create Room
  const createRoom = () => {
    setShowPass(createPass);
    socket.emit('join_room', createPass);
    setCreatePassPass("");
  }

  // Send file to room
  const handleSendFile = () => {

    // no file return it
    if (!allFiles.length) {
      return;
    }

    // sending each file from array
    allFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        socket.emit("send_file", { roomId: showPass, fileName: file.name, fileData: reader.result })
      }
    })

    setAllFiles("");
    setFileStatus(true);
    
  }
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Navigation />

      <div className="mt-2">

        <div className="flex justify-center items-center flex-col border-2 border-[#4b4d8f] bg-[#4b4d8f23] rounded-sm px-4 py-5 md:py-10">
          <div className="flex flex-col md:flex-row gap-5 mb-4 ">
            <input type="text" value={createPass} onChange={(e) => setCreatePassPass(e.target.value)} className="border-2 border-[#6b6ed1] outline-none bg-[#2f304a] px-2 py-1 text-sm" placeholder="Enter" />
            <button onClick={() => createRoom()} className="border-2 border-[#6b6ed1] hover:border-[#45478d] bg-[#6b6ed1] rounded-sm px-8 py-1 text-sm">Create</button>
          </div>
          {
            showPass && (<p className="text-sm text-[#c9c9d2]">Password : {showPass}</p>)
          }
        </div>

        <div className=" flex items-center justify-center flex-col border-2 border-[#4b4d8f] bg-[#4b4d8f23] rounded-sm mt-8 px-4 py-5 md:py-5">

          <p className="text-sm text-[#b3b3ba] text-center">Send file after second person connected</p>
          
          <div className="flex justify-center items-center gap-5 mt-4">

            <input type="file" ref={inputRef} onChange={handleFileChange} multiple className="hidden" />
            <button onClick={handleClick} className="border-2 border-[#6b6ed1] bg-[#2f304a] flex items-center justify-center gap-2 md:gap-3 text-sm py-1 px-3 md:px-16">Select File <FiUpload /> </button>
            <button onClick={handleSendFile} className="border-2 border-[#6b6ed1] hover:border-[#45478d] bg-[#6b6ed1] rounded-sm px-8 py-1 text-sm">Send</button>
          </div>

          {
            allFiles.length > 0 && (<div className="border border-[#6b6ed1] rounded-2xl bg-[#2e2e2e16] h-[250px] md:h-[280px] w-[95%] md:w-[60%] py-2 mt-5">
              <ul className="overflow-hidden h-[90%] my-5 mx-3 md:mx-14 flex flex-col gap-2">
                {
                  allFiles.map((value, index) => (
                    <li key={index} className="border border-[#6b6ed1] bg-[#6b6ed1] rounded-md flex items-center gap-x-5 px-3 py-1">
                      <FaRegFileAlt className="text-[#cfd0e2f9]" />
                      <h4 className="text-[#d3d4df] text-[14px] md:text-base ">{value.name}</h4>
                    </li>
                  ))
                }
              </ul>
            </div>)
          }
          {
            fileStatus && (<p className="my-5 text-sm text-[#30af5f]">Successfully Sent</p>)
          }
        </div>
      </div>
    </div>
  )
}

export default SendFile;

