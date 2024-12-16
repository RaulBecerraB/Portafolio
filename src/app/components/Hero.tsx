import Image from 'next/image'
import FadeIn from './FadeIn'

export default function Hero() {
    return (
        <FadeIn>
            <section className="py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-8 bg-tertiary">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Full Stack Developer</h1>
                    <p className="text-xl mb-8 text-primary">Creating innovative web solutions from end to end</p>
                    <button>
                        <a href="#projects" className="bg-primary text-tertiary hover:bg-secondary transition-colors">View Projects</a>
                    </button>
                </div>
                <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary">
                    <Image
                        src="/placeholder.svg?height=192&width=192"
                        alt="Your photo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>
        </FadeIn>
    )
}

