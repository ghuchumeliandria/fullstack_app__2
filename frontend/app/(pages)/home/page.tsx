import UserArticles from '@/app/components/__molecules/userArticles/UserArticles'
import UserIntro from '@/app/components/__molecules/userIntroSection/UserIntro'
import React from 'react'

export default function HomePage() {
  return (
    <div className='w-full  mx-auto px-[9px] '>
      <div className="border-[1px] border-[#EFEDEB] px-2.5 pt-12   border-b-0 border-t-0">
        <UserIntro />
        <UserArticles />
      </div>
    </div>
  )
}
