import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card"
import { ArrowUpRight, CodepenIcon, Server, Database, FileCode2, BrainCircuit, Github } from 'lucide-react'
import FadeIn from './FadeIn'

const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
        case 'react':
        case 'd3.js':
            return CodepenIcon;
        case 'node.js':
        case 'express':
            return Server;
        case 'mongodb':
            return Database;
        case 'javascript':
        case 'typescript':
            return FileCode2;
        default:
            return BrainCircuit;
    }
}

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform built with React and Node.js",
        type: "Fullstack",
        link: "https://example.com/ecommerce",
        githubLink: "https://github.com/yourusername/ecommerce",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
        title: "Interactive Dashboard",
        description: "A data analysis dashboard with dynamic charts using D3.js",
        type: "Frontend",
        link: "https://example.com/dashboard",
        githubLink: "https://github.com/yourusername/dashboard",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["React", "D3.js", "CSS3", "REST API"]
    },
    {
        title: "RESTful API",
        description: "A robust API built with Express.js and MongoDB",
        type: "Backend",
        link: "https://example.com/api",
        githubLink: "https://github.com/yourusername/api",
        image: "/placeholder.svg?height=200&width=300",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"]
    }
]

export default function Projects() {
    return (
        <FadeIn>
            <section id="projects" className="py-20 px-4 bg-secondary">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 200}>
                            <Card className="overflow-hidden bg-tertiary border border-primary">
                                <div className="relative h-40">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="text-primary">{project.title}</CardTitle>
                                        <div className="flex gap-2">
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                                <Github size={24} />
                                            </a>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                                <ArrowUpRight size={24} />
                                            </a>
                                        </div>
                                    </div>
                                    <CardDescription className="text-secondary">{project.type}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-primary mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => {
                                            const Icon = getTechIcon(tech);
                                            return (
                                                <span key={i} className="bg-secondary text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                                    <Icon size={12} />
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </FadeIn>
    )
}

