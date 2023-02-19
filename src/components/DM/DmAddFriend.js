import React from "react";

const DmAddFriend = () => {
  return (
    <div className="flex w-full border-b-[0.5px] border-white/10">
      <div className="bg-[#36393f] w-full mx-8 my-4">
        <p className="text-white font-semibold text-[15px] mb-2">ADD FRIEND</p>
        <p className="text-[13px] text-white/60 mb-4">
          You can add a friend with their Discord tag. It's cAsE-sEnSitIvE!
        </p>
        <input
          type="search"
          placeholder="Enter a Username#0000"
          className="w-full bg-[#202225] rounded-[7px] p-[14px] text-[15px] text-white"
        />
      </div>
    </div>
  );
};

export default DmAddFriend;
