import type { Metadata } from "next";
import { Syne, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Void Studio — Brand & Identity Design",
  description:
    "Void Studio creates logos, websites, and visual brand systems that give companies their face.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
