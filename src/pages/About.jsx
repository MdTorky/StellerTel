import { Hero } from "../components/Hero"
import { SectionTitle } from "../components/SectionTitle"
import { TeamMember } from "../components/TeamMember"

const About = () => {
    return (
        <>
            <Hero
                title="About StellarTel"
                subtitle="We deliver infrastructure that works in the real world — not just on paper."
            />

            <section className="section-padding">
                <div className="container-custom">
                    <SectionTitle title="Who We Are" />

                    <div className="max-w-3xl">
                        <p className="text-lg mb-4">
                            StellarTel is a Malaysian systems integrator focused on secure identity, infrastructure tech, and managed
                            operations.
                        </p>
                        <p className="text-lg mb-4">
                            We work with governments, event organisers, and enterprise clients to deliver systems that need to perform
                            in the real world — not just on paper.
                        </p>
                        <p className="text-lg font-medium">We don't pitch theories. We deliver infrastructure.</p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light-bg">
                <div className="container-custom">
                    <SectionTitle title="What We Do" />

                    <div className="max-w-3xl">
                        <p className="text-lg mb-4">
                            We support clients from first spec to full deployment — integrating the right tech, teams, and logistics
                            to get the job done.
                        </p>
                        <p className="text-lg">
                            From secure ID systems to national-scale tech deployments, we stay focused on delivery, security, and
                            scale.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <SectionTitle title="Our Leadership" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TeamMember
                            name="Andrew Penders"
                            role="Commercial Director"
                            bio="Andrew has worked across broadcast, tech, and live events in Southeast Asia for over 20 years. He leads StellarTel's commercial strategy, client engagement, and delivery assurance across Malaysia and the region."
                        />

                        <TeamMember
                            name="Dato' Zaril Ayu Ibrahim"
                            role="Founder"
                            bio="With a background in business management and CRM systems, Zaril also leads companies in digital marketing, mobile communications, and cybersecurity. He brings deep experience in managing multi-sector tech businesses at scale."
                        />

                        <TeamMember
                            name="Dato' Azril Mat Drus"
                            role="Founder"
                            bio="Azril's background spans marketing, sociology, and strategic digital technology. He holds directorships in firms focused on mobile engagement, building information modelling, and platform technologies."
                        />
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light-bg">
                <div className="container-custom">
                    <SectionTitle title="How We Work" />

                    <div className="max-w-3xl">
                        <p className="text-lg mb-4">
                            We work lean, with short chains of command, and experienced people leading every project.
                        </p>
                        <p className="text-lg">We're selective about what we take on — and we finish what we start.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
