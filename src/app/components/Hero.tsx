import Image from 'next/image'
import FadeIn from './FadeIn'
import { Button } from '@/app/components/ui/button'

export default function Hero() {
    return (
        <FadeIn>
            <section className="py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-8 bg-tertiary">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Full Stack Developer</h1>
                    <p className="text-xl mb-8 text-primary">Creating innovative web solutions from end to end</p>
                    <Button asChild>
                        <a href="#projects" className="bg-primary text-tertiary hover:bg-secondary transition-colors">View Projects</a>
                    </Button>
                </div>
                <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary">
                    <Image
                        src="/profile-picture.jpg"
                        alt="Your photo"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out scale-110"
                    />
                </div>
            </section>
        </FadeIn>
    )
}

