import Image from "next/image";
import React from "react";

const UtilityCard = ({ imageUrl, title, content, classname }) => {
  return (
    <div className="flex flex-col items-center w-72 md:h-100 border-primary-light border-2 rounded-3xl">
      <div>
        <Image
          src={imageUrl}
          alt="logo 1"
          height={50}
          width={60}
          className="pt-10 lg:py-12"
        />
      </div>
      <h1 className="text-black text-xs lg:text-xl font-bold lg:leading-8 mt-5 mb-2 lg:mt-0 lg:mb-0 lg:pb-6 px-8 text-center">{title}</h1>
      <p className="text-center text-[9px] lg:text-sm pb-11 px-8">{content}</p>
    </div>
  );
};

export default UtilityCard;
