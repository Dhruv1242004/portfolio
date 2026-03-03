"use client";

import { HERO, PERSONAL, RESUME_PATH } from "@/data/portfolio";

const PANEL_ORBS = [
    {
        top: "10%",
        right: "6%",
        width: "clamp(188px, 20vw, 280px)",
        height: "clamp(188px, 20vw, 280px)",
        background:
            "radial-gradient(circle at 48% 48%, rgba(142, 184, 224, 0.5) 0%, rgba(142, 184, 224, 0.32) 42%, rgba(142, 184, 224, 0.14) 66%, transparent 86%)",
        filter: "blur(10px)",
        animation: "orbDrift1 24s ease-in-out infinite",
    },
    {
        bottom: "12%",
        left: "4%",
        width: "clamp(136px, 13vw, 184px)",
        height: "clamp(136px, 13vw, 184px)",
        background:
            "radial-gradient(circle at 48% 48%, rgba(232, 201, 160, 0.42) 0%, rgba(232, 201, 160, 0.24) 40%, rgba(232, 201, 160, 0.1) 64%, transparent 84%)",
        filter: "blur(9px)",
        animation: "orbDrift2 28s ease-in-out infinite",
    },
    {
        top: "58%",
        left: "32%",
        width: "clamp(98px, 9vw, 132px)",
        height: "clamp(98px, 9vw, 132px)",
        background:
            "radial-gradient(circle at 48% 48%, rgba(186, 173, 212, 0.34) 0%, rgba(186, 173, 212, 0.18) 42%, rgba(186, 173, 212, 0.08) 62%, transparent 82%)",
        filter: "blur(11px)",
        animation: "orbDrift3 32s ease-in-out infinite",
    },
] as const;

const EDGE_ORBS = [
    {
        top: "-34px",
        left: "30px",
        width: "clamp(108px, 11vw, 152px)",
        height: "clamp(108px, 11vw, 152px)",
        background:
            "radial-gradient(circle at 48% 48%, rgba(160, 176, 216, 0.62) 0%, rgba(160, 176, 216, 0.42) 42%, rgba(160, 176, 216, 0.18) 66%, transparent 86%)",
        filter: "blur(0px)",
        animation: "orbDrift4 22s ease-in-out infinite",
    },
    {
        right: "-10px",
        bottom: "-34px",
        width: "clamp(76px, 7vw, 96px)",
        height: "clamp(76px, 7vw, 96px)",
        background:
            "radial-gradient(circle at 48% 48%, rgba(220, 200, 168, 0.52) 0%, rgba(220, 200, 168, 0.42) 46%, rgba(220, 200, 168, 0.28) 68%, rgba(220, 200, 168, 0.14) 84%, transparent 100%)",
        filter: "blur(0px)",
        animation: "orbDrift5 26s ease-in-out infinite",
    },
] as const;

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex w-full items-center overflow-hidden"
            style={{
                minHeight: "100svh",
                marginTop: "calc(-1 * var(--header-h))",
                paddingTop: "var(--header-h)",
                scrollMarginTop: "var(--header-h)",
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "4%",
                    right: "-2%",
                    width: "clamp(360px, 48vw, 620px)",
                    height: "clamp(360px, 48vw, 620px)",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(200, 180, 150, 0.12) 0%, transparent 58%)",
                    filter: "blur(140px)",
                    pointerEvents: "none",
                    zIndex: 0,
                    animation: "hero-glow-breathe 12s ease-in-out infinite",
                    willChange: "transform, opacity",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "-18%",
                    left: "-10%",
                    width: "clamp(320px, 42vw, 560px)",
                    height: "clamp(320px, 42vw, 560px)",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(74, 111, 165, 0.1) 0%, transparent 58%)",
                    filter: "blur(120px)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 55%, rgba(0,0,0,0.022) 100%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            <div
                className="mx-4 w-full sm:mx-6 lg:mx-10"
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 1280,
                    marginInline: "auto",
                    paddingTop: "clamp(84px, 14vw, 96px)",
                    paddingBottom: "clamp(16px, 3vw, 32px)",
                }}
            >
                <div style={{ position: "relative" }}>
                    {EDGE_ORBS.map((orb, index) => (
                        <div
                            key={`edge-orb-${index}`}
                            aria-hidden="true"
                            className="hero-orb"
                            style={{
                                position: "absolute",
                                zIndex: 2,
                                borderRadius: 9999,
                                pointerEvents: "none",
                                willChange: "transform",
                                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.03)",
                                ...orb,
                            }}
                        />
                    ))}

                    <div
                        className="hero-glass-panel"
                        style={{
                            position: "relative",
                            zIndex: 1,
                            isolation: "isolate",
                            overflow: "hidden",
                            padding: "clamp(40px, 6vw, 64px) clamp(24px, 6vw, 56px)",
                            borderRadius: "clamp(20px, 3vw, 32px)",
                            background:
                                "linear-gradient(162deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 48%, rgba(255,255,255,0.085) 100%)",
                            backdropFilter: "blur(14px) saturate(1.12)",
                            WebkitBackdropFilter: "blur(14px) saturate(1.12)",
                            border: "1px solid rgba(255, 255, 255, 0.46)",
                            boxShadow:
                                "0 24px 80px rgba(0,0,0,0.085), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.02)",
                        }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 0,
                                pointerEvents: "none",
                            }}
                        >
                            {PANEL_ORBS.map((orb, index) => (
                                <div
                                    key={`panel-orb-${index}`}
                                    className="hero-orb"
                                    style={{
                                        position: "absolute",
                                        borderRadius: 9999,
                                        willChange: "transform",
                                        ...orb,
                                    }}
                                />
                            ))}
                        </div>

                        <div
                            style={{
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <p
                                style={{
                                    marginBottom: 20,
                                    fontSize: "0.8125rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--accent)",
                                }}
                            >
                                {HERO.label}
                            </p>

                            <h1 style={{ marginBottom: 24, color: "var(--text)" }}>
                                {HERO.heading}
                                <br />
                                <span style={{ color: "var(--text-muted)" }}>{HERO.subheading}</span>
                            </h1>

                            <p
                                style={{
                                    marginBottom: 48,
                                    maxWidth: "42rem",
                                    fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                                    lineHeight: 1.7,
                                    color: "var(--text-muted)",
                                }}
                            >
                                {HERO.intro}
                            </p>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                                <a
                                    href="#work"
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
                                    View my work
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                                        <path d="M7 1v12M1 7l6 6 6-6" />
                                    </svg>
                                </a>

                            <a
                                href={RESUME_PATH}
                                download
                                aria-label="Download resume (PDF)"
                                className="btn-secondary"
                                style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "14px 28px",
                                        borderRadius: 14,
                                        border: "1px solid rgba(0,0,0,0.08)",
                                        background: "rgba(255,255,255,0.22)",
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

                                <a
                                    href={`mailto:${PERSONAL.email}`}
                                    aria-label="Send email to Dhruv Patel"
                                    className="btn-secondary"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        padding: "14px 28px",
                                        borderRadius: 14,
                                        border: "1px solid rgba(0,0,0,0.08)",
                                        background: "rgba(255,255,255,0.22)",
                                        color: "var(--text)",
                                        fontSize: "0.875rem",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                    }}
                                >
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    right: "10%",
                    bottom: 0,
                    height: 1,
                    background: "linear-gradient(to right, transparent, var(--border), transparent)",
                }}
            />
        </section>
    );
}
