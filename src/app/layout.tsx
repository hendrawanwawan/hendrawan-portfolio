import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hendrawan — Full-Stack Engineer & AI Researcher",
  description:
    "Full-Stack Engineer and AI/ML Researcher based in Makassar, Indonesia. Building civic-tech platforms, medical deep learning pipelines, and production-grade web applications.",
  keywords: [
    "Hendrawan",
    "Full-Stack Engineer",
    "AI Researcher",
    "Machine Learning",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Makassar",
    "Indonesia",
  ],
  authors: [{ name: "Hendrawan" }],
  openGraph: {
    title: "Hendrawan — Full-Stack Engineer & AI Researcher",
    description:
      "Full-Stack Engineer and AI/ML Researcher based in Makassar, Indonesia.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
