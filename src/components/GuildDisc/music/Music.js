import React from "react";
import MusicBanner from "./MusicBanner";
import MusicFeatured from "./MusicFeatured";

const Music = () => {
  return (
    <div className="bg-[#393943] w-full overflow-auto scrollbar-hide scrollbar-hide">
      <MusicBanner />
      <MusicFeatured />
    </div>
  );
};

export default Music;
