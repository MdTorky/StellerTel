import { useRef } from "react"
import { Hero } from "../components/Hero"
import { SectionTitle } from "../components/SectionTitle"
import { ServiceCard } from "../components/ServiceCard"
import { SectorCard } from "../components/SectorCard"
import { PartnerLogo } from "../components/PartnerLogo"
import { ContactForm } from "../components/ContactForm"
import video from '../assets/videos/HeroVideo.mp4'

import HID from '../assets/imgs/Partners/HID.png'
import Placard from '../assets/imgs/Partners/Placard.png'
import ZHH from '../assets/imgs/Partners/ZHH.png'
import TicketHotline from '../assets/imgs/Partners/tickethotline.png'
import Trapper from '../assets/imgs/Partners/Trapper.png'
import AMR from '../assets/imgs/Partners/AMR.png'
import Boo from '../assets/imgs/Partners/Boo.png'

import { Icon } from "@iconify/react";

const Home = () => {
  const whatWeDoRef = useRef(null)

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const BulletItem = ({ icon, title, subtitle }) => {
    return (
      <div className="flex items-start space-x-4">
        <div className="text-accent text-4xl">
          <Icon icon={icon} />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-darktext text-justify">{subtitle}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90 z-0"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Smart Solutions. Seamless Execution.</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">StellarTel is a <b>Malaysian</b> systems integrator delivering turnkey identity, venue, and infrastructure tech across <b>ASEAN</b> and the <b>Gulf</b>.</p>


            <button
              onClick={scrollToWhatWeDo}
              className="bg-lighttext text-darktext font-medium py-3 px-6 rounded-lg hover:bg-lighttext/80 transition-all duration-400 hover:translate-y-0.5 cursor-pointer"
            >
              Explore What We Do
            </button>

          </div>
        </div>
      </section>

      {/* 2. What We Do */}
      <section id="what-we-do" className="section-padding bg-light-bg">
        <div className="container-custom">
          <SectionTitle
            title="We integrate real-world tech into operational environments."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <BulletItem
              icon="mingcute:package-2-fill"
              title="Tech Vendor Packaging & Deployment"
              subtitle="We help technology vendors package and deploy their solutions effectively in diverse operational environments." />

            <BulletItem
              icon="fluent:city-16-filled"
              title="Venue, Infrastructure & City Integration"
              subtitle=" We integrate smart technologies into venues, infrastructure, and urban environments for enhanced functionality." />

            <BulletItem
              icon="carbon:wifi-secure"
              title="Identity, Access & Secure Credentialing"
              subtitle="We implement secure identity and access control systems for organizations requiring high security standards." />


            <BulletItem
              icon="hugeicons:solar-system"
              title="Digital Engagement Systems"
              subtitle=" We deploy ticketing, retail, and loyalty systems that enhance customer engagement and experience." />


            <BulletItem
              icon="nimbus:marketing"
              title="Commercial Structuring & Market Entry Advisory"
              subtitle="  We provide advisory services for businesses looking to structure commercial operations or enter new markets." />

          </div>
        </div>
      </section>


      {/* 3. Our Sectors */}
      <section id="our-sectors" className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Our Sectors" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectorCard
              icon="material-symbols:stadium"
              title="Smart Venues (stadiums, convention centres)" />
            <SectorCard
              icon="fluent:building-government-32-filled"
              title="Government Identity Systems" />
            <SectorCard
              icon="fluent:building-retail-20-filled"
              title="Retail & Mixed-Use Developments" />
            <SectorCard
              icon="fluent-mdl2:more-sports"
              title="Sports & Entertainment" />
            <SectorCard
              icon="solar:city-bold"
              title="Infrastructure & Utilities" />
            <SectorCard
              icon="eos-icons:iot"
              title="Environmental & IoT Solutions" />
          </div>
        </div>
      </section>

      {/* 4. Our Partners */}

      <section id="our-partners" className="py-10 bg-gray-200">
        <div className="container-custom">
          <SectionTitle title="Our Partners" centered={true} />
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Logo Item */}
            <img src={HID} alt="Logo 1" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
            <img src={Placard} alt="Logo 2" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
            <img src={ZHH} alt="Logo 3" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
            <img src={TicketHotline} alt="Logo 4" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
            <img src={Trapper} alt="Logo 5" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
            <img src={AMR} alt="Logo 6" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
            <img src={Boo} alt="Logo 7" className="h-15 duration-300 object-contain grayscale hover:grayscale-0 transition" />
          </div>
        </div>
      </section>

      {/* 5. Why StellarTel */}
      <section id="why-stellartel" className="section-padding ">
        <div className="container-custom">
          <SectionTitle title="What Makes Us Different" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-auto max-w-4xl">
            <BulletItem
              icon="mingcute:easy-in-out-fill"
              title="We simplify execution"
            />
            <BulletItem
              icon="material-symbols:model-training"
              title="We unlock commercial models"
            />
            <BulletItem
              icon="simple-icons:trustpilot"
              title="We build trust across stakeholders"
            />
            <BulletItem
              icon="solar:delivery-bold"
              title="We deliver in-market, on the ground"
            />
          </div>

        </div>
      </section>

      {/* 6. Contact / Let's Talk */}
      <section id="contact" className="section-padding bg-light-bg">
        <div className="container-custom">
          <SectionTitle title="Let's Talk" centered={true} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div>
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

                  <div>
                    <a
                      href="https://www.stellartel.com.my"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.stellartel.com.my
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

export default Home
