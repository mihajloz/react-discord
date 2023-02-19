import React from "react";
import EducationBanner from "./EducationBanner";
import EducationFeatured from "./EducationFeatured";

const Education = () => {
  return (
    <div className="bg-[#393943] w-full overflow-auto scrollbar-hide scrollbar-hide">
      <EducationBanner />
      <EducationFeatured />
    </div>
  );
};

export default Education;
