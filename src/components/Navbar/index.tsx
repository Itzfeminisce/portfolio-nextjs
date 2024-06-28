import Link from 'next/link'
import React from 'react'
import MobileNavbar from '../Mobile/MobileNavbar';
import { NavLinks } from '@/app/Links';

const Navbar = () => {
    return (
        <nav className="sticky top-0">
            <div className="flex items-center justify-between pb-2 md:p-4 md:mb-5">
                <Link href="/" className="logo"><span className='text-gradient'>@</span>Itzfeminisce</Link>

                {/** Desktop */}
                <ul className="md:flex items-center justify-between gap-x-4 hidden">
                    {NavLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/** Mobile */}
                <div className='md:hidden'>
                <MobileNavbar />
                </div>
            </div>
        </nav>
    );
}

export default Navbar