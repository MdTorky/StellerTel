import { Link } from "react-router-dom"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white py-8">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <p className="mb-2">StellarTel Sdn. Bhd. (1019756-H)</p>
                        <p>
                            <a href="mailto:andrewpenders@stellartel.com.my" className="hover:underline">
                                andrewpenders@stellartel.com.my
                            </a>
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <Link to="/terms-privacy" className="hover:underline text-sm">
                            Terms & Privacy
                        </Link>
                        <p className="mt-2 text-sm">&copy; {currentYear} StellarTel</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
