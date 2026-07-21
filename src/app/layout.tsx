import type { Metadata } from "next";
import { Inter, Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/content";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";
import GrainOverlay from "@/components/GrainOverlay";
import MagneticCursor from "@/components/cursor/MagneticCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Ultra-heavy condensed display face — the all-caps headline voice of the site.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.fullName} — ${brand.tagline}`,
  description:
    "Video editing and graphics agency: short-form and long-form edits, motion graphics, thumbnails, and brand design — with AI automation on the side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <GrainOverlay />
        <MagneticCursor />
      </body>
    </html>
  );
}
