import React from "react";
import { scienceCards } from "./scienceCards";
import Card from "../Card";
import footer from "../../../images/footer.svg";

function EducationFeatured() {
  return (
    <div className="grid ml-[334px] mr-4 w-min[600px] ">
      <div className="select-none mt-7 mb-3 text-white text-[18px] font-semibold">
        Popular communities
      </div>

      {/*Cards*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 w-min-[150px] mr-2">
        {scienceCards.map((card) => (
          <Card
            splash={card.splash}
            icon={card.icon}
            title={card.title}
            description={card.description}
            members={card.members}
          />
        ))}
      </div>
      {/*Footer */}
      <div className="flex flex-col justify-center items-center pt-5 pb-8">
        <img alt="" src={footer} className="pb-3" />
        <div>
          <h6 className="text-center text-white font-medium text-[14px]">
            There are more communities out there!
          </h6>
          <p className="text-center text-sky-400 text-[12px]">
            <a href="https://discord.com">Try searching for them.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationFeatured;
