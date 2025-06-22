"use client"
import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from "next/navigation";
import { BlogType } from '@/app/types/type';
export default function BlogEdit() {
    const [blog, setBlog] = useState<BlogType[]>([])
    const { id } = useParams()
    const [area, setArea] = useState(false)
    const [title, setTitle] = useState('')
    useEffect(() => {
        const blogs = localStorage.getItem('posts')
        if (blogs) {
            const parsedBlogs = JSON.parse(blogs)
            setBlog(parsedBlogs)
        }
    }, [])
    const filteredBlog = useMemo(() => {
        return blog.find(el => Number(el.id) === Number(id));
    }, [blog, id]);

    if (!filteredBlog) return <div className="">ar gvaqvs</div>

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title.trim()) return;
        const updatedBlog = blog.map(el =>
            Number(el.id) === Number(id) ?
                { ...el, title } : el
        )
        localStorage.setItem('posts', JSON.stringify(updatedBlog))
        setBlog(updatedBlog)
        setArea(false)
    }
    return (
        <div className='w-full  px-[9px] max-w-[640px] mx-auto'>
            <div className="border-[1px] border-y-0 min-h-[82vh] p-2.5">

                {area ? <form onSubmit={onSubmit} >

                    <textarea name="title" id="" className='w-full p-2 ' value={title} onChange={(e) => setTitle(e.target.value)}>
                    </textarea>
                    <div className="flex justify-center">
                        <button type='submit' className='bg-green-500 px-6 py-3 rounded-xl mt-3 text-white font-DM_Sans font-bold'>Save</button>
                    </div>
                    {title === '' && <p className='text-red-500'>Please fill area</p>}

                </form>
                    :
                    <div className="">
                        <div className='flex flex-col gap-2 bg-white p-3 rounded-lg shadow-lg'>
                            <h1 className='text-[20px] text-[#34302D] font-semibold font-DM_Sans'>{filteredBlog.title}</h1>
                            <p className='text-[#4A4846] text-[16px] italic font-DM_Sans '>{filteredBlog.date}</p>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => { setArea(true); setTitle(filteredBlog.title) }} className='bg-blue-500 px-6 py-3 rounded-xl mt-3 text-white font-DM_Sans font-bold'>Edit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
