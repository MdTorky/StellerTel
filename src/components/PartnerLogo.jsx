export const PartnerLogo = ({ name, description }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group">
            <h3 className="text-lg font-bold">{name}</h3>
            {description && (
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-dark-text/80">{description}</p>
                </div>
            )}
        </div>
    )
}
