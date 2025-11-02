import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Archbicon | Architectural & Construction Excellence",
  description:
    "Building modern spaces with innovation, precision, and design excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground`}
      >
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} Archbicon. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
