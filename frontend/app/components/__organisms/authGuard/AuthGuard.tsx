"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import { axiosInstance } from "@/app/api/axios.instance";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/auth/current-user")
      .then(() => setAuthorized(true))
      .catch(() => {
        if (!isAuthPage) router.replace("/login");
        else setAuthorized(true);
      });
  }, [pathname]);

  if (!authorized && !isAuthPage) return null;

  return (
    <div className="w-full relative">
      {!isAuthPage && <Navbar />}
      {children}
    </div>
  );
}
