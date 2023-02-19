import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { SiMacos } from "react-icons/si";
import { AiFillWindows } from "react-icons/ai";
import { TfiLinux } from "react-icons/tfi";
import { AiFillApple } from "react-icons/ai";
import { MdAndroid } from "react-icons/md";
import DownloadCard from "./DownloadCard";

const DownloadModal = ({ toggleDownloadModal }) => {
  const download = [
    { icon: <SiMacos />, title: "macOS" },
    { icon: <AiFillWindows />, title: "Windows" },
    { icon: <TfiLinux />, title: "Linux" },
  ];
  const downloadMobile = [
    { icon: <AiFillApple />, title: "Apple iOS" },
    { icon: <MdAndroid />, title: "Android" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="z-10 bg-black opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="z-20">
        <div className="relative">
          <div className="bg-white rounded-[5px] shadow-lg w-[100vh] h-[90vh] flex flex-col items-center">
            <div className="flex flex-col w-full">
              {/* Modal content goes here */}
              <div className="flex justify-end">
                <button onClick={toggleDownloadModal}>
                  <RiCloseLine className="text-black/50 text-[30px] mr-2 mt-2" />
                </button>
              </div>
              <h2 className="flex justify-center font-semibold text-[20px] mb-4">
                Get Discord at Home
              </h2>
              <div className="flex justify-center mb-4">
                {download.map((os) => (
                  <DownloadCard title={os.title} icon={os.icon} />
                ))}
              </div>
              <h2 className="flex justify-center font-semibold text-[20px] mb-4">
                Or on the go
              </h2>
              <div className="flex justify-center mb-4">
                {downloadMobile.map((os) => (
                  <DownloadCard title={os.title} icon={os.icon} />
                ))}
              </div>
              <h2 className="flex justify-center mt-2 text-[13px] font-normal">
                Want some of that fresh off-the-vine Discord?
                <a
                  href="https://discord.com"
                  className="text-blue-500 ml-1 hover:underline"
                >
                  Get the public test build.
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
