import Link from "next/link";
import React from "react";

const Button = ({title, className}) => {
  return (
    <Link
      href="#"
      className={`sm:text-base lg:text-sm font-extrabold text-white rounded-3xl py-2 px-8 text-base ${className}`}
    >
      {title}
    </Link>
  );
};

export default Button;
