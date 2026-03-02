import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dhruv Patel — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: "100%",
                    height: "100%",
                    padding: "80px 100px",
                    backgroundColor: "#F7F6F3",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#4A6FA5",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        marginBottom: 24,
                    }}
                >
                    SOFTWARE DEVELOPER & CS GRAD STUDENT
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 64,
                        fontWeight: 800,
                        color: "#1A1A1A",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        marginBottom: 20,
                    }}
                >
                    Dhruv Patel
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 28,
                        color: "#6B6B6B",
                        lineHeight: 1.5,
                        maxWidth: 700,
                    }}
                >
                    Building full-stack apps, AI agents, and distributed systems.
                </div>
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: 80,
                        left: 100,
                        fontSize: 16,
                        color: "#6B6B6B",
                    }}
                >
                    dhruvpatel.dev
                </div>
            </div>
        ),
        { ...size },
    );
}
