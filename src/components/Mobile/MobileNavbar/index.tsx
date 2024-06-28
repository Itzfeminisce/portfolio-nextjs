'use client'
import { NavLinks } from '@/app/Links';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const MobileNavbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    return (
        <>
            <button className="hamburger-toggler" onClick={handleToggle}>
                <Image src='/svgs/icons/hamburger.svg' alt='Hamburger' width={50} height={50} />
            </button>


            {isOpen && <div className='fixed bg-gradient-custom h-screen w-screen left-0 top-0 right-0 z-999'>

                <button className="hamburger-toggler  right-10 m-4 z-50" onClick={handleToggle}>
                    <Image src='/svgs/icons/close.svg' alt='Hamburger' width={50} height={50} /></button>

                <div className='w-3/4 bg-red-50/20 p-4 rounded-2xl shadow-md mx-auto mb-4'>
                    <ul className="text-center space-y-5">
                        {NavLinks.map((link) => (
                            <li key={link.name} className='p-2 hover:text-gradient font-semibold transition-all hover:scale-90 text-2xl'>
                                <Link href={link.href} onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
                    <p className='text-center my-2 text-gradient font-semibold'>Designed with ❤️ by Rotimi Oluwafemi</p>
                    <div className='flex items-center justify-center gap-x-2'>
                        <Image src='/svgs/stacks/nextjs.svg' alt='Mobile Testing' width={30} height={30} />
                        <Image src='/svgs/stacks/react-router.svg' alt='Mobile Testing' width={30} height={30} />
                        <Image src='/svgs/stacks/tailwindcss.svg' alt='Mobile Testing' width={30} height={30} />
                </div>
            </div>}
        </>
    );
}

export default MobileNavbar