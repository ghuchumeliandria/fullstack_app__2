import React from 'react'

type Article = {
    title: string,
    date: string
}

export default function Articles({ title, date }: Article) {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-[20px] text-[#34302D] font-semibold font-DM_Sans'>{title}</h1>
            <p className='text-[#4A4846] text-[16px] italic font-DM_Sans '>{date}</p>
        </div>
    )
}
