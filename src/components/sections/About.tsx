"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { EDUCATION, PERSONAL } from "@/data/portfolio";

const IDENTITY = {
    current: "M.S. Computer Science @ University of Houston",
    focus: "Full-stack Engineering + AI Systems",
    strengths: "Clean architecture, APIs, scalable systems",
    openTo: "Summer 2026 SWE Intern",
};

const VALUES = [
    "Clean Architecture",
    "Scalable Systems",
    "Thoughtful APIs",
    "AI-First Thinking",
    "Code Clarity",
    "Continuous Learning",
    "Ship Fast, Ship Well",
    "Team-Oriented",
];

export default function About() {
    const valuesRef = useRef(null);
    const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });

    return (
        <SectionWrapper id="about">
            {/* ── Main 2-column layout ── */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "clamp(32px, 5vw, 64px)",
                    alignItems: "start",
                }}
                className="about-grid"
            >
                {/* ── Left column: About text + Education ── */}
                <div style={{ maxWidth: 640 }}>
                    <h2 style={{ marginBottom: 24, color: "var(--text)" }}>About Me</h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40, fontSize: "1rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
                        <p style={{ margin: 0 }}>
                            I&apos;m a software developer and M.S. Computer Science student at
                            the University of Houston. I enjoy building things that are
                            well-structured, reliable, and genuinely useful — whether
                            that&apos;s an AI agent pipeline, a distributed task system, or a
                            clean mobile app.
                        </p>
                        <p style={{ margin: 0 }}>
                            My work sits at the intersection of backend engineering and
                            applied AI. I&apos;m drawn to problems that involve system
                            design, data pipelines, and making complex things feel simple
                            through thoughtful API design.
                        </p>
                        <p style={{ margin: 0 }}>
                            Outside of engineering, I enjoy exploring new cities, tinkering
                            with side projects, and continuously learning. I value clarity,
                            reliability, and code that other people actually enjoy working
                            with.
                        </p>
                    </div>

                    {/* ── Education card ── */}
                    <div
                        className="card-hover"
                        style={{
                            borderRadius: 16,
                            border: "1px solid var(--border)",
                            padding: 24,
                            background: "rgba(247, 246, 243, 0.65)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "var(--shadow)",
                        }}
                    >
                        <p style={{ margin: "0 0 16px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
                            Education
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {EDUCATION.map((edu) => (
                                <div key={edu.school}>
                                    <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 600, color: "var(--text)" }}>{edu.degree}</p>
                                    <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                        {edu.school} · {edu.location} · {edu.period}
                                    </p>
                                    <p style={{ margin: "2px 0 0", fontSize: "0.75rem", color: "var(--text-muted)" }}>GPA: {edu.gpa}</p>
                                    {edu.coursework.length > 0 && (
                                        <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 4 }}>
                                            {edu.coursework.map((c) => (
                                                <span
                                                    key={c}
                                                    style={{
                                                        padding: "2px 8px",
                                                        borderRadius: 6,
                                                        background: "rgba(74, 111, 165, 0.06)",
                                                        fontSize: "0.65rem",
                                                        fontWeight: 500,
                                                        color: "var(--accent)",
                                                    }}
                                                >
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Right column: Identity card ── */}
                <div
                    className="card-hover"
                    style={{
                        borderRadius: 20,
                        padding: 28,
                        background: "rgba(247, 246, 243, 0.45)",
                        backdropFilter: "blur(20px) saturate(1.5)",
                        WebkitBackdropFilter: "blur(20px) saturate(1.5)",
                        border: "1px solid rgba(232, 230, 225, 0.6)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                >
                    <p style={{ margin: "0 0 20px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
                        At a Glance
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {[
                            { label: "Currently", value: IDENTITY.current },
                            { label: "Focus", value: IDENTITY.focus },
                            { label: "Strengths", value: IDENTITY.strengths },
                            { label: "Open to", value: IDENTITY.openTo },
                        ].map((item) => (
                            <div key={item.label}>
                                <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                                    {item.label}
                                </p>
                                <p style={{ margin: "4px 0 0", fontSize: "0.85rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.5 }}>
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Links row */}
                    <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", gap: 16 }}>
                        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => { (e.currentTarget).style.color = "var(--text)"; }} onMouseLeave={(e) => { (e.currentTarget).style.color = "var(--text-muted)"; }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </a>
                        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => { (e.currentTarget).style.color = "#0A66C2"; }} onMouseLeave={(e) => { (e.currentTarget).style.color = "var(--text-muted)"; }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href={`mailto:${PERSONAL.email}`} aria-label="Send email" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => { (e.currentTarget).style.color = "var(--accent)"; }} onMouseLeave={(e) => { (e.currentTarget).style.color = "var(--text-muted)"; }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Values / Focus chips ── */}
            <div ref={valuesRef} style={{ marginTop: "clamp(48px, 6vw, 72px)" }}>
                <p style={{ margin: "0 0 16px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    What I Value
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {VALUES.map((v, i) => (
                        <motion.span
                            key={v}
                            initial={{ opacity: 0, y: 10 }}
                            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                padding: "8px 18px",
                                borderRadius: 9999,
                                border: "1px solid var(--border)",
                                background: "rgba(247, 246, 243, 0.6)",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                color: "var(--text)",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {v}
                        </motion.span>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
