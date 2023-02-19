import React from "react";
import pfp from "../images/pfp/purplepfp.png";
import { MdMic } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="bg-[#292b2f] h-[52px] flex items-center pl-[5px] z-100">
      <div className="absolute pl-11 w-[123px] h-[38px] rounded-[3px] hover:bg-[#3f434a] duration-100 ease-in-out cursor-pointer">
        <h6 className="text-white text-[11px] font-bold relative top-[3px]">
          mi11111
        </h6>
        <p className="text-gray-300 text-[11px] font-light">#7495</p>
      </div>
      <img alt="" src={pfp} className="w-8 h-8 rounded-full translate-x-1" />

      <div className="text-[22px] text-gray-300 flex items-center ml-[100px] w-[90px] h-[30px] z-300">
        <div className="p-[5px] rounded-[4px] hover:bg-[#3f434a] duration-100 ease-in-out cursor-pointer">
          <MdMic />
        </div>
        <div className="p-[5px] rounded-[4px] hover:bg-[#3f434a] duration-100 ease-in-out cursor-pointer">
          <BsHeadphones />
        </div>
        <div className="p-[5px] rounded-[4px] hover:bg-[#3f434a] duration-100 ease-in-out cursor-pointer">
          <RiSettings5Fill />
        </div>
      </div>
    </div>
  );
};

export default Profile;
