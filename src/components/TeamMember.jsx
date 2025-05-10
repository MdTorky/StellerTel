export const TeamMember = ({ name, role, bio, imageUrl }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-light-bg">
                {imageUrl ? (
                    <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <span className="text-primary/40">No Image</span>
                    </div>
                )}
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-primary font-medium mb-3">{role}</p>
            <p className="text-darktext/80">{bio}</p>
        </div>
    )
}
