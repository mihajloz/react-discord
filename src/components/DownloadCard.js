import React from "react";

const DownloadCard = ({ title, icon }) => {
  return (
    <div className="main-div grid m-2 h-[260px] w-[195px] rounded-[6px] border-[2px] border-[#747f8d] hover:scale-105 duration-500 ease-in-out hover:border-[#6874f3]">
      <div className="card-icon flex justify-center text-[100px] mt-[50px]">
        {icon}
      </div>
      <div className="flex justify-center mb-7 font-semibold text-[18px]">
        {title}
      </div>
      <div className="flex justify-center mb-[10px]">
        <button className="download-btn w-[170px] py-2 rounded-[4px] bg-[#747f8d] text-white text-[13px]">
          Download
        </button>
      </div>
    </div>
  );
};

export default DownloadCard;
