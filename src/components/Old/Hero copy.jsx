import { Link } from "react-router-dom"

export const Hero = ({ title, subtitle, primaryCta, secondaryCta, primaryCtaLink, secondaryCtaLink }) => {
    return (
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20 md:py-32">
            <div className="container-custom">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>

                    <div className="flex flex-wrap gap-4">
                        {primaryCta && (
                            <Link
                                to={primaryCtaLink}
                                className="bg-lighttext text-darktext font-medium py-3 px-6 rounded-lg hover:bg-lighttext/80 transition-all duration-400 hover:translate-y-0.5"
                            >
                                {primaryCta}
                            </Link>
                        )}

                        {secondaryCta && (
                            <Link
                                to={secondaryCtaLink}
                                className="border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-400 hover:translate-y-0.5"
                            >
                                {secondaryCta}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
