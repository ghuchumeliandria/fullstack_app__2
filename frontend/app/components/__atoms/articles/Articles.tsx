import React from 'react'
import Link from "next/link";
type Article = {
    title: string,
    date: string,
    id: string,
    handleDelete: (id: string) => void
}

export default function Articles({ title, date, id, handleDelete }: Article) {
    return (
        <div className="flex justify-between items-center">
            <div className='flex flex-col gap-2'>
                <h1 className='text-[20px] text-[#34302D] font-semibold font-DM_Sans'>{title}</h1>
                <p className='text-[#4A4846] text-[16px] italic font-DM_Sans '>{date}</p>
            </div>
            <div className="" >

                <button onClick={() => handleDelete(id)} className='px-3 py-2 text-white font-bold bg-red-500 mr-2 rounded-xl'>Delete</button>
                <Link href={`blog-edit/${id}`} >
                    <button  className="bg-blue-600  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">Edit</button>
                </Link>
            </div>
        </div>
    )
}
