import React from "react";
import avatar1 from "../../images/server1/avatar1.webp";
import role1 from "../../images/server1/role1.webp";

const Message7 = () => {
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
            <div className="ml-4 text-white font-bold text-[14px]">
              You can pick one cosmetic color role below!
            </div>
            <div className="ml-4 mt-1 space-x-2">
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Yellow
              </button>
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Green
              </button>
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Blue
              </button>
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Gray
              </button>
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Pink
              </button>
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Purple
              </button>
              <button className="text-white rounded-[3px] hover:bg-[#686d73] ease-in-out duration-100 bg-[#4f545c] text-[12px] font-normal px-2 py-1">
                Orange
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message7;
