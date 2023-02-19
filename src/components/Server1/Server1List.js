import React from "react";
import { HiHome } from "react-icons/hi";
import { IoMdCalendar } from "react-icons/io";
import { BiHash } from "react-icons/bi";
import { GiPolarStar } from "react-icons/gi";
import Server1Button from "./Server1Button";

const Server1List = () => {
  const server1buttons = [
    { icon: <HiHome />, title: "Home" },
    { icon: <IoMdCalendar />, title: "1 Event" },
    { icon: <BiHash />, title: "Channels & Roles" },
    { icon: <GiPolarStar />, title: "Server Subscriptions" },
  ];

  return (
    <div className="flex mt-[145px] mx-2 space-y-[12px] w-[224px] relative">
      <div>
        {server1buttons.map((button) => (
          <Server1Button title={button.title} icon={button.icon} />
        ))}
      </div>
      <div className="mt-[15px] border-b-[1px] border-[#3e4248]"></div>
    </div>
  );
};

export default Server1List;
