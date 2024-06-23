'use client'
import { links } from '@/components/Navbar';
import Link from 'next/link';
import React from 'react'

const MobileNavbar = () => {
    return (
        <nav>
            <div className="hamburger-toggler">
                {/* Hamburger toggler code goes here */}
            </div>
            <ul className="nav-links">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MobileNavbar