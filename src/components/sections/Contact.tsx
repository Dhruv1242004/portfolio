"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { PERSONAL } from "@/data/portfolio";

/* ── Inline SVG icons ── */
const GitHubIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const EmailIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
    </svg>
);

const SOCIAL_ICONS = [
    { label: "GitHub", href: PERSONAL.github, icon: GitHubIcon, hoverColor: "var(--text)" },
    { label: "LinkedIn", href: PERSONAL.linkedin, icon: LinkedInIcon, hoverColor: "#0A66C2" },
    { label: "Email", href: `mailto:${PERSONAL.email}`, icon: EmailIcon, hoverColor: "var(--accent)" },
];

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
                <h2 style={{ marginBottom: 16, color: "var(--text)" }}>Get in Touch</h2>

                <p style={{ margin: "0 auto 40px", fontSize: "1rem", color: "var(--text-muted)", maxWidth: 440 }}>
                    I&apos;m always open to interesting conversations, collaboration
                    opportunities, or just saying hello.
                </p>

                {/* ── CTA buttons ── */}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 40 }}>
                    <a
                        href={`mailto:${PERSONAL.email}`}
                        aria-label="Send email to Dhruv Patel"
                        className="btn-primary"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "14px 28px",
                            borderRadius: 14,
                            background: "var(--text)",
                            color: "var(--bg)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Say hello
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M1 13L13 1M13 1H3M13 1V11" />
                        </svg>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download resume (PDF)"
                        className="btn-secondary"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "14px 28px",
                            borderRadius: 14,
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Resume
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 1v9M3 7l4 4 4-4M1 13h12" />
                        </svg>
                    </a>
                </div>

                {/* ── Social icon row ── */}
                <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
                    {SOCIAL_ICONS.map(({ label, href, icon: Icon, hoverColor }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            aria-label={`Visit ${label}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 52,
                                height: 52,
                                borderRadius: 16,
                                border: "1px solid var(--border)",
                                color: "var(--text-muted)",
                                background: "transparent",
                                textDecoration: "none",
                                transition: "color 0.25s ease, transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.color = hoverColor;
                                el.style.transform = "scale(1.08)";
                                el.style.borderColor = hoverColor;
                                el.style.background = "rgba(0,0,0,0.02)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.color = "var(--text-muted)";
                                el.style.transform = "scale(1)";
                                el.style.borderColor = "var(--border)";
                                el.style.background = "transparent";
                            }}
                            onFocus={(e) => {
                                const el = e.currentTarget;
                                el.style.color = hoverColor;
                                el.style.transform = "scale(1.08)";
                            }}
                            onBlur={(e) => {
                                const el = e.currentTarget;
                                el.style.color = "var(--text-muted)";
                                el.style.transform = "scale(1)";
                            }}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
