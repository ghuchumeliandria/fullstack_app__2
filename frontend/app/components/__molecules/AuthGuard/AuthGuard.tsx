"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/userStore";
import Navbar from "../../__organisms/navbar/Navbar";
import Footer from "../../__organisms/footer/Footer";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loadUser } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    loadUser();
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return; 
    const publicPaths = ["/login", "/register"];
    if (!user && !publicPaths.includes(pathname)) {
      router.push("/login");
    }
  }, [loaded, user, pathname]);

  const isAuthPage = ["/login", "/register"].includes(pathname);

  return (
    <div className="w-full bg-bgmain min-h-[100vh]">
      <div className="w-full mx-auto">
        {!isAuthPage && <Navbar />}
        {children}
        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
}
