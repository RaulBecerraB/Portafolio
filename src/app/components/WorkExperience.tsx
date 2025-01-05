import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card"
import { CodepenIcon, Server, Database, FileCode2, BrainCircuit, ArrowUpRight, Github } from 'lucide-react'
import FadeIn from './FadeIn'
import { link } from 'fs'

const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
        case 'react':
        case 'react native':
            return CodepenIcon;
        case 'node.js':
            return Server;
        case 'mongodb':
        case 'postgresql':
            return Database;
        case 'javascript':
        case 'typescript':
            return FileCode2;
        default:
            return BrainCircuit;
    }
}

const experiences = [
    {
        title: "Junior Frontend Developer",
        company: "AAAIMX",
        contract: "Freelance",
        period: "August 2024 - Present",
        description: "Frontend for the inventory and loan management platform developed for the Robotics Division of the AAAIMX organization. This application enables efficient management of resources and equipment, facilitating control and streamlining the loan process.",
        logo: "AAAIMX-logo.svg",
        technologies: ["React", "Node.js", "Next.js","TypeScript"],
        link: "https://aaaimx.com/",
        repository: "https://github.com/RaulBecerraB/TechShare-FrontEnd"
    }
]

export default function WorkExperience() {
    return (
        <FadeIn>
            <section id="experience" className="py-20 px-4 bg-secondary">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary ">Work Experience</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {experiences.map((exp, index) => (
                        <FadeIn key={index} delay={index * 200}>
                            <Card className="border border-primary bg-tertiary bg-white relative">
                                <div className="flex">
                                    <div className="flex-grow">
                                        <CardHeader>
                                            <div className="flex flex-row items-center gap-4">
                                                <Image
                                                    src={exp.logo}
                                                    alt={`logo`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-lg border-primary border"
                                                />
                                                <div className='flex flex-col gap-1'>
                                                    <CardTitle className="text-primary">{exp.title}</CardTitle>
                                                    <CardDescription className="text-secondary font-semibold">
                                                        {exp.company} | {exp.contract}
                                                    </CardDescription>
                                                    <CardDescription className="text-secondary">{exp.period}</CardDescription>
                                                </div>
                                                <div className="ml-auto mb-auto flex gap-4">
                                                    <a href={exp.repository} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                                        <Github size={24} />
                                                    </a>
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:text-secondary transition-colors"
                                                    >
                                                        <ArrowUpRight size={24} />
                                                    </a>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-primary mb-4">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => {
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
                                    </div>
                                </div>
                            </Card>

                        </FadeIn>
                    ))}
                </div>
            </section>
        </FadeIn>
    )
}

