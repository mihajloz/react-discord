import React from "react";
import { ImTree } from "react-icons/im";

function StudentFeatured() {
  return (
    <div className="ml-[334px] mt-8 mr-4 w-min[600px] ">
      <div className="w-[295px] h-[325px] rounded-[8px] bg-[#292b2f] mb-8">
        <div className="bg-[#3ba55d] rounded-[50%] w-[50px] h-[50px] relative ml-4 top-4">
          <ImTree className="text-white absolute top-[13px] left-[15px] text-[20px]" />
        </div>
        <div className="mt-8 ml-4 leading-6">
          <h3 className="text-white font-semibold text-[18px]">
            Find study groups, clubs and friends in the Student Hub for your
            school or university!
          </h3>
          <p className="text-white/60 text-light text-[13px] mt-4 mr-3 leading-[18px]">
            Meet classmates from your school, discover communities and share
            your servers, all in one place.
          </p>
        </div>

        <button className="w-[260px] py-[13px] ml-4 relative top-10 bg-[#2d7d46] hover:bg-[#215b32] rounded-[3px] text-white text-[12px] font-semibold ease-in-out duration-100">
          Join Hub
        </button>
      </div>

      <div className="border-b-[1px] border-[#41464d] w-full my-4"></div>
      <div className="text-white/70 text-[15px] leading-5 mt-8">
        <p>
          Hubs are not affiliated with or managed by schools or universities.
        </p>
        <p>
          Servers listed in the school or university's Student Hub are run by
          students in that Hub. Users do not need to be a member of a Student
          Hub to be invited to join a server listed there.
        </p>
      </div>
    </div>
  );
}

export default StudentFeatured;
