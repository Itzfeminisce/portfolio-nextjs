import Link from 'next/link'
import React from 'react'

const links = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
]

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex items-center justify-between py-5">
                <a href="/" className="logo"><span className='text-gradient'>@</span>Itzfeminisce</a>

                <ul className="flex items-center justify-between gap-x-4">
                    {links.map(link => (
                        <li key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar