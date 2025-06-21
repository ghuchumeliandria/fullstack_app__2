import React from 'react'
type Text = {
    text: string
}
export default function TextLine({ text }: Text) {
    return (
        <div className="">

            <h1 className="text-2xl font-bold flex items-end gap-2">{text} <div className="w-10 h-[3px] mb-1 bg-[#93CEFC]"></div></h1>
        </div>
    )
}
