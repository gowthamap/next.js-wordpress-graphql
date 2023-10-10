import React from "react";

const SavingSection = ({ classname }) => {
  const savingsCount = [
    {
      suffix: "+",
      count: "1 000 000",
      content: "collected data every day",
    },
    {
      suffix: "+",
      count: "3 000 000",
      content: "square meters monitored building surfaces",
    },
    {
      suffix: "+",
      count: "10 800",
      content: "installed counters",
    },
  ];

  return (
    <div className="bg-primary-dark w-full py-12 lg:py-24">
      <h1 className="text-center text-xl lg:text-4xl font-bold text-white pb-12">
        We <span className="text-primary-light">maximize</span> savings
      </h1>
      <div className="flex justify-center flex-col lg:flex-row gap-10 lg:gap-5">
        {savingsCount.map((item) => {
          return (
            <div className="px-3 text-center">
              <h1 className="text-white text-center text-2xl lg:text-5xl font-bold">
                <span className="text-primary-light">{item.suffix}</span>{" "}
                {item?.count}
              </h1>
              <p className="text-white text-[9px] lg:text-sm">{item?.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingSection;
