import { CodepenIcon as Javascript, FileType2, CodepenIcon as React, Server, Database, GitGraphIcon as GraphQl, DockIcon as Docker, Cloud, Github } from 'lucide-react'
import FadeIn from './FadeIn'

const skills = [
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: FileType2 },
    { name: "React", icon: React },
    { name: "Next.js", icon: React },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "GraphQL", icon: GraphQl },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: Cloud },
    { name: "Git", icon: Github }
]

export default function Skills() {
    return (
        <FadeIn>
            <section id="skills" className="py-20 px-4 bg-tertiary">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Technical Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                {skill.icon && <skill.icon size={16} />}
                                {skill.name}
                            </span>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </FadeIn>
    )
}

