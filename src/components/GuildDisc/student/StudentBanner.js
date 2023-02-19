import React from "react";
import studentBanner from "../../../images/banner_student.svg";

const StudentBanner = () => {
  return (
    <div className="relative xl:w-[1550px] h-[20vh] md:h-[30vh] lg:h-[43vh] xl:h-[50vh] ml-[336px] mr-[22px] mt-8">
      <div className="absolute flex w-full">
        <img
          alt=""
          src={studentBanner}
          className="object-cover w-full rounded-[10px] h-[20vh] md:h-[30vh] lg:h-[43vh] xl:h-[50vh]"
        />
      </div>

      {/*Search bar / Explore*/}
      <div className="relative z-1 flex flex-col items-center justify-center h-full">
        <h6 className="text-[21px] font-bold text-white mb-1 select-none">
          Find your people
        </h6>
        <p className="text-[15px] font-normal text-white select-none">
          From clubs, to study groups, to game nights, there's a place for you.
        </p>
      </div>
    </div>
  );
};

export default StudentBanner;
