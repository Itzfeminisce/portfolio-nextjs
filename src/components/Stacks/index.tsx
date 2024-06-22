import Image from 'next/image'
import React from 'react'


const stacks = [
    {
        name: 'React',
        image: '/svgs/stacks/reactjs.svg'
    },
    {
        name: 'React Router',
        image: '/svgs/stacks/react-router.svg'
    },
    {
        name: 'Next.js',
        image: '/svgs/stacks/nextjs.svg'
    },
    {
        name: 'Tailwind CSS',
        image: '/svgs/stacks/tailwindcss.svg'
    },
    {
        name: 'Express.js',
        image: '/svgs/stacks/expressjs.svg'
    },
    {
        name: 'MongoDB',
        image: '/svgs/stacks/mongodb.svg'
    },
    {
        name: 'MySQL',
        image: '/svgs/stacks/mysql.svg'
    },
    {
        name: 'NestJS',
        image: '/svgs/stacks/nestjs.svg'
    },
    {
        name: 'PHP',
        image: '/svgs/stacks/php.svg'
    },
]

const Stacks = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-5'>
          <h2 className="text-3xl font-semibold text-center text-slate-500 heading-2">Technologies I work with</h2>
          <div className="flex items-center justify-center mt-7 flex-wrap gap-10">
            {stacks.map(stack => (
              <div className="" key={stack.name}>
                <Image src={stack.image} alt={stack.name} width={100} height={100} />
                <p className="text-center text-2xl font-semibold">{stack.name}</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Stacks