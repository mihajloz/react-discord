import React from "react";
import DmAddFriend from "./DmAddFriend";
import DMdiscover from "./DMdiscover";

const DirectMessagesFriends = () => {
  return (
    <div className="flex flex-col ml-[302px] h-full bg-[#36393f]">
      <DmAddFriend />
      <DMdiscover />
    </div>
  );
};

export default DirectMessagesFriends;
