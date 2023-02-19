import React from "react";
import GamingBanner from "./GamingBanner";
import GamingFeatured from "./GamingFeatured";

const Gaming = () => {
  return (
    <div className="bg-[#393943] w-full overflow-auto scrollbar-hide scrollbar-hide">
      <GamingBanner />
      <GamingFeatured />
    </div>
  );
};

export default Gaming;
