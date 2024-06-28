import React from 'react'
import { Projects } from '../Links'
import ProjectCard from '@/components/ProjectCard'

const Project = () => {
  return (
   <div>
<h1>Projects</h1>
<p></p>

<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
    {Projects.map(project => (
      <div key={project.id} className='flex-1 flex-grow hover:scale-95 transition-all'>
        <ProjectCard project={project}></ProjectCard>
      </div>
    ))}
  </div>
   </div>
  )
}

export default Project