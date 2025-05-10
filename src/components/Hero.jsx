import video from '../assets/videos/HeroVideo.mp4'

export const Hero = ({ title, subtitle, ctaText, ctaAction }) => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden text-white">
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={video} // <- your video file
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90 z-0"></div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>

                    {ctaText && (
                        <button
                            onClick={ctaAction}
                            className="bg-accent text-primary font-medium py-3 px-8 rounded-lg hover:bg-accent/90 transition-all"
                        >
                            {ctaText}
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}