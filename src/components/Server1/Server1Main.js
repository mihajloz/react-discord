import React from "react";
import Navbar from "../Navbar";
import Server1Sidebar from "./Server1Sidebar";

const Server1Main = () => {
  return (
    <div className="bg-[#36393f] h-full flex">
      <Navbar />
      <Server1Sidebar />
    </div>
  );
};

export default Server1Main;
