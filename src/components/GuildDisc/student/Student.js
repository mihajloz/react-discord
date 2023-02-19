import React from "react";
import StudentBanner from "./StudentBanner";
import StudentFeatured from "./StudentFeatured";

const Student = () => {
  return (
    <div className="bg-[#393943] w-full h-screen overflow-auto scrollbar-hide scrollbar-hide">
      <StudentBanner />
      <StudentFeatured />
    </div>
  );
};

export default Student;
