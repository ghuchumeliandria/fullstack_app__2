import React from 'react'

export default function UserIntro() {

    const userText = 'I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code.Welcome to my corner of the internet, and thanks for stopping by!'
    const paragraphs = userText.split('\r\n\r\n');

    return (
        <div>
            <h1 className='text-[32px] font-extrabold font-DM_Sans text-[#34302D]'>Hi, I’m Paulina 👋</h1>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-lg text-gray-700">{paragraph}</p>
            ))}
        </div>
    )
}
