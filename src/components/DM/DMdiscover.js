import React from "react";
import { MdExplore } from "react-icons/md";
import { Link } from "react-router-dom";

const DMdiscover = () => {
  return (
    <div className="flex w-full h-screen flex-col">
      <div className="w-full bg-[#36393f] my-4">
        <p className="text-white font-semibold text-[15px] mb-2 mx-8">
          OTHER PLACES TO MAKE FRIENDS
        </p>
        <Link to="/guild-discovery">
          <div className="rounded-[8px] bg-[#2f3136] w-[550px] px-4 py-2 mx-5 mt-6 border-[0.5px] border-white/10 hover:bg-[#3f434a]">
            <button className="text-white/80 font-semibold text-[14px]">
              <MdExplore className="inline text-[38px] bg-[#3ba55c] p-2 rounded-[8px]" />
              <p className="inline ml-2">Explore Public Servers</p>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DMdiscover;
