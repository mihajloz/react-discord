import React from "react";
import Banner from "./Banner";
import Featured from "./Featured";

const Main = () => {
  return (
    <div className="bg-[#393943] w-full overflow-auto scrollbar-hide scrollbar-hide">
      {/*Banner*/}
      <Banner />
      {/*Featured*/}
      <Featured />
    </div>
  );
};

export default Main;
