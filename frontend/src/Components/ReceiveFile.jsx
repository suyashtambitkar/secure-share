import Navigation from "./Navigation";
import { FaRegFileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:5000');

const ReceiveFile = () => {
    const [Files, setFiles] = useState([]);
    const [pass, setPass] = useState("");
    const [showPass, setShowPass] = useState("");


    useEffect(() => {
        socket.on("receive_file", ({ fileName, fileData }) => {
            console.log("came to here")
            const blob = new Blob([fileData]);
            const fileUrl = URL.createObjectURL(blob);
            setFiles((prev) => [...prev, { fileName, fileUrl }]);
        });

        return () => {
            socket.off("receive_file");
        };
    }, []);



    // join room 
    const joinRoom = () => {
        setShowPass(pass);
        socket.emit("join_room", pass)
        setPass("");
    }


    // Download files
    const handleDownloadAll = () => {
        Files.forEach((file) => {
            const link = document.createElement("a");
            link.href = file.fileUrl;
            link.download = file.fileName;
            link.click();
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-5">
            <Navigation />

            <div className="mt-2">

                <div className="flex justify-center items-center flex-col border-2 border-[#4b4d8f] bg-[#4b4d8f23] rounded-sm px-4 py-5 md:py-10">
                    <div className="flex flex-col md:flex-row gap-5 mb-4 ">
                        <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} className="border-2 border-[#6b6ed1] outline-none bg-[#2f304a] px-2 py-1 text-sm" placeholder="Enter" />
                        <button onClick={() => joinRoom()} className="border-2 border-[#6b6ed1] hover:border-[#45478d] bg-[#6b6ed1] rounded-sm px-8 py-1 text-sm">Submit</button>
                    </div>
                    {
                        showPass ? (<p className="text-sm text-[#c9c9d2]">You are connected using code {showPass}</p>) : (<p className="text-sm text-[#c9c9d2]">Enter password code and wait for file receive</p>)
                    }
                </div>


                <div className=" flex items-center justify-center flex-col border-2 border-[#4b4d8f] bg-[#4b4d8f23] rounded-sm mt-8 px-4 py-5 md:py-5">

                    <div className="flex justify-center items-center gap-5 mt-2">
                        <button onClick={handleDownloadAll} className="border-2 border-[#6b6ed1] hover:border-[#45478d] bg-[#6b6ed1] rounded-sm px-8 py-1 text-sm">Download Files</button>
                    </div>

                    {
                        Files.length === 0 && (<p className="mt-4 text-[#c9c9d2] text-sm">No Files</p>)
                    }


                    {
                        Files.length > 0 && (<div className="border border-[#6b6ed1] rounded-2xl bg-[#2e2e2e16] h-[250px] md:h-[280px] w-[95%] md:w-[60%] py-2 mt-5">
                            <ul className="overflow-hidden h-[90%] my-5 mx-14 flex flex-col gap-2">
                                {
                                    Files.map((file, index) => (
                                        <li key={index} className="border border-[#6b6ed1] bg-[#6b6ed1] rounded-sm flex items-center gap-x-5 px-3 py-1">
                                            <FaRegFileAlt className="text-[#cfd0e2f9]" />
                                            <h4 className="text-[#d3d4df] text-base">{file.fileName}</h4>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>)
                    }
                </div>



            </div>
        </div>
    )
}

export default ReceiveFile