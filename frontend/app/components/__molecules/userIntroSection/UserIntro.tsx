"use client";
import { useEffect } from "react";
import { useUserStore } from "@/app/store/userStore";
import TextLine from "../../__atoms/TextLine/TextLine";

export default function UserIntro() {
  const { user, loadUser } = useUserStore();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="flex flex-col gap-6 pb-12 border-b-[1px] border-borderColor">
      <h1 className="text-[32px] font-extrabold font-DM_Sans text-foreground">
        👋
        <TextLine text={`Hi, I’m ${user?.fullName || "Guest"}`} />
      </h1>
      <p className="text-[18px] font-DM_Sans">Welcome to blog page!</p>
    </div>
  );
}
