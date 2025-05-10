import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from '../assets/imgs/STLogo.png'
import { Icon } from "@iconify/react";



export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const location = useLocation()

    const sections = ["what-we-do", "our-sectors", "our-partners", "why-stellartel", "contact"]

    // Handle scroll event to change navbar style and detect active section
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            // Find current active section
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
            window.location.href = `/#${sectionId}`
            return
        }

        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    const renderNavItem = (label, sectionId) => (
        <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`font-medium cursor-pointer text-darktext hover:text-accent duration-300 ${activeSection === sectionId ? "text-accent" : ""}`}
        >
            {label}
        </button>
    )

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        <img src={logo} alt="" className="w-30" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {renderNavItem("What We Do", "what-we-do")}
                        {renderNavItem("Our Sectors", "our-sectors")}
                        {renderNavItem("Our Partners", "our-partners")}
                        {renderNavItem("Why StellarTel", "why-stellartel")}
                        {renderNavItem("Contact", "contact")}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-darktext text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <Icon icon="line-md:menu-to-close-transition" /> : <Icon icon="duo-icons:menu" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 flex flex-col space-y-4">
                        {renderNavItem("What We Do", "what-we-do")}
                        {renderNavItem("Our Sectors", "our-sectors")}
                        {renderNavItem("Our Partners", "our-partners")}
                        {renderNavItem("Why StellarTel", "why-stellartel")}
                        {renderNavItem("Contact", "contact")}
                    </nav>
                )}
            </div>
        </header>
    )
}
