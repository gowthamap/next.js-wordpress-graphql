import React from "react";
import UtilityCard from "../utilityCard";
import { utilityCardData } from "../utilityCard/utils";

const UtilitySection = () => {
  return (
    <div className="py-24">
      <div className="text-center md:px-48 lg:px-0 lg:pb-24">
        <h1 className="text-xl lg:text-4xl font-bold lg:leading-[45px]">
          Take your utility consumption <br /> and sustainability <br /> to the
          <span className="text-primary-light"> next level</span>
        </h1>
        <p className="text-sm text-[9px] mx-10 lg:mx-0 text-black pt-5 pb-20">
          Rhino provides industry leaders with all the data they <br className="hidden lg:block" /> need to
          effectively manage energy, reduce CO2 <br className="hidden lg:block" /> emissions and draw up ESG
          reports.
        </p>
      </div>
      <div className="relative before-gradient flex justify-center py-10 flex-wrap gap-10 lg:gap-5 md:py-0">
        {utilityCardData?.map((item) => {
          return (
            <UtilityCard
              imageUrl={item?.image}
              title={item?.title}
              content={item?.content}
              classname='w-full lg:w-1/2'
            />
          );
        })}
      </div>
    </div>
  );
};

export default UtilitySection;
