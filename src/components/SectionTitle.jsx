export const SectionTitle = ({ title, subtitle, centered = false }) => {
    return (
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg md:text-xl text-darktext/80">{subtitle}</p>}
        </div>
    )
}
