import React from "react";
import avatar1 from "../../images/server1/avatar1.webp";
import role1 from "../../images/server1/role1.webp";
import img5 from "../../images/server1/img5.png";
import Cheer from "./Cheer";

const Message8 = () => {
  return (
    <div>
      <div className="hover:bg-[#32353b] pb-1 mb-[90px]">
        <div className="flex">
          {/**pfp */}
          <img
            alt=""
            src={avatar1}
            className="rounded-full h-[40px] w-[40px] ml-[18px] mt-1"
          />
          <div>
            <div className="flex">
              {/**name */}
              <div className="text-[#ea3355] text-[15px] font-regular ml-4">
                VANGUARD
              </div>
              {/**role */}
              <img alt="" src={role1} className="h-[20px] mt-[2px] ml-1" />
              {/**flag */}
              <div className="bg-[#5865f2] text-white rounded-[3px] h-[16px] text-[8px] font-medium flex items-center px-[5px] mt-1 ml-1 tracking-wide">
                BOT
              </div>
              {/**time */}
              <p className="text-white/50 text-[11px] font-medium ml-2 mt-[5px]">
                16/04/2022 14:17
              </p>
            </div>
            <div className="ml-4 text-[15px]">
              <div className="mb-[25px] font-bold text-white">
                Thank you from VALORANT's Dev team & 2022 Year-End
              </div>
              <div className="mb-[25px] text-normal text-white/90">
                Teams all across VALORANT wanted to share their thanks to the
                community for 2022 - before we head into 2023. Thanks from the
                entire VALORANT squad!
              </div>
              <div className="mb-[25px] text-normal text-white/90">
                Additionally, How's your past year been? Did you rank up? Or
                maybe you finally perfected your Sova lineup. Read below on
                what's in store for you.
                <span className="bg-[#3d4372] p-[2px] rounded-[4px]">
                  @ValorantNews
                </span>
              </div>
              <div className="text-normal text-[#1f90ee]">
                <a href="https://playvalorant.com/en-us/news/game-updates/valorant-2022-year-end/">
                  https://playvalorant.com/en-us/news/game-updates/valorant-2022-year-end/
                </a>
              </div>
              <div className="text-normal text-[#1f90ee]">
                <a href="https://playvalorant.com/en-us/news/dev/thank-you-from-our-dev-team/">
                  https://playvalorant.com/en-us/news/dev/thank-you-from-our-dev-team/
                </a>
              </div>
              <img alt="" src={img5} className="rounded-[5px] w-[35%] mb-1" />
              <Cheer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message8;
