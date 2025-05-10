import { Icon } from "@iconify/react";

export const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="text-accent mb-4 text-5xl"><Icon icon={icon} /></div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-darktext/80">{description}</p>
        </div>
    )
}
