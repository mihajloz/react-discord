import React from "react";
import DirectMessagesSidebar from "./DirectMessagesSidebar";
import Navbar from "../Navbar";

const DirectMessages = () => {
  return (
    <div className="bg-[#36393f] h-full flex">
      <Navbar />
      <DirectMessagesSidebar />
    </div>
  );
};

export default DirectMessages;
