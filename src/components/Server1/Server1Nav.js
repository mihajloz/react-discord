import React from "react";
import { CgInbox } from "react-icons/cg";
import { MdOutlineHelp } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { BiHash } from "react-icons/bi";
import { IoMdNotificationsOff } from "react-icons/io";
import { RxDrawingPinFilled } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";

const DirectMessagesNav = () => {
  const buttonIcons = [<CgInbox />, <MdOutlineHelp />];
  const buttonIcons2 = [
    <BiHash />,
    <IoMdNotificationsOff />,
    <RxDrawingPinFilled />,
    <MdPeopleAlt />,
  ];

  return (
    <div className="flex justify-between bg-[#36393f] border-b-[1px] border-[#212226] ml-[302px] sticky top-0">
      <div className="flex h-[48px]">
        {/**Friends "button" */}
        <div className="flex items-center text-white font-semibold text-[15px] select-none p-3 mr-1 ml-[2px]">
          <MdLibraryAddCheck className="text-[23px] text-gray-400" />
          <p className="ml-3 text-[15px]">VALORANT</p>
        </div>
      </div>

      <div className="flex">
        {buttonIcons2.map((icon) => (
          <div className="flex">
            <div className="mt-3 h-[25px]">
              <button className="text-[22px] text-gray-300 px-2 hover:text-gray-200 rounded">
                {icon}
              </button>
            </div>
          </div>
        ))}

        <div className="mt-3 ml-2 mr-[6px]">
          <input
            type="search"
            placeholder="Search"
            className="text-white text-[13px] h-[22px] pl-2 rounded-[3px] bg-[#202225] placeholder:text-[13px] w-[140px] focus:outline-none focus:w-[240px] transition duration-600 ease-in-out"
          />
        </div>

        <div className="flex mr-2">
          {buttonIcons.map((icon) => (
            <div className="flex mr">
              <div className="mt-3 ml-1 h-[25px]">
                <button className="text-[22px] text-gray-300 px-2 hover:text-gray-200 rounded">
                  {icon}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectMessagesNav;
