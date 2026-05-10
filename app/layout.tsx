import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christie Shen | Strategic Business Leader",
  description:
    "Director & Head of Strategy at Adobe. 15+ years driving growth strategy, AI go-to-market, and operational transformation at Adobe, Google, Bain & Co.",
  openGraph: {
    title: "Christie Shen | Strategic Business Leader",
    description:
      "Director & Head of Strategy at Adobe. 15+ years driving growth strategy, AI go-to-market, and operational transformation.",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
