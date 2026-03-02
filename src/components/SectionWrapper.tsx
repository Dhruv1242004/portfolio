"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

interface SectionWrapperProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({
    id,
    children,
    className = "",
    delay = 0,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative w-full ${className}`}
            style={{
                scrollMarginTop: "var(--header-h)",
                paddingTop: "clamp(80px, 10vw, 112px)",
                paddingBottom: "clamp(80px, 10vw, 112px)",
                paddingLeft: "clamp(24px, 4vw, 40px)",
                paddingRight: "clamp(24px, 4vw, 40px)",
            }}
        >
            {/* Subtle top divider */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    right: "10%",
                    height: 1,
                    background: "linear-gradient(to right, transparent, var(--border), transparent)",
                }}
            />
            <AnimateOnScroll delay={delay}>
                <div className="mx-auto max-w-5xl">{children}</div>
            </AnimateOnScroll>
        </section>
    );
}
