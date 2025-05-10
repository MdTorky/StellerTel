import { Link } from "react-router-dom"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white py-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">StellarTel</h3>
                        <p className="mb-4">StellarTel Sdn. Bhd. (1019756-H)</p>
                        <address className="not-italic">
                            D-05-03 Menara Mitraland,
                            <br />
                            13A Jalan PJU 5/1, Kota Damansara,
                            <br />
                            47810 Petaling Jaya, Selangor, Malaysia
                        </address>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <div className="mb-4">
                            <p className="mb-1">
                                <a href="mailto:info@stellartel.com.my" className="hover:underline">
                                    info@stellartel.com.my
                                </a>
                            </p>
                            <p>
                                <a href="https://www.stellartel.com.my" className="hover:underline">
                                    www.stellartel.com.my
                                </a>
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                            <Link to="/about" className="hover:underline">
                                About
                            </Link>
                            <Link to="/solutions" className="hover:underline">
                                Solutions
                            </Link>
                            <Link to="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-sm">
                    <p>&copy; {currentYear} StellarTel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
