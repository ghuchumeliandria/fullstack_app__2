import Image from 'next/image'
import X from '../../../images/X.svg'
import gitSvg from '../../../images/git.svg'
import Smile from '../../../images/smile.svg'
import linkedin from '../../../images/Linkedin.svg'
export default function UserIntro() {



    return (
        <div className='flex flex-col gap-6 pb-12 border-b-[1px] border-borderColor'>
            <h1 className='text-[32px] font-extrabold font-DM_Sans text-[#34302D]'>Hi, I’m Paulina 👋</h1>
            <p className='text-[18px] font-DM_Sans font-normal text-[#4A4846] '>I’m on a journey to become a front-end web developer. I love building little projects, trying
                out new coding techniques, and sharing what I learn along the way. When I’m not at my desk,
                you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
            <p className='text-[18px] font-DM_Sans font-normal text-[#4A4846]'>I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!</p>
            <div className="flex gap-3">
                <Image src={X} alt='tweet-icon' width={40} height={40} />
                <Image src={gitSvg} alt='git-icon' width={40} height={40} />
                <Image src={linkedin} alt='linkedin-icon' width={40} height={40} />
                <Image src={Smile} alt='smile-icon' width={40} height={40} />
            </div>
        </div>
    )
}
