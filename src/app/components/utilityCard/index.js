import Image from "next/image";
import React from "react";

const UtilityCard = ({ imageUrl, title, content, classname }) => {
  return (
    <div className={`flex flex-col gap-5 mt-24 border-2 rounded-3xl border-primary-light justify-center items-center w-[250px] ${classname}`}>
      <div>
        <Image
          src={imageUrl}
          alt="logo 1"
          height={50}
          width={60}
          className="pt-12"
        />
      </div>
      <h1 className="text-black text-xl font-bold leading-8 pb-6 text-center">{title}</h1>
      <p className="text-center text-sm pb-11 px-8">{content}</p>
    </div>
  );
};

export default UtilityCard;
