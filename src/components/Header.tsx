"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL } from "@/data/portfolio";

const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const observerRef = useRef<IntersectionObserver | null>(null);

    /* ── Navigation lock: prevents observer flicker during programmatic scroll ── */
    const isNavigating = useRef(false);
    const navTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const unlockNavigation = useCallback(() => {
        isNavigating.current = false;
        if (navTimerRef.current) {
            clearTimeout(navTimerRef.current);
            navTimerRef.current = null;
        }
    }, []);

    const lockNavigation = useCallback((targetId: string) => {
        // 1. Optimistic: set active immediately
        setActiveSection(targetId);
        // 2. Block observer updates
        isNavigating.current = true;
        // 3. Clear any previous timer
        if (navTimerRef.current) clearTimeout(navTimerRef.current);

        // 4. Fallback timeout to re-enable observer (covers all cases)
        navTimerRef.current = setTimeout(unlockNavigation, 900);

        // 5. Also listen for scrollend (modern browsers) for earlier unlock
        if ("onscrollend" in window) {
            const onEnd = () => {
                unlockNavigation();
                window.removeEventListener("scrollend", onEnd);
            };
            window.addEventListener("scrollend", onEnd, { once: true });
        }
    }, [unlockNavigation]);

    /* ── IntersectionObserver for active section ── */
    /*   Hero in view → no active pill                */
    /*   Otherwise → topmost visible section is active */
    /*   All callbacks gated by isNavigating lock      */
    useEffect(() => {
        const heroEl = document.getElementById("hero");

        // Hero observer: when hero is visible (>40%), clear active
        const heroObserver = new IntersectionObserver(
            (entries) => {
                if (isNavigating.current) return; // locked
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection("");
                    }
                }
            },
            { threshold: 0.4 },
        );
        if (heroEl) heroObserver.observe(heroEl);

        // Section observer: pick the topmost intersecting section
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (isNavigating.current) return; // locked
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: "-20% 0px -75% 0px" },
        );
        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observerRef.current!.observe(el);
        });
        return () => {
            heroObserver.disconnect();
            observerRef.current?.disconnect();
        };
    }, []);

    /* ── ESC closes mobile menu ── */
    useEffect(() => {
        if (!menuOpen) return;
        const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
        document.addEventListener("keydown", fn);
        return () => document.removeEventListener("keydown", fn);
    }, [menuOpen]);

    /* ── Lock body scroll on mobile menu ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    /* ── Cleanup nav timer on unmount ── */
    useEffect(() => {
        return () => {
            if (navTimerRef.current) clearTimeout(navTimerRef.current);
        };
    }, []);

    const close = useCallback(() => setMenuOpen(false), []);

    const handleNav = useCallback((href: string) => {
        const id = href.replace("#", "");
        lockNavigation(id);
    }, [lockNavigation]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: "clamp(8px, 1.4vw, 12px)",
                    left: 0,
                    width: "100%",
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 16px",
                    pointerEvents: "none",
                    background: "transparent",
                }}
            >
                {/* ── Floating glass pill ── */}
                <div
                    style={{
                        pointerEvents: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        maxWidth: 900,
                        padding: "10px 8px 10px 24px",
                        borderRadius: 9999,
                        background: "rgba(255, 255, 255, 0.45)",
                        backdropFilter: "blur(16px) saturate(1.3)",
                        WebkitBackdropFilter: "blur(16px) saturate(1.3)",
                        border: "1px solid rgba(0, 0, 0, 0.10)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
                        transition: "all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                >
                    {/* ── Wordmark ── */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveSection("");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        style={{
                            fontFamily: "var(--font-heading), var(--font-sans), system-ui, sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            letterSpacing: "-0.02em",
                            color: "var(--text)",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {PERSONAL.name}
                    </a>

                    {/* ── Desktop nav (pill links) ── */}
                    <nav aria-label="Main navigation" className="hidden md:block">
                        <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
                            {NAV_LINKS.map((link) => {
                                const id = link.href.replace("#", "");
                                const active = activeSection === id;
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => handleNav(link.href)}
                                            style={{
                                                position: "relative",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                padding: "7px 16px",
                                                borderRadius: 9999,
                                                fontSize: "13px",
                                                fontWeight: 600,
                                                letterSpacing: "0.01em",
                                                fontFamily: "var(--font-heading), var(--font-sans), system-ui, sans-serif",
                                                color: active ? "var(--bg)" : "var(--text-muted)",
                                                textDecoration: "none",
                                                transition: "color 0.2s ease",
                                                zIndex: 1,
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!active) (e.target as HTMLElement).style.color = "var(--text)";
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!active) (e.target as HTMLElement).style.color = "var(--text-muted)";
                                            }}
                                        >
                                            {link.label}
                                            {active && (
                                                <motion.span
                                                    layoutId="nav-active"
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        zIndex: -1,
                                                        borderRadius: 9999,
                                                        background: "var(--text)",
                                                        willChange: "transform",
                                                        transform: "translateZ(0)",
                                                    }}
                                                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                                />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* ── Hamburger (MOBILE ONLY) ── */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-sheet"
                        onClick={() => setMenuOpen((v) => !v)}
                        className="flex items-center justify-center md:!hidden"
                        style={{
                            width: 38,
                            height: 38,
                            borderRadius: 9999,
                            border: "none",
                            background: menuOpen ? "rgba(0,0,0,0.06)" : "transparent",
                            color: "var(--text)",
                            cursor: "pointer",
                            transition: "background 0.15s",
                            flexShrink: 0,
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            {menuOpen ? (
                                <><line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" /></>
                            ) : (
                                <><line x1="3" y1="6" x2="17" y2="6" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="14" x2="17" y2="14" /></>
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* ── Mobile sheet overlay ── */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={close}
                            style={{
                                position: "fixed",
                                inset: 0,
                                zIndex: 55,
                                background: "rgba(0, 0, 0, 0.12)",
                                backdropFilter: "blur(4px)",
                            }}
                            className="md:hidden"
                        />
                        <motion.nav
                            id="mobile-sheet"
                            aria-label="Mobile navigation"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                            className="md:hidden"
                            style={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 60,
                                width: 280,
                                background: "rgba(247, 246, 243, 0.97)",
                                backdropFilter: "blur(20px)",
                                borderLeft: "1px solid var(--border)",
                                paddingTop: 80,
                            }}
                        >
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={close}
                                style={{
                                    position: "absolute",
                                    top: 20,
                                    right: 20,
                                    width: 40,
                                    height: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 9999,
                                    border: "none",
                                    background: "transparent",
                                    cursor: "pointer",
                                    color: "var(--text)",
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                    <line x1="3" y1="3" x2="15" y2="15" /><line x1="15" y1="3" x2="3" y2="15" />
                                </svg>
                            </button>
                            <ul style={{ listStyle: "none", margin: 0, padding: "0 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                                {NAV_LINKS.map((link) => {
                                    const id = link.href.replace("#", "");
                                    const active = activeSection === id;
                                    return (
                                        <li key={link.href}>
                                            <a
                                                href={link.href}
                                                onClick={() => { handleNav(link.href); close(); }}
                                                style={{
                                                    display: "block",
                                                    padding: "12px 16px",
                                                    borderRadius: 14,
                                                    fontSize: "15px",
                                                    fontWeight: 600,
                                                    fontFamily: "var(--font-heading), var(--font-sans), system-ui, sans-serif",
                                                    color: active ? "var(--bg)" : "var(--text-muted)",
                                                    background: active ? "var(--text)" : "transparent",
                                                    textDecoration: "none",
                                                    transition: "all 0.15s",
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
