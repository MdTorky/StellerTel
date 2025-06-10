
// export const ServiceCard = ({ title, description, icon }) => {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
//             <div className="text-accent mb-4 text-5xl"><Icon icon={icon} /></div>
//             <h3 className="text-xl font-bold mb-3">{title}</h3>
//             <p className="text-darktext/80">{description}</p>
//         </div>
//     )
// }



import { motion } from "framer-motion"
import { Icon } from "@iconify/react";


export const ServiceCard = ({ title, description, icon, color, id }) => {

    const colorClasses = {
        "violet-900": "text-violet-900",
        "blue-500": "text-blue-500",
        "red-800": "text-red-800",
        "yellow-500": "text-yellow-500",
        "emerald-500": "text-emerald-500",

    };

    const bgClasses = {
        "violet-900": "bg-violet-900",
        "blue-500": "bg-blue-500",
        "red-800": "bg-red-800",
        "yellow-500": "bg-yellow-500",
        "emerald-500": "bg-emerald-500",

    };

    const ringClasses = {
        "violet-900": "ring-violet-900",
        "emerald-500": "ring-emerald-500",
        "blue-500": "ring-blue-500",
        "red-800": "ring-red-800",
        "yellow-500": "ring-yellow-500",

    };

    const shadowClasses = {
        "violet-900": "shadow-[5px_5px_0px_0px_#4c1d95]",
        "emerald-500": "shadow-[5px_5px_0px_0px_#10b981]",
        "blue-500": "shadow-[5px_5px_0px_0px_#3b82f6]",
        "red-800": "shadow-[5px_5px_0px_0px_#991b1b]",
        "yellow-500": "shadow-[5px_5px_0px_0px_#eab308]",
    };
    const shadowClass = shadowClasses[color] || "shadow-[5px_5px_0px_0px_black]";
    const ringClass = ringClasses[color] || "ring-red-900"
    return (


        <motion.div
            whileHover={{ y: -20 }}
            transition={{ type: "spring", stiffness: 300 }}
            // style={{ border: "5px solid" }}
            // className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-2xl"
            // className={`w-94 relative overflow-hidden p-9 rounded-xl bg-white/20 ring-1 ring-black/5`}
            className={`w-94 relative overflow-hidden p-9 rounded-xl bg-white/20  ring-black/5 ${shadowClass} duration-150 hover:ring-5 ${ringClass} hover:scale-105 duration-250 `}

        >

            <div className={`w-24 h-24 bg-${color} rounded-full absolute -right-5 -top-7`}>
                <p className="absolute bottom-6 left-7 text-white text-2xl">{id}</p>
            </div>
            <div className={`text-${color} text-6xl`}>
                <Icon icon={icon} />
            </div>
            <h1 className={`font-bold text-xl text-${color}`}>{title}</h1>
            <p className="text-sm text-zinc-500 leading-6">
                {description}
            </p>
        </motion.div>
    )
}

