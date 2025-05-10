import { Hero } from "../components/Hero"
import { SectionTitle } from "../components/SectionTitle"
import { ContactForm } from "../components/ContactForm"

const Contact = () => {
    return (
        <>
            <Hero title="Contact Us" subtitle="Let's talk about your project and how we can help." />

            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto mb-12">
                        <p className="text-lg mb-4">
                            If you're planning a credentialing programme, preparing for a major event, or need long-term technical
                            support, we're ready to assist.
                        </p>
                        <p className="text-lg">
                            Use the form below or reach out directly. We respond quickly and keep things straightforward.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <SectionTitle title="Send Us a Message" />
                            <ContactForm />
                        </div>

                        <div>
                            <SectionTitle title="Direct Contact" />

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <address className="not-italic">
                                    <p className="font-bold mb-4">StellarTel Sdn. Bhd. (1019756-H)</p>
                                    <p className="mb-4">
                                        D-05-03 Menara Mitraland
                                        <br />
                                        13A Jalan PJU 5/1
                                        <br />
                                        Kota Damansara
                                        <br />
                                        47810 Petaling Jaya
                                        <br />
                                        Selangor, Malaysia
                                    </p>

                                    <div className="mb-2">
                                        <a href="mailto:andrewpenders@stellartel.com.my" className="text-primary hover:underline">
                                            andrewpenders@stellartel.com.my
                                        </a>
                                    </div>

                                    <div className="mb-2">
                                        <a
                                            href="https://www.stellartel.com.my"
                                            className="text-primary hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            www.stellartel.com.my
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="https://wa.me/6594752521"
                                            className="text-primary hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp: +6594752521
                                        </a>
                                    </div>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
