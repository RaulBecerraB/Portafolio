import FadeIn from '@/app/components/FadeIn'

export default function About() {
    return (
        <FadeIn>
            <section id="about" className="py-20 px-4 bg-tertiary">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
                    <p className="text-lg text-primary">
                        I am a passionate full stack developer dedicated to creating robust and efficient web applications.
                        With experience in both frontend and backend development, I enjoy tackling technical challenges
                        and delivering high-quality solutions.
                    </p>
                </div>
            </section>
        </FadeIn>
    )
}

