import Image from 'next/image'
import React from 'react'
import profile from '../../../images/Profile.png'
import NavbarBtn from '../../__atoms/navbarBtns/NavbatBtn'
export default function Navbar() {
    return (
        <div className='w-full max-w-[640px] mx-auto bg-[#FEFEFE] p-[7px]  rounded-[10px] border-[1px] border-[#EFEDEB] flex justify-between'>
            <Image src={profile} alt='profile-picture' width={40} height={40} />
            <div className="flex gap-6 items-center">
                <NavbarBtn name='Home' />
                <NavbarBtn name='About' />
                <NavbarBtn name='Blog' />
                <NavbarBtn name='Newsletter' />
            </div>
        </div>
    )
}
