import React from "react";
import banner from "../../../images/banner.svg";
import { HiOutlineSearch } from "react-icons/hi";

const EducationBanner = () => {
  return (
    <div className="relative h-[20vh] md:h-[30vh] lg:h-[43vh] xl:h-[50vh] ml-[334px] mr-[22px] mt-8">
      <div className="absolute flex w-full">
        <img
          alt=""
          src={banner}
          className="object-cover w-full rounded-[10px] h-[20vh] md:h-[30vh] lg:h-[43vh] xl:h-[50vh]"
        />
      </div>

      {/*Search bar / Explore*/}
      <div className="relative z-1 flex flex-col items-center justify-center h-full">
        <h6 className="text-[22px] font-semibold text-white mb-2 select-none">
          Find Education communities on Discord
        </h6>

        <div className="relative flex items-center">
          <input
            type="search"
            size="57"
            placeholder="Explore Education servers"
            className="search-bar mt-4 rounded-[4px] pl-2 pt-2 pb-2 placeholder:text-[15px] placeholder-gray-500 
             outline-none focus:ring-purple-300 focus:ring-offset-3 focus:ring-2 shadow-lg"
          />
          <HiOutlineSearch className="absolute right-2 mt-4 text-gray-500 text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default EducationBanner;
