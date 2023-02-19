import React from "react";
import Profile from "../Profile";
import { GiTurbine } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import carl from "../../images/pfp/carl.jpg";
import DirectMessagesBody from "./DirectMessagesBody";

const DirectMessagesSidebar = () => {
  return (
    <div className="flex w-full h-full">
      <div className="shrink-0 h-screen fixed top-0 left-[72px] bg-[#303136] w-[240px] flex flex-col justify-between z-100">
        <div>
          {/*Find or start a conversation */}
          <div className="flex justify-center align-center h-[39px] mt-[10px] mb-[13px] border-b-[1px] border-[#212226]">
            <input
              type="text"
              placeholder="Find or start a conversation"
              size={19}
              className="bg-[#212226] h-[28px] rounded-[4px] text-white outline-0 placeholder:text-[13px] placeholder:p-[6px] placeholder:font-medium"
            />
          </div>

          {/*Friends button */}
          <div className="mt-[8px] mx-2">
            <div className="flex items-center text-gray-400 text-[15px]">
              <button className="flex w-full py-[9px] rounded-[4px] focus:bg-[#3b3e45] hover:bg-[#3b3e45] focus:text-white hover:text-white">
                <MdWavingHand className="ml-3 text-[23px]" />
                <p className="ml-4 text-[15px]">Friends</p>
              </button>
            </div>
          </div>

          {/*Snowsgiving button */}
          <div className="mx-2 my-[2px] ">
            <div className="flex items-center text-[15px] text-white/70">
              <button className="flex w-full py-[9px] rounded-[4px] hover:bg-[#3b3e45] hover:text-white">
                <FaRegSnowflake className="ml-3 text-[23px] text-[#5865f2]" />
                <p className="ml-4 text-[15px] text-white/70">Snowsgiving</p>
              </button>
            </div>
          </div>

          {/*Nitro button */}
          <div className="mx-2 my-[2px] ">
            <div className="flex items-center text-white/70 text-[15px]">
              <button className="flex w-full py-[9px] rounded-[4px] hover:bg-[#3b3e45] hover:text-white">
                <GiTurbine className="ml-3 text-[23px]" />
                <p className="ml-4 text-[15px]">Nitro</p>
              </button>
            </div>
          </div>

          {/*Direct messages separation */}
          <div className="inline-block mx-[18px] my-[1px] mt-4">
            <h6 className="text-white/70 font-semibold text-[12px] hover:text-white">
              DIRECT MESSAGES
            </h6>
          </div>

          <div className="inline-block ml-[68px]">
            <p className="text-white/70 text-[21px] hover:text-white">+</p>
          </div>

          {/*Carl messages */}
          <div className="mx-2 my-[2px]">
            <div className="flex items-center text-white/70 text-[15px]">
              <button className="flex w-full py-[5px] rounded-[4px] focus:bg-[#3b3e45] hover:bg-[#3b3e45] focus:text-white ">
                <img
                  alt=""
                  src={carl}
                  className="w-8 h-8 rounded-full translate-x-[9px]"
                />
                <p className="ml-5 text-[15px] translate-y-1">Carl-bot</p>
              </button>
            </div>
          </div>
        </div>
        <Profile />
      </div>
      <DirectMessagesBody />
    </div>
  );
};

export default DirectMessagesSidebar;
