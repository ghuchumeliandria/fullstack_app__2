"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Name = {
  name: string;
};
export default function NavbarBtn({ name }: Name) {
  const pathname = usePathname();
  return (
    <Link href={`/${name.toLowerCase()}`}>
      <button className="text-[16px] font-normal text-[#4A4846] cursor-pointer relative group ">
        {name}
        <span
          className={`absolute ${
            `/${name.toLowerCase()}` === pathname
              ? "bg-[#93CEFC] opacity-100 bottom-[1px]"
              : "bg-red-500"
          }  cursor-pointer left-1/2 bottom-[-10px] transform -translate-x-1/2 w-full h-[3px]
                     bg-[#93CEFC] opacity-0 group-hover:opacity-100 group-hover:bottom-[1px] transition-all duration-300 ease-out`}
        ></span>
      </button>
    </Link>
  );
}
