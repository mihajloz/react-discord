import React from "react";
import avatar1 from "../../images/server1/avatar1.webp";
import role1 from "../../images/server1/role1.webp";
import img4 from "../../images/server1/img4.png";

const Message6 = () => {
  return (
    <div>
      <div className="hover:bg-[#32353b] pb-1">
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
            <div className="ml-4 mt-1 rounded-[5px]">
              <img alt="" src={img4} className="rounded-[5px] w-[400px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="hover:bg-[#32353b] ">
        <div className="ml-[73px] mt-1 rounded-[5px] mb-1">
          <div className="px-3 py-4 rounded-[5px] border-solid w-[33%] border-l-[4px] border-l-[#ea3355] font-semibold text-white text-[15px] bg-[#2f3136]">
            <div className="">Valcord Coaching</div>
            <div className="font-normal text-[12px] text-white/70 mt-[15px]">
              Looking to get better at VALORANT? We have a large team of skilled
              coaches who are more than happy to help you. At the moment we
              offer VOD reviews and in-game coaching.
            </div>

            <div className="font-bold text-[12px] text-white mt-[15px]">
              In-game spectating
            </div>
            <div className="font-normal text-[12px] text-white/70">
              Price: $30
            </div>
            <div className="font-normal text-[12px] text-white/70">
              Time: Till game end
            </div>

            <div className="font-bold text-[12px] text-white mt-[15px]">
              Live VOD Review
            </div>
            <div className="font-normal text-[12px] text-white/70">
              Price: $25
            </div>
            <div className="font-normal text-[12px] text-white/70">
              Time: 45 Minutes
            </div>

            <div className="font-bold text-[12px] text-white mt-[15px]">
              Pick a coach and order now:
              <a
                href="https://welcome.proguides.com/valorant-coaching"
                className="ml-1 text-[#1f90ee] font-normal"
              >
                https://welcome.proguides.com/valorant-coaching
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message6;
