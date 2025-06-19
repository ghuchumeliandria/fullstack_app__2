import Image from "next/image";
import React from "react";
import profile from "../../../images/Profile.png";
import NavbarBtn from "../../__atoms/navbarBtns/NavbatBtn";
import { useUserStore } from "@/app/store/userStore";
export default function Navbar() {
  const { user } = useUserStore();

  return (
    <div className="w-full max-w-[640px] mx-auto bg-[#FEFEFE] p-[7px] rounded-[10px] border-[1px] border-[#EFEDEB] flex justify-between">
      {user?.image && (
        <Image
          src={user.image}
          alt="profile"
          width={40}
          height={40}
          className="rounded-[10px]"
        />
      )}
      <div className="flex gap-6 items-center">
        <NavbarBtn name="Home" />
        <NavbarBtn name="About" />
        <NavbarBtn name="Blog" />
        <NavbarBtn name="Newsletter" />
      </div>
    </div>
  );
}
