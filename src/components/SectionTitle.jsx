// export const SectionTitle = ({ title, subtitle, centered = false }) => {
//     return (
//         <div className={`mb-12 ${centered ? "text-center" : ""}`}>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
//             {subtitle && <p className="text-lg md:text-xl text-darktext/80">{subtitle}</p>}
//         </div>
//     )
// }

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const SectionTitle = ({ title, subtitle, centered = false }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.div
            ref={ref}
            className={`mb-12 ${centered ? "text-center" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    className="text-lg md:text-xl text-dark-text/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    )
}
