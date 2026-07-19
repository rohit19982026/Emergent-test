import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/content";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";
import GrainOverlay from "@/components/GrainOverlay";
import MagneticCursor from "@/components/cursor/MagneticCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${brand.fullName} — ${brand.tagline}`,
  description:
    "Creative agency and AI automation studio serving the US and Europe: marketing content, video, design, AI agents, and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <GrainOverlay />
        <MagneticCursor />
      </body>
    </html>
  );
}
