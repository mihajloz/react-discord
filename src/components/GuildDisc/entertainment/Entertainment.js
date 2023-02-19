import React from "react";
import EntertainmentBanner from "./EntertainmentBanner";
import EntertainmentFeatured from "./EntertainmentFeatured";

const Entertainment = () => {
  return (
    <div className="bg-[#393943] w-full overflow-auto scrollbar-hide scrollbar-hide">
      <EntertainmentBanner />
      <EntertainmentFeatured />
    </div>
  );
};

export default Entertainment;
