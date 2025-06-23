"use client";
import { useState } from "react";
import Image from "next/image";
import NavbarBtn from "../../__atoms/navbarBtns/NavbatBtn";
import { useUserStore } from "@/app/store/userStore";
import ThemeToggle from "../../__atoms/ThemeToggle/ThemeToggle";

export default function Navbar() {
  const { user } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-background border border-[#EFEDEB]  p-4 max-w-[640px] mx-auto rounded-[10px] mt-5">
      <div className="flex justify-between items-center">
        {user?.image && (
          <Image
            src={user.image}
            alt="profile"
            width={40}
            height={40}
            className="rounded-[10px]"
          />
        )}
        <div className="md:flex hidden gap-6 items-center">
          <NavbarBtn name="Home" />
          <NavbarBtn name="About" />
          <NavbarBtn name="Blog" />
          <NavbarBtn name="Newsletter" />
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl text-foreground ">☰</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <NavbarBtn name="Home" />
          <NavbarBtn name="About" />
          <NavbarBtn name="Blog" />
          <NavbarBtn name="Newsletter" />
        </div>
      )}
    </div>
  );
}
