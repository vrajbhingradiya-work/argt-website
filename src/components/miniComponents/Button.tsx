"use client";
import React from "react";

import { useRouter } from "next/navigation";

function Button({
  title = "BUTTON TITLE",

  className = "",
  svg = null,
  link = "",
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (link !== "") {
          router.push(link);
        }
      }}
      type="button"
      className={`${
        className
          ? className
          : "hover:bg-black  bg-transparent text-black hover:text-white fill-[#CACACA] hover:fill-white border-[1px] border-[#CACACA] text-xl  w-[50%] "
      } px-4 md:pl-6 pl-4 md:py-4 py-2 flex justify-center items-center group transition ease-in-out duration-300  tracking-[.2em]`}
    >
      {svg || " "}
      <span>{title}</span>
    </button>
  );
}

export default Button;
