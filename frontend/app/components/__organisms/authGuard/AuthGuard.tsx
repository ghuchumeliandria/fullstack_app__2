'use client'

import { usePathname, useRouter } from 'next/navigation'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { deleteCookie, getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'


export default function AuthGuard({ children }: { children: React.ReactNode }) {

    const router = useRouter()
    const [authorized, setAuthorized] = useState(false)
    const pathname = usePathname()
    const isAuthPage = pathname === '/login' || pathname === '/register'
    const DeleteToken = () => {
        deleteCookie('token')
        router.push('/login')
    }
    useEffect(() => {
        const token = getCookie('token')
        if (!token && !isAuthPage) {
            router.replace('/login')
        } else {
            setAuthorized(true)
        }
    }, [pathname])

    if (!authorized && !isAuthPage) return null


    return (
        <div className="w-full relative">
            {!isAuthPage && <Navbar />}
            {!isAuthPage && <div className="absolute top-5 right-2   h-5"><button onClick={DeleteToken} className=''>Log out</button></div>}
            {children}
            {!isAuthPage && <Footer />}
        </div>
    )
}