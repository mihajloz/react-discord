import React from "react";
import { MdVerified } from "react-icons/md";

function Card({ splash, title, icon, description, members }) {
  return (
    <div className="w-full">
      {/**w-[295px] h-[325px] */}
      {/*Splash */}
      <div className="w-full ">
        {/**w-[300px] */}
        <img
          alt=""
          src={splash}
          className="h-[145px] object-cover rounded-t-[8px] w-full"
        />
        {/*w-[295px] */}
      </div>
      {/*Icon */}
      <div className="relative bg-[#292b2f] h-[180px] rounded-b-[8px]">
        <div className="absolute left-3 top-[-30px]">
          <img alt="" src={icon} className="rounded-[15px] p-1 bg-[#292b2f]" />
        </div>
        {/*Title */}
        <div>
          <div className="pt-7 pl-4">
            <p className="inline">
              <MdVerified className="inline text-green-500" />
            </p>
            <h6 className="inline text-white ml-1 font-medium text-[15px]">
              {title}
            </h6>
            <p className="mt-1 text-gray-300 text-[13px] font-light pr-3">
              {description}
            </p>
            <div>
              <p className="text-gray-300 text-[12px] font-light absolute top-[145px]">
                {members}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
