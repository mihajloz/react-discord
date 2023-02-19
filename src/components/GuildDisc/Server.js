import React, { useState } from "react";
import { discover } from "./discover";
import Community from "./Community";
import Profile from "../Profile";
import Main from "./Main";
import Gaming from "../GuildDisc/gaming/Gaming";
import Music from "./music/Music";
import Education from "./education/Education";
import Science from "./science/Science";
import Entertainment from "./entertainment/Entertainment";
import Student from "./student/Student";

export const Server = () => {
  const [selected, setSelected] = useState(discover[0].title);

  const [currentPage, setCurrentPage] = useState("Home");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    setSelected(page);
  };

  return (
    <div className="flex w-full">
      <div className="shrink-0 h-screen fixed top-0 left-[72px] bg-[#303136] w-[240px] flex flex-col justify-between z-1">
        {/* Discover title */}
        <div>
          <div className="pt-4">
            <p className="text-white font-bold text-[22px] pl-4 ">Discover</p>
          </div>
          {/*Communities */}
          <div className="mt-[15px] mx-2 space-y-[2px]">
            {discover.map((community) => (
              <Community
                icon={community.icon}
                title={community.title}
                selected={community.title === selected}
                onClick={() => handleButtonClick(community.title)}
              />
            ))}
          </div>
        </div>
        {/* Profile */}
        <Profile />
      </div>
      <div>
        {currentPage === "Home" && <Main />}
        {currentPage === "Gaming" && <Gaming />}
        {currentPage === "Music" && <Music />}
        {currentPage === "Education" && <Education />}
        {currentPage === "Science & tech" && <Science />}
        {currentPage === "Entertainment" && <Entertainment />}
        {currentPage === "Student Hubs" && <Student />}
      </div>
    </div>
  );
};

export default Server;
