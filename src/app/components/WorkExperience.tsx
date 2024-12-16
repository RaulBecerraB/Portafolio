import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card"
import { CodepenIcon, Server, Database, FileCode2, BrainCircuit } from 'lucide-react'
import FadeIn from './FadeIn'

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
        title: "Senior Full Stack Developer",
        company: "Tech Innovators Inc.",
        period: "January 2021 - Present",
        description: "Leading the development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved performance of existing applications.",
        logo: "/placeholder.svg?height=100&width=100",
        technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
        title: "Front-end Developer",
        company: "Creative Web Solutions",
        period: "March 2019 - December 2020",
        description: "Developed responsive and accessible user interfaces using React and Vue.js. Collaborated on implementing a new microservices architecture.",
        logo: "/placeholder.svg?height=100&width=100",
        technologies: ["React", "Vue.js", "CSS3", "Webpack"]
    },
    {
        title: "Junior Developer",
        company: "StartUp Dynamics",
        period: "June 2018 - February 2019",
        description: "Participated in the development of a mobile application using React Native. Learned about agile methodologies and software development best practices.",
        logo: "/placeholder.svg?height=100&width=100",
        technologies: ["React Native", "JavaScript", "Git"]
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
                            <Card className="border border-primary bg-tertiary bg-white">
                                <div className="flex">
                                    <div className="flex-grow">
                                        <CardHeader>
                                            <CardTitle className="text-primary">{exp.title}</CardTitle>
                                            <CardDescription className="text-secondary">{exp.company} | {exp.period}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-primary mb-4">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => {
                                                    const Icon = getTechIcon(tech);
                                                    return (
                                                        <span key={i} className="bg-secondary text-primary px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                                            <Icon size={12} />
                                                            {tech}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </CardContent>
                                    </div>
                                    <div className="flex items-center justify-center p-4">
                                        <Image src={exp.logo} alt={`${exp.company} logo`} width={100} height={100} className="rounded-full" />
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

