import React from "react";

const MessagesInput = () => {
  return (
    <div className="w-full fixed bottom-0 ml-[2px] bg-[#36393f]">
      <div className="w-full flex justify-center bg-[#36393f]">
        <input
          type="text"
          readOnly
          placeholder="You do not have permission to send messages in this channel"
          className="w-full mx-4 read-only bg-[#3b3f45] mr-[320px] mb-[22px] h-[45px] placeholder:text-white/20 rounded-[7px] text-[15px] pl-4 font-light outline-none cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default MessagesInput;
