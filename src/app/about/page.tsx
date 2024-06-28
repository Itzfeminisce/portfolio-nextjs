import Image from 'next/image'
import React, { PropsWithChildren, ReactNode } from 'react'
import {twMerge} from 'tailwind-merge'
import { Projects } from '../Links'


const skills = [
  {
    id: 1,
    name: 'Frontend',
    description: 'HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap'
  },
  {
    id: 2,
    name: 'Backend',
    description: 'Node.js, Express, MongoDB, Firebase, RESTful APIs'
  },
  {
    id: 3,
    name: 'Tools',
    description: 'Git, GitHub, VS Code, Postman, Heroku, Netlify, Figma, Adobe XD, Trello, Slack, Zoom, Google Meet'
  },
  {
    id: 4,
    name: 'Soft Skills',
    description: 'Problem-solving, Communication, Teamwork, Time Management, Adaptability, Creativity, Attention to Detail, Critical Thinking, Leadership, Emotional Intelligence and Empathy'
  },
  {
    id: 5,
    name: 'Education',
    description: 'Bachelor of Science in Computer Science (in view), University of Lagos, Nigeria, 2022'
  },
  {
    id: 5,
    name: 'Courses',
    description: 'Udemy, Coursera, FreeCodeCamp, Codecademy, W3Schools, MDN Web Docs, YouTube, Google, Stack Overflow, Medium, Dev.to, Hashnode, and other online resources'
  }

]

const About = () => {
  return (
    <main className='max-w-screen-md mx-auto'>
      <h1 className='text-5xl text-gradient font-semibold uppercase bg-clip-text bg-gradient-to-t from-amber-200 via-red-50 to-teal-200'>About Me</h1>
      <h1 className='leading-7 font-semibold text-2xl'>Full Stack Web Developer</h1>

      <hr className='opacity-5 my-5' />

      <Title>Introduction</Title>

      <p className='first-letter:text-5xl first-letter:font-semibold'>
        My name is <b>Rotimi Oluwafemi Solomon</b> (aka. Itzfeminisce),
        I am a Full Stack Web Developer with a passion for creating beautiful,
        responsive, and user-friendly websites. I have experience in building
        web applications using JavaScript, React, Node.js, Express, and MongoDB.
      </p>
      <hr className='opacity-5 my-5' />
      <p>
        I am a self-taught developer who is always eager to learn new technologies
        and improve my skills. I am also a team player who enjoys collaborating with
        others to create amazing products. I am currently looking for new opportunities
        to work on exciting projects and expand my knowledge in the field of web development.
      </p>

      <Title>Skills</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {skills.map(skill => (
          <div key={skill.id} className='flex flex-col gap-2'>
            <h1 className='text-xl font-semibold'>{skill.name}</h1>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>


      <Title>Education</Title>
      <Paragraph title='Bachelor of Science in Computer Science (in view)' subtitle='University of Lagos, Nigeria, 2022'>
        I am currently pursuing a Bachelor of Science in Computer Science at the University of Lagos, Nigeria. I have learned a lot about computer science, programming, and web development during my time at the university.
      </Paragraph>

      <Title>Courses</Title>
      <Paragraph title='Online Courses' subtitle='Udemy, Coursera, FreeCodeCamp, Codecademy, W3Schools, MDN Web Docs, YouTube, Google, Stack Overflow, Medium, Dev.to, Hashnode, and other online resources'>
        I have taken several online courses on web development, programming, and computer science. I have learned a lot from these courses and I continue to learn new things every day.
      </Paragraph>

      <Title>Experience</Title>
      <Paragraph title='Freelance Web Developer' subtitle='2020 - Present'>
        I have worked as a freelance web developer for the past year. I have built several websites for clients and I have gained a lot of experience in web development. I enjoy working on new projects and I am always looking for new opportunities to learn and grow as a developer. I am currently looking for new projects to work on and I am excited to see what the future holds for me. 
      </Paragraph>


    </main>
  )
}


const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className='md:text-3xl text-xl text-gradient font-semibold capitalize text-slate-500 my-5'>{children}</h1>
  )
}

interface ParagraphProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  children: ReactNode;
  classNames?: Record<'title'|'subtitle', string>;
}
const Paragraph: React.FC<ParagraphProps> = ({ children,  subtitle, title, classNames}) => {
  return (
    <div>
      <h1 className={twMerge(`text-xl font-semibold ${classNames?.title}`)}>{title}</h1>
      <h2 className={twMerge(`text-lg font-semibold ${classNames?.subtitle}`)}>{subtitle}</h2>
      <p>{children}</p>
    </div>
  )
}
export default About