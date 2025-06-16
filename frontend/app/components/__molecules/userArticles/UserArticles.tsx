import React from 'react'
import Articles from '../../__atoms/articles/Articles'
import Link from 'next/link'

export default function UserArticles() {

  const blogPosts = [
    {
      title: "Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated",
      date: "February 18, 2025",

    },
    {
      title: "Reading for Inspiration: 5 Books That Shaped My Coding Journey",
      date: "February 15, 2025",

    },
    {
      title: "Overcoming Imposter Syndrome as a New Developer",
      date: "February 10, 2025",

    },
    {
      title: "Exploring the World of Responsive Design",
      date: "February 4, 2025",

    },
    {
      title: "My Favorite Dev Tools for Productivity",
      date: "January 29, 2025",

    }
  ];

  return (
    <div className='w-full mt-12 flex flex-col gap-8 pb-12 border-b-[1px] border-borderColor'>
      <h1 className='text-[32px] font-extrabold font-DM_Sans text-[#34302D]'>Latest Articles</h1>
      <div className="flex flex-col gap-6">
        {blogPosts.map((article, index) => (
          <Articles title={article.title} date={article.date} key={index} />
        ))}
      </div>
      {blogPosts.length >= 5 ? <div className="text-[18px] font-medium font-DM_Sans group relative"><Link href={'/blog'}>View all Articles <span className='absolute bottom-0 h-[3px] bg-[#93CEFC]  group-hover:bg-purple-700 group-active:bg-[#93CEFC] w-[134px] left-0'></span> </Link></div> : null}
    </div>
  )
}
