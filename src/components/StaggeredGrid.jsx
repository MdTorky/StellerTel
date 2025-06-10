"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const StaggeredGrid = ({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
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
                    ease: "easeOut",
                    delay: staggerDelay
                },
            },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.4 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: duration,
                    ease: "easeOut",
                },
            },
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    }

    const selectedAnimation = animations[animation] || animations.fadeIn

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={selectedAnimation}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    )
}
