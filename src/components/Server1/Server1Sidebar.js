import React from "react";
import Server1Banner from "./Server1Banner";
import Profile from "../Profile";
import Channel from "./Channel";
import { RxDrawingPinFilled } from "react-icons/rx";
import { channels } from "./channels";
import { useState } from "react";
import Server1Messages from "./Server1Messages";
import Server1Messages2 from "./Server1Messages2";
import Server1Messages3 from "./Server1Messages3";
import Server1Messages4 from "./Server1Messages4";
import Server1Messages5 from "./Server1Messages5";

const Server1Sidebar = () => {
  const [selected, setSelected] = useState(channels[0].title);

  const [currentPage, setCurrentPage] = useState("rules");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    setSelected(page);
  };

  return (
    <div className="flex w-full h-full bg-[#36393f]">
      <div className="shrink-0 h-screen fixed top-0 left-[72px] bg-[#303136] w-[240px] flex flex-col justify-between z-100">
        <div>
          <Server1Banner />
          {/* <Server1List /> */}
          {/* <Server1Channels /> */}
          <div className="mt-[145px] mx-2 w-[224px] relative">
            <div className="inline-block ml-[10px] my-[1px] mt-4">
              <RxDrawingPinFilled className="inline text-white/50 text-[13px] mr-[2px]" />
              <h6 className="inline text-white/50 font-semibold text-[12px] hover:text-white hover:cursor-pointer">
                WELCOME & INFO
              </h6>
            </div>
            <div>
              {channels.map((channel) => (
                <Channel
                  title={channel.title}
                  icon={channel.icon}
                  selected={channel.title === selected}
                  onClick={() => handleButtonClick(channel.title)}
                />
              ))}
            </div>
          </div>
        </div>
        <Profile />
      </div>
      <div className="w-full h-full">
        {currentPage === "rules" && <Server1Messages />}
        {currentPage === "information" && <Server1Messages2 />}
        {currentPage === "get-coaching" && <Server1Messages3 />}
        {currentPage === "role-assignment" && <Server1Messages4 />}
        {currentPage === "game-news" && <Server1Messages5 />}
      </div>
    </div>
  );
};

export default Server1Sidebar;
