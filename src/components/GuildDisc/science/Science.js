import React from "react";
import ScienceBanner from "./ScienceBanner";
import ScienceFeatured from "./ScienceFeatured";

const Science = () => {
  return (
    <div className="bg-[#393943] w-full overflow-auto scrollbar-hide scrollbar-hide">
      <ScienceBanner />
      <ScienceFeatured />
    </div>
  );
};

export default Science;
