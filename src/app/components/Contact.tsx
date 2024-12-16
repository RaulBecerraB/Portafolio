import FadeIn from '@/app/components/FadeIn'

export default function Contact() {
    return (
        <FadeIn>
            <section id="contact" className="py-20 px-4 text-center bg-tertiary">
                <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Collaborate?</h2>
                <p className="mb-8 text-primary">I'm always open to new opportunities and interesting projects.</p>
                <button className="bg-primary text-tertiary hover:bg-secondary transition-colors">
                    <a href="mailto:your@email.com">Contact Me</a>
                </button>
            </section>
        </FadeIn>
    )
}

