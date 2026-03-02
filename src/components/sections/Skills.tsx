"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { SKILL_GROUPS } from "@/data/portfolio";

export default function Skills() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mql = window.matchMedia("(hover: none)");
        const update = () => setIsMobile(mql.matches);
        update();
        mql.addEventListener("change", update);
        return () => mql.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        if (!isMobile || !activeId) return;
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setActiveId(null);
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [isMobile, activeId]);

    const handleInteract = useCallback(
        (category: string) => {
            if (isMobile) setActiveId((prev) => (prev === category ? null : category));
        },
        [isMobile],
    );

    return (
        <SectionWrapper id="skills">
            <div style={{ marginBottom: 40, maxWidth: 520 }}>
                <h2 style={{ marginBottom: 12, color: "var(--text)" }}>Skills</h2>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", margin: 0 }}>
                    {isMobile ? "Tap a card to expand." : "Hover over a card to explore."}
                </p>
            </div>

            <div
                ref={containerRef}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 16,
                }}
                role="list"
            >
                {SKILL_GROUPS.map((group) => {
                    const expanded = isMobile ? activeId === group.category : false;
                    return (
                        <SkillCard
                            key={group.category}
                            category={group.category}
                            items={group.items}
                            expanded={expanded}
                            isMobile={isMobile}
                            onTap={() => handleInteract(group.category)}
                        />
                    );
                })}
            </div>
        </SectionWrapper>
    );
}

function SkillCard({
    category,
    items,
    expanded,
    isMobile,
    onTap,
}: {
    category: string;
    items: string[];
    expanded: boolean;
    isMobile: boolean;
    onTap: () => void;
}) {
    const [hovered, setHovered] = useState(false);
    const showChips = isMobile ? expanded : hovered;

    return (
        <div
            role="listitem"
            tabIndex={0}
            aria-label={`${category} skills`}
            onClick={onTap}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onTap(); } }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            style={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 16,
                background: hovered || expanded ? "var(--card-dark-hover)" : "var(--card-dark)",
                border: `1px solid ${hovered || expanded ? "var(--card-dark-border)" : "transparent"}`,
                transform: hovered || expanded ? "scale(1.03)" : "scale(1)",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                outline: "none",
                minHeight: 180,
            }}
        >
            <div style={{ padding: "28px 24px" }}>
                <h3
                    style={{
                        margin: 0,
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        color: "var(--card-dark-text)",
                    }}
                >
                    {category}
                </h3>

                {/* ── Skill chips ── */}
                <div
                    style={{
                        marginTop: showChips ? 16 : 0,
                        maxHeight: showChips ? 200 : 0,
                        opacity: showChips ? 1 : 0,
                        transform: showChips ? "translateY(0)" : "translateY(8px)",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                        display: "flex",
                        flexWrap: "wrap" as const,
                        gap: 6,
                    }}
                >
                    {items.map((skill) => (
                        <span
                            key={skill}
                            style={{
                                padding: "5px 10px",
                                borderRadius: 8,
                                border: "1px solid var(--card-dark-border)",
                                background: "rgba(255, 255, 255, 0.06)",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--card-dark-text)",
                                whiteSpace: "nowrap" as const,
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
