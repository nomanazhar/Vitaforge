import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitaForge — AI Fitness Coaching",
  description: "Your personalised AI-powered fitness and diet coaching platform.",
};

import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        {/* Navbar is fixed, so it doesn't need to be in a specific container */}
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
