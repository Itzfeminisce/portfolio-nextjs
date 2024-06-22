'use client'
import Image from 'next/image'
import React from 'react'
import TypeIt from 'typeit-react'

const HeroSection = () => {
    return (
        <div className='flex items-center justify-around w-full flex-wrap'>
            <div className="hero-text flex-1">
                <p className='py-2 text-lg font-semibold text-slate-500 text-center md:text-left hidden md:block'>Hi there!</p>

                <div className='flex md:flex-row flex-col w-full gap-x-2 mb-3'>
                    <h2 className='text-lg md:text-5xl font-extrabold text-gradient md:uppercase'>i am {' '}</h2> 
                    <h1 className="text-5xl font-extrabold text-gradient uppercase">Rotimi Oluwafemi</h1>
                </div>
                <p className="text-lg">I'm a full-stack developer based in Nigeria</p>
                <p>I work with technologies like {' '}
                    <span className='font-semibold text-gradient'>
                        <TypeIt
                            as='span'
                            options={{
                                strings: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
                                speed: 100,
                                deleteSpeed: 100,
                                breakLines: false,
                                loop: true,
                            }}
                        />
                    </span>
                </p>
            </div>
            <div className="hero-image m-4">
                <Image src='/images/author.png' alt='Rotimi Oluwafemi' width={400} height={400} />
            </div>
        </div>
    )
}

export default HeroSection