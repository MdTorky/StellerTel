import { Hero } from "../components/Hero"
import { SectionTitle } from "../components/SectionTitle"
import { ServiceCard } from "../components/ServiceCard"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Secure Identity. Integrated Systems. On-Ground Delivery."
        subtitle="We support government, enterprise, and event operators with real-world technology solutions that work."
        primaryCta="Our Capabilities"
        secondaryCta="Contact Us"
        primaryCtaLink="/solutions"
        secondaryCtaLink="/contact"
      />

      <section className="section-padding bg-lighttext">
        <div className="container-custom">
          <SectionTitle
            title="Clear outcomes. No noise."
            subtitle="StellarTel integrates identity systems, smart technologies, and managed services to meet operational needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Secure ID & Credentialing"
              icon="mdi:security-lock"
              description="Identity systems, licences, and access passes. Built end-to-end."
            />
            <ServiceCard
              title="Systems Integration"
              icon="eos-icons:system-group"
              description="Hardware, software, and logistics. Aligned and deployed."
            />
            <ServiceCard
              title="Sports & Event Technology"
              icon="fluent-mdl2:more-sports"
              description="Accreditation and control systems for federations and large-scale events."
            />
            <ServiceCard title="Managed Services"
              icon="ri:customer-service-2-fill"
              description="Long-term technical support and field operations." />
          </div>

          <div className="mt-10 text-center">
            <Link to="/solutions" className="inline-flex items-center text-primary font-medium hover:underline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Who We Work With" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Government departments and agencies</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Event rights holders</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Tech vendors and distributors</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Clients who require systems that work in the field</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-lighttext">
        <div className="container-custom">
          <SectionTitle title="Why StellarTel" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-bold mb-2">On-ground teams with real delivery experience</h3>
                <p className="text-darktext/80">
                  Our teams have hands-on experience in the field, ensuring solutions that work in real-world
                  conditions.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-bold mb-2">Compact structure, no layers</h3>
                <p className="text-darktext/80">
                  Our lean organization ensures direct communication and faster decision-making.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted with sensitive, operational projects</h3>
                <p className="text-darktext/80">
                  We have a proven track record of handling confidential and mission-critical systems.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-bold mb-2">Focused on execution, not branding</h3>
                <p className="text-darktext/80">We prioritize delivering functional solutions over marketing hype.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a system that works?</h2>
          <p className="text-xl mb-8 text-white/90">
            If you require a trusted partner to build, deliver, or maintain identity or tech infrastructure — get in
            touch.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-primary font-medium py-3 px-8 rounded-lg hover:bg-accent/70 transition-all inline-block duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
