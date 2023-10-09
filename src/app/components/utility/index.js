import React from "react";
import UtilityCard from "../utilityCard";
import { utilityCardData } from "../utilityCard/utils";

const UtilitySection = () => {
  return (
    <div className="py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-[45px]">
          Take your utility consumption <br /> and sustainability <br /> to the
          <span className="text-primary-light"> next level</span>
        </h1>
        <p className="text-sm text-black pt-5">
          Rhino provides industry leaders with all the data they <br /> need to
          effectively manage energy, reduce CO2 <br /> emissions and draw up ESG
          reports.
        </p>
      </div>
      <div className="flex gap-6">
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
