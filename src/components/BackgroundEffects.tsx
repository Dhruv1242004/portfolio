"use client";

/**
 * BackgroundEffects — HIGH INTENSITY ambient gradients + grain overlay.
 *
 * z-index: -1, body is transparent, html carries the bg color.
 * Gradients use strong enough opacity (35-45% core) to be clearly visible
 * against the #F7F6F3 beige background.
 */
export default function BackgroundEffects() {
    return (
        <>
            {/* ── Ambient radial gradients ── */}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: -1,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
            >
                {/* ▸ Cool blue blob — top-left. High contrast against warm beige. */}
                <div
                    style={{
                        position: "absolute",
                        top: "-15%",
                        left: "-12%",
                        width: "clamp(500px, 70vw, 1000px)",
                        height: "clamp(500px, 70vw, 1000px)",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(74, 111, 165, 0.35) 0%, rgba(74, 111, 165, 0.12) 35%, transparent 65%)",
                        animation: "ambient-drift-1 35s ease-in-out infinite",
                        willChange: "transform",
                    }}
                />

                {/* ▸ Deep warm peach blob — right side */}
                <div
                    style={{
                        position: "absolute",
                        top: "15%",
                        right: "-12%",
                        width: "clamp(450px, 60vw, 900px)",
                        height: "clamp(450px, 60vw, 900px)",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(210, 170, 120, 0.30) 0%, rgba(210, 170, 120, 0.08) 40%, transparent 65%)",
                        animation: "ambient-drift-2 40s ease-in-out infinite",
                        willChange: "transform",
                    }}
                />

                {/* ▸ Subtle violet/purple tint — bottom center for depth */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-10%",
                        left: "20%",
                        width: "clamp(400px, 55vw, 800px)",
                        height: "clamp(400px, 55vw, 800px)",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(130, 100, 160, 0.18) 0%, rgba(130, 100, 160, 0.05) 40%, transparent 65%)",
                        animation: "ambient-drift-3 30s ease-in-out infinite",
                        willChange: "transform",
                    }}
                />
            </div>

            {/* ── Grain / noise overlay ── */}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    pointerEvents: "none",
                    opacity: 0.04,
                    mixBlendMode: "multiply",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />
        </>
    );
}
