import { Icon } from "@iconify/react";
import { motion } from "framer-motion"



export const DifferentCard = ({ icon, title, description, color }) => {


    const colorClasses = {
        "violet-900": "text-violet-900",
        "blue-500": "text-blue-500",
        "red-800": "text-red-800",
        "yellow-500": "text-yellow-500",
        "emerald-500": "text-emerald-500",
        "orange-500": "text-orange-500"

    };

    const bgClasses = {
        "violet-900": "bg-violet-900",
        "blue-500": "bg-blue-500",
        "red-800": "bg-red-800",
        "yellow-500": "bg-yellow-500",
        "emerald-500": "bg-emerald-500",
        "orange-500": "bg-orange-500"


    };


    const ringClasses = {
        "violet-900": "ring-violet-900/50",
        "emerald-500": "ring-emerald-500/50",
        "blue-500": "ring-blue-500/50",
        "red-800": "ring-red-800/50",
        "yellow-500": "ring-yellow-500/50",
        "orange-500": "ring-orange-500/50"


    };
    const ringClass = ringClasses[color] || "ring-red-900"

    const shadowClasses = {
        "violet-900": "shadow-[5px_5px_0px_0px_#4c1d95]/50",
        "emerald-500": "shadow-[5px_5px_0px_0px_#10b981]/50",
        "blue-500": "shadow-[5px_5px_0px_0px_#3b82f6]/50",
        "red-800": "shadow-[5px_5px_0px_0px_#991b1b]/50",
        "yellow-500": "shadow-[5px_5px_0px_0px_#eab308]/50",
        "orange-500": "shadow-[5px_5px_0px_0px_#f97316]/50",
    };
    const shadowClass = shadowClasses[color] || "shadow-[5px_5px_0px_0px_black]";

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative cursor-pointer ">
            <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${color} rounded-lg `}></span>
            <div
                className={`relative p-6 bg-white ring-2 ${ringClass}  rounded-lg hover:scale-105 transition duration-500`}>
                <div className="flex items-center">
                    <span className={`text-xl text-${color}`}><Icon icon={icon} /></span>
                    <h3 className={`my-2 ml-3 text-lg font-bold text-${color}`}>{title}</h3>
                </div>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}
