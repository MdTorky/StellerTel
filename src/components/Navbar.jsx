import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import logo from '../assets/imgs/STLogo.png'
import { Icon } from "@iconify/react";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    const sections = ["what-we-do", "our-sectors", "our-partners", "why-stellartel", "contact"]


    const location = useLocation()

    // Handle scroll event to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }


            let currentSection = ""
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId)
                if (section) {
                    const { top } = section.getBoundingClientRect()
                    if (top <= 80 && top >= -section.offsetHeight + 80) {
                        currentSection = sectionId
                    }
                }
            })
            setActiveSection(currentSection)

        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false)

        if (location.pathname !== "/") {
            // If not on homepage, navigate to homepage first
            window.location.href = `/#${sectionId}`
            return
        }

        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    const renderNavItem = (label, sectionId, index) => (
        <motion.button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`font-medium cursor-pointer text-darktext hover:text-accent ${activeSection === sectionId ? "text-accent" : ""}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 * (index + 1), type: "spring", stiffness: 300 } }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            {label}
            <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
            />
        </motion.button>
    )

    return (
        <motion.header
            className={`sticky py-4 top-0 z-50 bg-white/70  rounded-b-xl w-full  md:w-300 m-auto flex ${isScrolled ? "  shadow-2xl" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container-custom w-full">
                <div className="flex items-center justify-between">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300 }}>
                        <Link to="/" className="text-2xl font-bold text-primary">
                            <img src={logo} alt="" className="w-30" />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {renderNavItem("What We Do", "what-we-do", 1)}
                        {renderNavItem("Our Sectors", "our-sectors", 2)}
                        {renderNavItem("Our Partners", "our-partners", 3)}
                        {renderNavItem("Why StellarTel", "why-stellartel", 4)}
                        {renderNavItem("Contact", "contact", 5)}
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-darktext text-3xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <Icon icon="line-md:menu-to-close-transition" /> : <Icon icon="duo-icons:menu" />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className="md:hidden py-4 flex flex-col space-y-4"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderNavItem("What We Do", "what-we-do", 1)}
                            {renderNavItem("Our Sectors", "our-sectors", 2)}
                            {renderNavItem("Our Partners", "our-partners", 3)}
                            {renderNavItem("Why StellarTel", "why-stellartel", 4)}
                            {renderNavItem("Contact", "contact", 5)}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
