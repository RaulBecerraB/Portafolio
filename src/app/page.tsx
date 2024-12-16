import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Projects from '@/app/components/Projects'
import Skills from '@/app/components/Skills'
import WorkExperience from '@/app/components/WorkExperience'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-tertiary scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Contact />
    </main>
  )
}

