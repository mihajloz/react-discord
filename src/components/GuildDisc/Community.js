import React from "react";

const Community = ({ title, icon, onClick, selected }) => {
  return (
    <div className="flex items-center text-gray-300 text-[15px]">
      <button
        className={`flex w-full py-[9.5px] rounded-[4px] focus:bg-[#5865f2] hover:bg-[#3b3e45] hover:text-white select-none ${
          selected ? "bg-[#5865f2] text-white" : ""
        }`}
        onClick={onClick}
      >
        <div className="ml-3 text-[23px]">{icon}</div>
        <h6 className="ml-4">{title}</h6>
      </button>
    </div>
  );
};

export default Community;
