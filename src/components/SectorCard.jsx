import { Icon } from "@iconify/react";



export const SectorCard = ({ icon, title }) => {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center group flex justify-center items-center">
            <div className="text-white mb-4 text-3xl absolute -top-5 left-0 rounded-full p-2 bg-accent group-hover:bg-signal duration-500"><Icon icon={icon} /></div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
    )
}
