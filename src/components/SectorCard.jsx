import { Icon } from "@iconify/react";
import { motion } from "framer-motion"



export const SectorCard = ({ icon, title, title2, color }) => {


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
            whileHover={{ y: -20 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex-shrink-0 m-6 relative overflow-hidden bg-${color} rounded-lg max-w-xs cursor-pointer z-10 ring-1 ring-black/5 ${shadowClass} duration-250 hover:ring-5 ${ringClass} hover:scale-105 `}>
            <svg
                className="absolute bottom-0 left-0 mb-8"
                viewBox="0 0 375 283"
                fill="none"
                style={{ transform: 'scale(1.5)', opacity: 0.1 }}
            >
                <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                />
                <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                />

            </svg>

            <div className="relative pt-10 px-10 flex items-center justify-center">
                <div
                    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{
                        background: 'radial-gradient(black, transparent 60%)',
                        transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                        opacity: 0.2,
                    }}
                ></div>
                <div className="relative  text-9xl text-white">
                    <Icon icon={icon} />
                </div>

            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{title}</span>
                <div className="flex justify-between">
                    <span className="block font-bold text-xl uppercase">{title2}</span>
                    <span className={`bg-white rounded-full text-${color} text-xs font-bold px-3 py-2 leading-none flex items-center`}>
                        <Icon icon={icon} />
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
