import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        StellarTel
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`duration-300 font-medium ${isActive("/") ? "text-accent" : "text-darktext hover:text-accent"}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`duration-300 font-medium ${isActive("/about") ? "text-accent" : "text-darktext hover:text-accent"}`}
                        >
                            About
                        </Link>
                        <Link
                            to="/solutions"
                            className={`duration-300 font-medium ${isActive("/solutions") ? "text-accent" : "text-darktext hover:text-accent"}`}
                        >
                            Solutions
                        </Link>
                        <Link
                            to="/contact"
                            className={`duration-300 font-medium ${isActive("/contact") ? "text-accent" : "text-darktext hover:text-accent"}`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-darktext" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "Close" : "Menu"}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 flex flex-col space-y-4">
                        <Link
                            to="/"
                            className={`font-medium ${isActive("/") ? "text-primary" : "text-darktext"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`font-medium ${isActive("/about") ? "text-primary" : "text-darktext"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/solutions"
                            className={`font-medium ${isActive("/solutions") ? "text-primary" : "text-darktext"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Solutions
                        </Link>
                        <Link
                            to="/contact"
                            className={`font-medium ${isActive("/contact") ? "text-primary" : "text-darktext"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    )
}
