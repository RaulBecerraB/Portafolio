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
        title: "Tic Tac Toe",
        description: "The purpose of this project is to demonstrate my skills in JavaScript, HTML, CSS, and creating dynamic and interactive user interfaces (UI).",
        type: "React Frontend",
        link: "https://tictactoespa.netlify.app/",
        githubLink: "https://github.com/RaulBecerraB/Tic-Tac-Toe",
        image: "/TicTacToe.png",
        technologies: ["React", "JavaScript"]
    },
    {
        title: "Cookie Clicker Game",
        description: "The purpose of this project is to demonstrate my skills in JavaScript, HTML, CSS, and creating dynamic and interactive user interfaces (UI).",
        type: "React Frontend",
        link: "https://cookie-clicker-77yc.vercel.app/",
        githubLink: "https://github.com/RaulBecerraB/Cookie-Clicker",
        image: "/CookieClicker.png",
        technologies: ["React", "JavaScript", "TailwindCSS"]
    },
    {
        title: "RESTful API",
        description: "This project is a REST API for managing a product catalog and its categories. The application is built with Java, using Spring Boot and a MySQL database.",
        type: "Java Backend",
        githubLink: "https://github.com/RaulBecerraB/ProductCatalog",
        image: "/ProductCatalog.png",
        technologies: ["Java", "SpringBoot", "MySQL"]
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
                            <Card className="overflow-hidden bg-white border border-primary">
                                <div className="relative h-40">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">	
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </a>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="text-primary">{project.title}</CardTitle>
                                        <div className="flex gap-2">
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                                <Github size={24} />
                                            </a>
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                                    <ArrowUpRight size={24} />
                                                </a>
                                            )}
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

