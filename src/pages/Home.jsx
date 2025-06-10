"use client"

import { useRef } from "react"
import { Hero } from "../components/Hero"
import { SectionTitle } from "../components/SectionTitle"
import { ServiceCard } from "../components/ServiceCard"
import { SectorCard } from "../components/SectorCard"
import { PartnerLogo } from "../components/PartnerLogo"
import { ContactForm } from "../components/ContactForm"
import { AnimatedSection } from "../components/AnimatedSection"
import { StaggeredGrid } from "../components/StaggeredGrid"
import { motion } from "framer-motion"
import video from '../assets/videos/HeroVideo.mp4'

import HID from '../assets/imgs/Partners/HID.png'
import Placard from '../assets/imgs/Partners/Placard.png'
import ZHH from '../assets/imgs/Partners/ZHH.png'
import TicketHotline from '../assets/imgs/Partners/tickethotline.png'
import Trapper from '../assets/imgs/Partners/Trapper.png'
import AMR from '../assets/imgs/Partners/AMR.png'
import Boo from '../assets/imgs/Partners/Boo.png'
import { DifferentCard } from "../components/DifferentCard"

const Home = () => {
  const whatWeDoRef = useRef(null)

  const scrollToWhatWeDo = () => {
    whatWeDoRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* 1. Hero Banner */}
      <section className=" bg-red-900 relative min-h-screen flex items-center overflow-hidden text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />


        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90 z-0"></div>
        <StaggeredGrid
          animation="scale"
          staggerDelay={0.1}
          className="container-custom relative z-10"
        >
          <div >
            <div className="max-w-3xl md:p-5">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Smart Solutions. Seamless Execution.</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">StellarTel is a <b>Malaysian</b> systems integrator delivering turnkey identity, venue, and infrastructure tech across <b>ASEAN</b> and the <b>Gulf Countries</b>.</p>


              <button
                onClick={scrollToWhatWeDo}
                className="bg-lighttext text-darktext font-medium py-3 px-6 rounded-lg hover:bg-lighttext/80 transition-all duration-400 hover:translate-y-0.5 cursor-pointer"
              >
                Explore What We Do
              </button>

            </div>
          </div>
        </StaggeredGrid>
      </section >

      {/* 2. What We Do */}
      < section id="what-we-do" ref={whatWeDoRef} className="section-padding bg-light-bg" >
        <div className="container-custom">
          <SectionTitle title="We integrate real-world tech into operational environments." centered={true} />

          <StaggeredGrid
            className="flex justify-center gap-10 flex-wrap"
            animation="slideUp"
            staggerDelay={0.1}
          >
            <ServiceCard
              id="01"
              color="violet-900"
              icon="mingcute:package-2-fill"
              title="Tech Vendor Packaging & Deployment"
              description="We help technology vendors package and deploy their solutions effectively in diverse operational environments."
            />
            <ServiceCard
              id="02"
              color="emerald-500"
              icon="fluent:city-16-filled"
              title="Venue, Infrastructure & City Integration"
              description="We integrate smart technologies into venues, infrastructure, and urban environments for enhanced functionality."
            />
            <ServiceCard
              id="03"
              color="blue-500"
              icon="carbon:wifi-secure"
              title="Identity, Access & Secure Credentialing"
              description="We implement secure identity and access control systems for organizations requiring high security standards."
            />
            <ServiceCard
              id="04"
              color="red-800"
              icon="hugeicons:solar-system"
              title="Digital Engagement Systems"
              description="We deploy ticketing, retail, and loyalty systems that enhance customer engagement and experience."
            />
            <ServiceCard
              id="05"
              color="yellow-500"
              icon="nimbus:marketing"
              title="Commercial Structuring & Market Entry Advisory"
              description="We provide advisory services for businesses looking to structure commercial operations or enter new markets."
            />
          </StaggeredGrid>
        </div>
      </ section>

      {/* 3. Our Sectors */}
      <section section id="our-sectors" className="section-padding" >
        <div className="container-custom">
          <SectionTitle title="Our Sectors" centered={true} />

          <StaggeredGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            animation="scale"
            staggerDelay={0.1}
          >
            <SectorCard
              icon="material-symbols:stadium"
              color="orange-500"
              title="Smart Venues (stadiums, convention centres)"
              title2="Smart Venues" />
            <SectorCard
              color="violet-900"
              title2="Identity Systems"
              icon="fluent:building-government-32-filled"
              title="Government Identity Systems" />
            <SectorCard
              color="emerald-500"
              title2="Retail & Mixed-Use"
              icon="fluent:building-retail-20-filled"
              title="Retail & Mixed-Use Developments" />
            <SectorCard
              color="blue-500"
              title2="Sports"
              icon="fluent-mdl2:more-sports"
              title="Sports & Entertainment" />
            <SectorCard
              color="red-800"
              title2="Infrastructure"
              icon="solar:city-bold"
              title="Infrastructure & Utilities" />
            <SectorCard
              color="yellow-500"
              title2="IoT Solutions"
              icon="eos-icons:iot"
              title="Environmental & IoT Solutions" />
          </StaggeredGrid>
        </div>
      </section >

      {/* 4. Our Partners */}
      < section id="our-partners" className="section-padding bg-lighttext" >
        <div className="">
          <SectionTitle title="Our Partners" centered={true} />

          {/* <StaggeredGrid
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            animation="fadeIn"
            staggerDelay={0.05}
          >
            <PartnerLogo name="HID Global" description="Identity and access management solutions" />
            <PartnerLogo name="HID Placard" description="Secure credential solutions" />
            <PartnerLogo name="ZHH Global Engineering" description="Engineering and infrastructure solutions" />
            <PartnerLogo name="TicketHotline" description="Ticketing and event management" />
            <PartnerLogo name="Rantau" description="Regional technology solutions" />
            <PartnerLogo name="Trapper Group" description="Integrated technology services" />
            <PartnerLogo name="AMR Environmental" description="Environmental monitoring solutions" />
            <PartnerLogo name="Boo Furniture" description="Venue and facility furnishing" />
          </StaggeredGrid> */}
          <StaggeredGrid
            animation="scale"
            staggerDelay={0.05}
          >
            <div className="flex md:flex-row flex-col justify-between p-5 w-[80%] m-auto gap-5">
              <div className="text-center md:text-end flex flex-col items-end gap-3">
                <StaggeredGrid
                  animation="slideIn"
                  staggerDelay={0.3}
                >
                  <h1>We Work With the Best</h1>
                </StaggeredGrid>
                <p className="md:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis nam reprehenderit ratione quia quis iure dolorem animi maiores est.</p>
              </div>
              <div className="">
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
            </div>
          </StaggeredGrid>
        </div>
      </ section>

      {/* 5. Why StellarTel */}
      < section id="why-stellartel" className="section-padding" >
        <div className="container-custom">
          <SectionTitle title="What Makes Us Different" centered={true} />

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" animation="slideUp" staggerDelay={0.1}>
            <DifferentCard
              color="emerald-500"
              icon="mingcute:easy-in-out-fill"
              title="We simplify execution"
              description="Our streamlined approach cuts through complexity to deliver clear, actionable solutions."
            />
            <DifferentCard
              color="red-800"
              icon="material-symbols:model-training"
              title="We unlock commercial models"
              description=" We help structure commercial relationships that create sustainable value for all stakeholders."
            />
            <DifferentCard
              color="yellow-500"
              icon="simple-icons:trustpilot"
              title="We build trust across stakeholders"
              description="Our transparent approach and proven track record foster trust with clients and partners."
            />
            <DifferentCard
              color="violet-900"
              icon="solar:delivery-bold"
              title="We deliver in-market, on the ground"
              description="Our local presence ensures hands-on delivery and real-world implementation."
            />

          </StaggeredGrid>

          <AnimatedSection animation="scale" delay={0.3}>
            <div className="text-center">
              <motion.p
                className="text-2xl font-bold text-primary italic"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                "We're the team that gets it done."
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </ section>

      {/* 6. Contact / Let's Talk */}
      <section section id="contact" className="section-padding bg-light-bg" >
        <div className="container-custom">
          <SectionTitle title="Let's Talk" centered={true} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <AnimatedSection animation="slideIn" delay={0.2}>
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
                    <motion.a
                      href="mailto:andrewpenders@stellartel.com.my"
                      className="text-primary hover:underline"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      andrewpenders@stellartel.com.my
                    </motion.a>
                  </div>

                  <div>
                    <motion.a
                      href="https://www.stellartel.com.my"
                      className="text-accent hover:underline cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      www.stellartel.com.my
                    </motion.a>
                  </div>
                </address>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section >
    </>
  )
}

export default Home
