import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://dhruvpatel.dev";

export const metadata: Metadata = {
  title: {
    default: "Dhruv Patel — Software Developer",
    template: "%s | Dhruv Patel",
  },
  description:
    "Software developer and M.S. Computer Science student at the University of Houston. Building full-stack apps, AI agents, and distributed systems.",
  keywords: [
    "Dhruv Patel",
    "software developer",
    "portfolio",
    "full-stack",
    "Python",
    "FastAPI",
    "AI",
    "LLM",
    "distributed systems",
    "University of Houston",
  ],
  authors: [{ name: "Dhruv Patel", url: siteUrl }],
  creator: "Dhruv Patel",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dhruv Patel",
    title: "Dhruv Patel — Software Developer",
    description:
      "Software developer building full-stack apps, AI agents, and distributed systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhruv Patel — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Patel — Software Developer",
    description:
      "Software developer building full-stack apps, AI agents, and distributed systems.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <BackgroundEffects />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
