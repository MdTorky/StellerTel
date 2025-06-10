"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    once = true,
    threshold = 0.1,
    animation = "fadeIn", // fadeIn, slideUp, slideIn, scale
}) => {
    const [ref, inView] = useInView({
        triggerOnce: once,
        threshold: threshold,
    })

    const animations = {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut",
                },
            },
        },
        slideUp: {
            hidden: { opacity: 0, y: 50 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut",
                },
            },
        },
        slideIn: {
            hidden: { opacity: 0, x: -50 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut",
                },
            },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut",
                },
            },
        },
    }

    const selectedAnimation = animations[animation] || animations.fadeIn

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={selectedAnimation}
            className={className}
        >
            {children}
        </motion.div>
    )
}
