interface Project {
    id: number
    title: string
    description: string
    image: string
    github: string
    preview: string
    stacks: {name: string, iconUrl: string}[]
    tags: string[]

}