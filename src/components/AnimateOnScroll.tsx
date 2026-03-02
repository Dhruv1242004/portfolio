"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

export default function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
}: AnimateOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
            style={{
                willChange: "opacity, transform",
            }}
        >
            {children}
        </motion.div>
    );
}
