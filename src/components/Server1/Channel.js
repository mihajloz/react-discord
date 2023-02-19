import React from "react";

const Server1Button = ({ title, icon, selected, onClick }) => {
  return (
    <div className=" flex items-center text-white/50 text-[14px] mb-[2px]">
      <button
        className={`flex w-full pt-[6px] pb-[5px] rounded-[4px] hover:bg-[#3b3e45] hover:text-white/80 select-none ${
          selected ? "bg-[#3b3e45] text-white" : ""
        }`}
        onClick={onClick}
      >
        <div className="ml-2 text-[20px] absolute">{icon}</div>
        <h6 className="ml-[34px]">{title}</h6>
      </button>
    </div>
  );
};

export default Server1Button;
