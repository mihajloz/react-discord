import React from "react";
import Message1 from "./Message1";
import Message2 from "./Message2";
import MessagesInput from "./MessagesInput";

const Server1rules = () => {
  return (
    <div className="ml-[300px] mb-[100px] mt-[80px] text-[30px] text-white font-bold">
      <h1 className="flex justify-center">Welcome to</h1>
      <h1 className="flex justify-center mt-[-8px] text-[33px]">VALORANT</h1>
      <p className="flex justify-center mt-1 text-white/50 text-[12px] font-medium">
        This is the beginning of this server.
      </p>

      <p className="text-[12px] flex justify-center mt-4 mb-[8px] font-medium text-white/50">
        16 April 2022
      </p>
      <Message1 />
      <Message2 />

      <MessagesInput />
    </div>
  );
};

export default Server1rules;
