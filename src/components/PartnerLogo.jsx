import { motion } from "framer-motion"
export const PartnerLogo = ({ name, description }) => {
    return (
        <motion.div
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <h3 className="text-lg font-bold">{name}</h3>
            {description && (
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-dark-text/80">{description}</p>
                </div>
            )}
        </motion.div>
    )
}



// export const PartnerLogo = ({ name, description }) => {
//   return (
//     <motion.div
//       className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
//       whileHover={{ y: -5, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       <h3 className="text-lg font-bold">{name}</h3>
//       {description && (
//         <motion.div
//           className="mt-2"
//           initial={{ opacity: 0, height: 0 }}
//           whileHover={{ opacity: 1, height: "auto" }}
//           transition={{ duration: 0.3 }}
//         >
//           <p className="text-sm text-dark-text/80">{description}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   )
// }
