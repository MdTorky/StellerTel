import { Hero } from "../components/Hero"
import { SectionTitle } from "../components/SectionTitle"

const Solutions = () => {
    return (
        <>
            <Hero
                title="Our Solutions"
                subtitle="Secure, scalable, on-ground technology solutions for organizations that need systems that work."
            />

            <section className="section-padding">
                <div className="container-custom">
                    <SectionTitle title="What We Deliver" />

                    <div className="max-w-3xl mb-12">
                        <p className="text-lg mb-4">We support organisations that need secure, scalable, on-ground tech.</p>
                        <p className="text-lg">
                            Our work covers identity systems, infrastructure integration, managed support, and sports/event
                            operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Secure ID & Credentialing</h2>
                            <p className="text-lg mb-6">We provide end-to-end support for national or enterprise-level ID systems.</p>

                            <h3 className="text-lg font-bold mb-3">This includes:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li>Data capture and validation</li>
                                <li>Biometric systems integration</li>
                                <li>Card design, production, and issuance</li>
                                <li>Access control setup</li>
                                <li>Project management and support</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Systems Integration</h2>
                            <p className="text-lg mb-6">
                                We bring together hardware, software, logistics, and real-world constraints to deliver systems that
                                work.
                            </p>

                            <h3 className="text-lg font-bold mb-3">This includes:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li>Procurement and configuration</li>
                                <li>Third-party system coordination</li>
                                <li>On-site testing and commissioning</li>
                                <li>Project oversight and delivery reporting</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Sports & Event Technology</h2>
                            <p className="text-lg mb-6">
                                We support federations, rights holders, and event operators with technology that keeps events secure and
                                flowing.
                            </p>

                            <h3 className="text-lg font-bold mb-3">This includes:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li>Accreditation and credentialing systems</li>
                                <li>Staff and athlete onboarding platforms</li>
                                <li>Equipment and zone access tracking</li>
                                <li>On-site deployment and troubleshooting</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Managed Services</h2>
                            <p className="text-lg mb-6">For clients who require long-term technical support and field execution.</p>

                            <h3 className="text-lg font-bold mb-3">This includes:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li>Technical ops staff and engineering teams</li>
                                <li>Maintenance and lifecycle planning</li>
                                <li>Embedded site presence</li>
                                <li>Remote or hybrid support models</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light-bg">
                <div className="container-custom">
                    <SectionTitle title="How We Work" />

                    <div className="max-w-3xl">
                        <p className="text-lg mb-4">
                            Every project is scoped, staffed, and led by senior team members with direct accountability.
                        </p>
                        <p className="text-lg">
                            We operate with minimal overhead, clear deliverables, and a focus on what actually works.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solutions
