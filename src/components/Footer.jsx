// import { Link } from "react-router-dom"

// export const Footer = () => {
//     const currentYear = new Date().getFullYear()

//     return (
//         <footer className="bg-primary text-white py-8">
//             <div className="container-custom">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                     <div>
//                         <p className="mb-2">StellarTel Sdn. Bhd. (1019756-H)</p>
//                         <p>
//                             <a href="mailto:andrewpenders@stellartel.com.my" className="hover:underline">
//                                 andrewpenders@stellartel.com.my
//                             </a>
//                         </p>
//                     </div>

//                     <div className="mt-4 md:mt-0">
//                         <Link to="/terms-privacy" className="hover:underline text-sm">
//                             Terms & Privacy
//                         </Link>
//                         <p className="mt-2 text-sm">&copy; {currentYear} StellarTel</p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }



import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            className="bg-primary text-white py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="mb-2">StellarTel Sdn. Bhd. (1019756-H)</p>
                        <p>
                            <motion.a
                                href="mailto:andrewpenders@stellartel.com.my"
                                className="hover:underline"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                andrewpenders@stellartel.com.my
                            </motion.a>
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-4 md:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                            <Link to="/terms-privacy" className="hover:underline text-sm">
                                Terms & Privacy
                            </Link>
                        </motion.div>
                        <p className="mt-2 text-sm">&copy; {currentYear} StellarTel</p>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}

