import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Green Spirit IT Solutions — AI-Powered Software Development",
    template: "%s | Green Spirit IT Solutions",
  },
  description:
    "60+ delivered projects. From full-stack web platforms to multi-agent AI systems, speech recognition, and trading automation. We build software that works.",
  keywords: [
    "AI development",
    "web development",
    "Next.js",
    "machine learning",
    "Slovenia",
    "software agency",
    "custom software",
    "ElevenLabs",
    "Supabase",
    "automation",
  ],
  authors: [{ name: "Green Spirit IT Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Green Spirit IT Solutions",
    title: "Green Spirit IT Solutions — AI-Powered Software Development",
    description:
      "60+ delivered projects. From full-stack web platforms to AI systems — we build software that converts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Spirit IT Solutions",
    description: "60+ projects. AI-native software studio.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
