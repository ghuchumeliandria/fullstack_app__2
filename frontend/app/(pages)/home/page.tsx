import UserArticles from '@/app/components/__molecules/userArticles/UserArticles'
import UserIntro from '@/app/components/__molecules/userIntroSection/UserIntro'
import React from 'react'

export default function HomePage() {
  return (
    <div className='w-full max-w-[640px] mx-auto px-[9px]  '>
      <div className="border-[1px] border-[#EFEDEB] px-2.5 pt-12  min-h-[85vh] border-b-0 border-t-0">
        <UserIntro />
        <UserArticles />
      </div>
    </div>
  )
}
