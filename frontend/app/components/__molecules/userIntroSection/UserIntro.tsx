"use client";
import { useUserStore } from "@/app/store/userStore";
import TextLine from "../../__atoms/TextLine/TextLine";

export default function UserIntro() {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col gap-6 pb-12 border-b-[1px] border-borderColor">
      <h1 className="text-[32px] font-extrabold font-DM_Sans text-[#34302D]">
       👋<TextLine text={`Hi, I’m ${user?.name || "Guest"}`} />
      </h1>
      <p className="text-[18px] font-DM_Sans">Welcome to my blog!</p>
    </div>
  );
}
