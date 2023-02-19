import React from "react";
import { MdWavingHand } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { CgInbox } from "react-icons/cg";
import { MdOutlineHelp } from "react-icons/md";

const DirectMessagesNav = () => {
  const buttonLabels = ["Online", "All", "Pending", "Blocked"];
  const buttonIcons = [<CgInbox />, <MdOutlineHelp />];

  return (
    <div className="flex justify-between bg-[#36393f] border-b-[1px] border-[#212226] ml-[302px] sticky top-0">
      <div className="flex h-[48px]">
        {/**Friends "button" */}
        <div className="flex items-center text-white font-semibold text-[15px] select-none p-3 mr-1">
          <MdWavingHand className="text-[23px] text-white/70" />
          <p className="ml-3 text-[15px]">Friends</p>
        </div>

        {buttonLabels.map((label) => (
          <div className="flex mt-3 h-[25px] mx-2">
            <button className="text-[15px] text-white/70 px-2 hover:bg-[#3b3e45] hover:text-white rounded active:bg-[#3b3e45] active:text-gray-200">
              {label}
            </button>
          </div>
        ))}

        <div className="flex mt-3 h-[25px]">
          <button className="text-[15px] text-white bg-[#2d7d46] px-2 active:bg-[#36393f] active:text-[#44b869] rounded">
            Add Friend
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="flex mt-3 h-[25px] mr-3">
          <button className="text-[23px] text-white/70 px-2 hover:text-white rounded">
            <RiChatNewFill />
          </button>
        </div>

        {buttonIcons.map((icon) => (
          <div className="flex  mr-1">
            <div className="mt-3 ml-1 h-[25px]">
              <button className="text-[22px] text-white/70 px-2 hover:text-white rounded">
                {icon}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectMessagesNav;
