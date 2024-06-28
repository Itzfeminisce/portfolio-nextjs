import Image from "next/image"
import React, { PropsWithChildren } from "react"
import Button from "../Button"

interface ProjectCardProps extends PropsWithChildren {
    project: Project
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project, children}) => {
    const { title, description, image, github, preview, stacks, tags, id} = project
    return (
        <div className="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden w-full cursor-pointer">
            <div className='w-full h-52 overflow-hidden'>
                <Image src={image} alt={title} width={500} height={500} objectFit='cover' />
            </div>
            <div className="p-6 project-card-bg">
                <h2 className="text-xl line-clamp-1 font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>

                {tags && tags.length > 0 && (
                    <div className="flex mt-4 flex-wrap gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="bg-gray-200 text-gray-600 px-2 rounded-md text-sm mr-2 font-semibold">{tag}</span>
                        ))}
                    </div>
                )}
                
                {stacks && stacks.length > 0 && (
                    <div className="flex mt-4">
                        {stacks.map(stack => (
                            <div key={stack.name} className="flex mr-4 flex-wrap items-center justify-center">
                                <Image src={stack.iconUrl} alt={stack.name} width={20} height={20} />
                                <span className="text-sm text-gray-600 ml-2 hidden md:flex">{stack.name}</span>
                            </div>
                        ))}
                    </div>
                )}
                
                <div className="flex mt-4">
                   
                    <Button gradient="bg-gradient" href={github} target="_blank" rel="noopener noreferrer">Preview</Button>
                    <Button gradient="" classNames={{btnInner: 'bg-transparent text-black'}} href={github} target="_blank" rel="noopener noreferrer">GitHub</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard