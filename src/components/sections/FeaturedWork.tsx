"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { PROJECTS } from "@/data/portfolio";

/* ── Soft liquid wipe mask ──────────────────────────────
   A full-size overlay in the background tone slides across
   via clip-path, then reveals the new content underneath.
   The organic cubic-bezier gives it a liquid feel.
   ─────────────────────────────────────────────────────── */

const WIPE_DURATION = 0.8;
const LIQUID_EASE = [0.76, 0, 0.24, 1] as const;
const AUTO_PLAY_INTERVAL = 3500; // 3.5 seconds idle between projects

function LiquidWipe({ onComplete }: { onComplete: () => void }) {
    return (
        <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
            style={{ background: "var(--bg)" }}
            initial={{ clipPath: "inset(0 100% 0 0 round 24px)" }}
            animate={{ clipPath: "inset(0 0% 0 0 round 0px)" }}
            exit={{ clipPath: "inset(0 0% 0 100% round 24px)" }}
            transition={{
                duration: WIPE_DURATION,
                ease: LIQUID_EASE,
            }}
            onAnimationComplete={onComplete}
            aria-hidden
        />
    );
}

/* ── Content fade ───────────────────────────────────── */

const contentVariants = {
    enter: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
};

export default function FeaturedWork() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [isWiping, setIsWiping] = useState(false);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const project = PROJECTS[displayIndex];

    const handleSwitch = useCallback(
        (next: number) => {
            if (next === activeIndex || isWiping) return;
            setActiveIndex(next);
            setIsWiping(true);

            // Swap content at midpoint of wipe
            setTimeout(() => {
                setDisplayIndex(next);
            }, (WIPE_DURATION * 1000) / 2);

            // Reset wipe state after full duration
            setTimeout(() => {
                setIsWiping(false);
            }, WIPE_DURATION * 1000 + 50);
        },
        [activeIndex, isWiping],
    );

    // Auto-rotate projects every 5s, pause on hover
    useEffect(() => {
        if (paused || isWiping) return;

        intervalRef.current = setInterval(() => {
            const next = (activeIndex + 1) % PROJECTS.length;
            handleSwitch(next);
        }, AUTO_PLAY_INTERVAL);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeIndex, paused, isWiping, handleSwitch]);

    return (
        <SectionWrapper id="work">
            <div className="mb-10 max-w-xl">
                <h2 className="mb-3 text-foreground">Featured Work</h2>
                <p className="text-base text-muted">
                    A selection of projects I&apos;ve built end-to-end.
                </p>
            </div>

            <div
                className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Left — project details */}
                <div className="relative min-h-[280px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={displayIndex}
                            variants={contentVariants}
                            initial="enter"
                            animate="visible"
                            exit="exit"
                            transition={{
                                duration: 0.35,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
                                Project {String(displayIndex + 1).padStart(2, "0")} /{" "}
                                {String(PROJECTS.length).padStart(2, "0")}
                            </p>

                            <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                                {project.title}
                            </h3>

                            <p className="mb-6 text-sm leading-relaxed text-muted md:text-base">
                                {project.description}
                            </p>

                            <div className="mb-8 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-border-token bg-foreground/[0.02] px-3 py-1 text-xs font-medium text-muted"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                            >
                                View on GitHub
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M1 13L13 1M13 1H3M13 1V11" />
                                </svg>
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right — preview panel with liquid wipe */}
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="aspect-[4/3] w-full rounded-2xl border border-border-token bg-foreground/[0.02] shadow-token" />

                    <AnimatePresence>
                        {isWiping && (
                            <LiquidWipe
                                key={`wipe-${activeIndex}`}
                                onComplete={() => { }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation dots */}
            <div className="mt-10 flex items-center gap-2" role="tablist" aria-label="Project navigation">
                {PROJECTS.map((p, i) => (
                    <button
                        key={p.title}
                        type="button"
                        role="tab"
                        aria-label={`View project: ${p.title}`}
                        aria-selected={i === activeIndex}
                        onClick={() => handleSwitch(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                            ? "w-8 bg-accent"
                            : "w-2 bg-border-token hover:bg-muted"
                            }`}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
