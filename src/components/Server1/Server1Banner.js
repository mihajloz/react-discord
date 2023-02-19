import React from "react";
import serverBanner from "../../images/server1/banner1.webp";
import { MdVerified } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiEarthLine } from "react-icons/ri";

const Server1Banner = () => {
  return (
    <div className="select-none shrink-0 fixed top-0 bg-[#303136] w-[240px] flex flex-col justify-between">
      {/**Top banner */}
      <div className="w-full h-[135px] relative">
        <div className="w-full h-[135px] bg-black opacity-10 absolute"></div>
        <img alt="" src={serverBanner} className="object-cover shadow-inner" />
      </div>
      <div className="w-auto absolute ml-4 mt-3">
        <p className="inline">
          <MdVerified className="inline text-green-500" />
        </p>
        <h6 className="inline text-white ml-1 font-medium">VALORANT</h6>
        <div className="absolute right-[-108px] top-[-1px]">
          <MdKeyboardArrowDown className="text-white/70 text-[25px]" />
        </div>
        <div className="w-[60px] relative mt-1 p-[2px] rounded-full bg-[#4f545c] text-[11px] text-white">
          <RiEarthLine className="absolute inline text-[12px] ml-1 top-1" />
          <div className="inline ml-5">Public</div>
        </div>
      </div>
    </div>
  );
};

export default Server1Banner;
