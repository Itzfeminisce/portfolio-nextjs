import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socials = [
    { name: 'Twitter', href: 'https://twitter.com/itzfeminisce', icon: '/svgs/social-icons/twitter.svg' },
    { name: 'GitHub', href: 'https://github.com/Itzfeminisce', icon: '/svgs/social-icons/github.svg' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/Itzfeminisce', icon: '/svgs/social-icons/linkedin.svg' },
    { name: 'Instagram', href: 'https://instagram.com/itzfeminisce', icon: '/svgs/social-icons/instagram.svg' },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='flex flex-col items-center justify-center py-5'>
                <p className='text-lg font-semibold'>Made with ❤️ by Rotimi Oluwafemi</p>

                <ul className='flex items-center justify-between gap-x-4'>
                    {socials.map(social => (
                        <li key={social.name}>
                            <Link href={social.href}>
                                <Image src={social.icon} alt={social.name} width={30} height={30} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer