"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <div style={{ marginBottom: 40, maxWidth: 520 }}>
                <h2 style={{ marginBottom: 12, color: "var(--text)" }}>Experience</h2>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", margin: 0 }}>
                    Where I&apos;ve worked and the impact I&apos;ve made.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {EXPERIENCES.map((exp, idx) => (
                    <TimelineItem key={exp.company} exp={exp} isLast={idx === EXPERIENCES.length - 1} />
                ))}
            </div>
        </SectionWrapper>
    );
}

function TimelineItem({
    exp,
    isLast,
}: {
    exp: (typeof EXPERIENCES)[0];
    isLast: boolean;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <div
            ref={ref}
            style={{ display: "flex", gap: 0, position: "relative" }}
        >
            {/* ── Timeline rail ── */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 40,
                    flexShrink: 0,
                    paddingTop: 6,
                }}
                className="hidden md:flex"
            >
                {/* Dot */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    style={{
                        width: 14,
                        height: 14,
                        borderRadius: 9999,
                        background: "var(--accent)",
                        border: "3px solid var(--bg)",
                        boxShadow: "0 0 0 2px var(--accent)",
                        flexShrink: 0,
                        zIndex: 2,
                    }}
                />
                {/* Line */}
                {!isLast && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            width: 2,
                            flex: 1,
                            background: "var(--border)",
                            transformOrigin: "top",
                        }}
                    />
                )}
            </div>

            {/* ── Experience card ── */}
            <motion.article
                className="card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                    flex: 1,
                    borderRadius: 20,
                    border: "1px solid var(--border)",
                    padding: "clamp(24px, 4vw, 36px)",
                    marginBottom: isLast ? 0 : 32,
                    background: "rgba(247, 246, 243, 0.7)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "var(--shadow)",
                    cursor: "default",
                }}
                whileHover={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                    y: -2,
                }}
            >
                {/* Header row */}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 12 }}>
                    <div>
                        <h3 style={{ margin: 0, color: "var(--text)" }}>{exp.role}</h3>
                        <p style={{ margin: "4px 0 0", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                            {exp.company} · {exp.location}
                        </p>
                    </div>
                    <span
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                            background: "rgba(74, 111, 165, 0.08)",
                            padding: "4px 12px",
                            borderRadius: 9999,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {exp.period}
                    </span>
                </div>

                {/* Description */}
                <p style={{ margin: "0 0 16px", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
                    {exp.description}
                </p>

                {/* Highlights */}
                <ul style={{ margin: "0 0 20px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {exp.highlights.map((item) => (
                        <li
                            key={item}
                            style={{
                                position: "relative",
                                paddingLeft: 16,
                                fontSize: "0.85rem",
                                lineHeight: 1.6,
                                color: "var(--text-muted)",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "0.55em",
                                    width: 5,
                                    height: 5,
                                    borderRadius: 9999,
                                    background: "var(--accent)",
                                    opacity: 0.5,
                                }}
                            />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* ── Impact metrics ── */}
                <div style={{ marginBottom: 16 }}>
                    <p style={{ margin: "0 0 8px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        Impact
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {exp.impactMetrics.map((metric) => (
                            <span
                                key={metric}
                                style={{
                                    padding: "4px 12px",
                                    borderRadius: 9999,
                                    background: "rgba(74, 111, 165, 0.06)",
                                    border: "1px solid rgba(74, 111, 165, 0.15)",
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    color: "var(--accent)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {metric}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Tech stack badges ── */}
                <div style={{ marginBottom: exp.links?.length ? 16 : 0 }}>
                    <p style={{ margin: "0 0 8px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        Tech Stack
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {exp.techStack.map((tech) => (
                            <span
                                key={tech}
                                style={{
                                    padding: "4px 10px",
                                    borderRadius: 8,
                                    background: "var(--card-dark)",
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    color: "var(--card-dark-text)",
                                    letterSpacing: "0.01em",
                                    transition: "transform 0.2s ease",
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Links ── */}
                {exp.links && exp.links.length > 0 && (
                    <div style={{ display: "flex", gap: 12 }}>
                        {exp.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontSize: "0.8rem",
                                    fontWeight: 500,
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                                    <path d="M1 13L13 1M13 1H3M13 1V11" />
                                </svg>
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </motion.article>
        </div>
    );
}
