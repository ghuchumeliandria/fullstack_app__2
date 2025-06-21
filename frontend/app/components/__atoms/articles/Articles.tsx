import React from 'react'
import Link from "next/link";
type Article = {
    title: string,
    date: string
}

export default function Articles({ title, date }: Article) {
    return (
        <div className="flex justify-between items-center">
            <div className='flex flex-col gap-2'>
                <h1 className='text-[20px] text-[#34302D] font-semibold font-DM_Sans'>{title}</h1>
                <p className='text-[#4A4846] text-[16px] italic font-DM_Sans '>{date}</p>
            </div>
            <Link href={`blog-edit/${date}`} >
                <button className="bg-blue-600  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">Edit</button>
            </Link>
        </div>
    )
}
