"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
export default function BlogEdit() {
    const [blog, setBlogs] = useState<string[]>([])
    const { id } = useParams()
    useEffect(() => {
        const blogs = localStorage.getItem('posts')
        if (blogs) {
            const parsedBlogs = JSON.parse(blogs)
            setBlogs(parsedBlogs)
        }
    }, [])



    return (
        <div className='w-full  px-[9px] max-w-[640px] mx-auto'>
            <div className="border-[1px] border-y-0 h-full min-h-[100vh]"></div>
        </div>
    )
}
