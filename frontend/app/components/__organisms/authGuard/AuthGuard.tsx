"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getCookie } from "cookies-next";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const isAuthPage = pathname === "/login" || pathname === "/register";
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const token = getCookie('token')
        if (token && isAuthPage) {
            router.replace("/")
            return
        }

        if (!token && !isAuthPage) {
            router.replace("/login")
            return
        }
        setAuthorized(true)
        setLoading(false)
    }, [pathname])



    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-black text-white text-3xl font-semibold">
                <div className="flex items-center">

                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

                </div>
            </div>
        )
    }

    if (!authorized && !isAuthPage) return null

    return (

        <div className="w-full relative">

            {!isAuthPage && <Navbar />}
            {children}
            {!isAuthPage && <Footer />}
        </div>
    );
}
