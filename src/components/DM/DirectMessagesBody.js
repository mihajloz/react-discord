import React from "react";
import DirectMessagesNav from "./DirectMessagesNav";
import DirectMessagesFriends from "./DirectMessagesFriends";

const DirectMessagesBody = () => {
  return (
    <div className="w-full bg-[#36393f]">
      <DirectMessagesNav />
      <DirectMessagesFriends />
    </div>
  );
};

export default DirectMessagesBody;
