import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { NeuralNetworkBackground } from "@/components/ui/NeuralNetworkBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubh Porwal — Full-Stack Web Developer",
  description:
    "Shubh Porwal is a B.Tech Computer Science student and Full-Stack Web Developer building modern web applications, AI-powered products and scalable software solutions.",
  keywords: [
    "Shubh Porwal",
    "Full-Stack Web Developer",
    "Software Developer",
    "AI & Full-Stack Builder",
    "Lovely Professional University",
    "React",
    "Next.js",
    "Node.js",
    "Anil Jewellers",
    "ZentiqAI",
  ],
  authors: [{ name: "Shubh Porwal" }],
  creator: "Shubh Porwal",
  metadataBase: new URL("https://shubhporwal.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shubh Porwal — Full-Stack Web Developer",
    description:
      "Shubh Porwal is a B.Tech Computer Science student and Full-Stack Web Developer building modern web applications, AI-powered products and scalable software solutions.",
    url: "https://shubhporwal.dev",
    siteName: "Shubh Porwal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Porwal — Full-Stack Web Developer",
    description:
      "Shubh Porwal is a B.Tech Computer Science student and Full-Stack Web Developer building modern web applications, AI-powered products and scalable software solutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubh Porwal",
    jobTitle: "Full-Stack Web Developer",
    url: "https://shubhporwal.dev",
    sameAs: [
      "https://github.com/shubhporwal07",
      "https://linkedin.com/in/shubh-porwal10",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Lovely Professional University",
    },
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Firebase",
      "Multimodal AI",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shubh Porwal Portfolio",
    url: "https://shubhporwal.dev",
    description:
      "Personal portfolio of Shubh Porwal, Full-Stack Web Developer and Computer Science undergraduate.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="bg-[#080808] text-[#f5f5f5] min-h-screen selection:bg-cyan-400 selection:text-black antialiased relative overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            GLOBAL FIXED NEURAL NETWORK — behind everything
            Opacity kept low so text stays legible across
            all sections, not just the hero
        ══════════════════════════════════════════════ */}
        <div className="fixed inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
          <NeuralNetworkBackground className="w-full h-full" />
          {/* Dark base overlay so background doesn't overwhelm content */}
          <div className="absolute inset-0 bg-[#080808]/70" />
        </div>

        {/* Subtle editorial grid lines over the canvas */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-grid-subtle opacity-30" />

        {/* Interactive Smooth Cursor (Desktop only) */}
        <CustomCursor />

        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Short Cinematic Loading Screen */}
        <LoadingScreen />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>

        {/* Editorial Footer */}
        <Footer />
      </body>
    </html>
  );
}
