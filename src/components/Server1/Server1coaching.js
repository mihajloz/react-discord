import React from "react";
import { BiHash } from "react-icons/bi";
import MessagesInput from "./MessagesInput";
import Message6 from "./Message6";

const Server1coaching = () => {
  return (
    <div className="ml-[300px] mt-4 h-full">
      <div className="ml-4">
        <div className="text-white rounded-full mt-8 bg-[#4f545c] h-[70px] w-[70px]">
          <BiHash className="text-[60px] pt-[12px] ml-[5px]" />
        </div>
        <h1 className="text-white text-[30px] font-bold mt-2">
          Welcome to #get-coaching!
        </h1>
        <p className="flex mt-1 text-white/60 text-[15px] font-normal">
          This is the start of the #get-coaching channel.
        </p>
      </div>
      <p className="text-[12px] flex justify-center mt-4 mb-[8px] font-medium text-white/50">
        16 April 2022
      </p>
      <Message6 />

      <MessagesInput />
    </div>
  );
};

export default Server1coaching;
